import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Pagination } from 'antd'
import { WrapperProducts } from './style'
import { useLocation } from 'react-router-dom'
import * as ProductService from '../../services/ProductService'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../components/LoadingComponent/Loading'
import { useSelector } from 'react-redux'
import { useDebounce } from '../../hooks/UseDebounce'

const TypeProductPage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)

    const { state}  = useLocation()
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 10,
    })

    const fetchProductType = async () => {
        const res = await ProductService.getProductType(state, panigate.page, panigate.limit)
        return res
    }

    const { data, isLoading: loading } = useQuery({
        queryKey: ['products-type', state, panigate.page, panigate.limit],
        queryFn: fetchProductType,
        enabled: !!state,
        retry: 3,
        retryDelay: 1000,
    })

    const products = data?.status === 'OK' ? data?.data : []
    const total = data?.status === 'OK' ? data?.totalPage : 1

    const onChange = (current, pageSize) => {
        setPanigate({...panigate, page: current - 1, limit: pageSize})
    }
    return (
        <Loading isLoading={loading}>
            <div style={{ width: '100%', background: '#efefef', minHeight: 'calc(100vh - 64px)', paddingBottom: '20px' }}>
                <div style={{ width: '1270px', margin: '0 auto', paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <WrapperProducts>
                        {products?.filter((pro) => {
                            if(searchDebounce === '') {
                                return pro
                            }else if(pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                                return pro
                            }
                        })?.map((product) => {
                            return (
                                <CardComponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    discount={product.discount}
                                    id={product._id}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <Pagination defaultCurrent={panigate.page + 1} total={total} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
                </div>
            </div>
        </Loading>
    )
}

export default TypeProductPage