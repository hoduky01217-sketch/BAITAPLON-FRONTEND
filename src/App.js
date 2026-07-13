import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routes'
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode';
import * as UserService from './services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, updateUser } from './redux/slides/userSlide'
import Loading from './components/LoadingComponent/Loading'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      const { storageData, decoded } = handleDecoded()
      if (decoded?.id) {
        try {
          await handleGetDetailsUser(decoded?.id, storageData)
        } catch (e) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          dispatch(resetUser())
        }
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  const handleDecoded = () => {
    let storageData = user?.access_token || localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  useEffect(() => {
    const interceptorId = UserService.axiosJWT.interceptors.request.use(async (config) => {
      // Do something before request is sent
      const currentTime = new Date()
      const { decoded } = handleDecoded()
      const storageRefreshToken = localStorage.getItem('refresh_token')
      const refreshToken = storageRefreshToken && isJsonString(storageRefreshToken)
        ? JSON.parse(storageRefreshToken)
        : null
      if (!refreshToken) {
        return config;
      }
      let decodedRefreshToken = {}
      try {
        decodedRefreshToken = jwtDecode(refreshToken)
      } catch (e) {
        return config;
      }
      if (decoded?.exp < currentTime.getTime() / 1000) {
        if(decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
          const data = await UserService.refreshToken(refreshToken)
          config.headers['token'] = `Bearer ${data?.access_token}`
        }else {
          dispatch(resetUser())
        }
      }
      return config;
    }, (err) => {
      return Promise.reject(err)
    })

    return () => {
      UserService.axiosJWT.interceptors.request.eject(interceptorId)
    }
  }, [dispatch])

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken}))
  }

  return (
    <div style={{height: '100vh', width: '100%'}}>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              const isNotAllowed = route.isPrivated && !user?.isAdmin
              return (
                <Route key={route.path} path={route.path} element={
                  isNotAllowed ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                } />
              )
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  )
}

export default App