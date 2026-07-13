import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperOriginalPriceText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'
import styled from 'styled-components'

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    const discountedPrice = discount ? price - (price * discount / 100) : price
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() =>  handleDetailsProduct(id)}
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
            />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            {discount > 0 ? (
                <>
                    <div>
                        <WrapperOriginalPriceText>{convertPrice(price)}</WrapperOriginalPriceText>
                        <WrapperDiscountText>
                            - {discount} %
                        </WrapperDiscountText>
                    </div>
                    <WrapperPriceText>{convertPrice(discountedPrice)}</WrapperPriceText>
                </>
            ) : (
                <WrapperPriceText>{convertPrice(price)}</WrapperPriceText>
            )}
        </WrapperCardStyle>
    )
}

export default CardComponent