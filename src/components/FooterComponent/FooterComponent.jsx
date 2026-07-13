import React from 'react'
import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined
} from '@ant-design/icons'
import logo from '../../assets/images/tiki.png'
import {
  WrapperFooter,
  WrapperFooterContainer,
  WrapperFooterColumn,
  WrapperFooterTitle,
  WrapperFooterLink,
  WrapperFooterText,
  WrapperSocialRow,
  WrapperSocialIcon,
  WrapperPaymentRow,
  WrapperPaymentBadge,
  WrapperFooterBottom,
  WrapperFooterBottomContainer
} from './style'

const FooterComponent = () => {
  return (
    <WrapperFooter>
      <WrapperFooterContainer>
        <WrapperFooterColumn style={{ flex: 1.4 }}>
          <img src={logo} alt="ComputerShop" style={{ height: '40px', marginBottom: '16px' }} />
          <WrapperFooterText>
            <EnvironmentOutlined style={{ marginRight: '8px' }} />
            123 Đường ABC, Quận 1, TP. Hồ Chí Minh
          </WrapperFooterText>
          <WrapperFooterText>
            <PhoneOutlined style={{ marginRight: '8px' }} />
            Hotline: 1900 1234 (8:00 - 21:30)
          </WrapperFooterText>
          <WrapperFooterText>
            <MailOutlined style={{ marginRight: '8px' }} />
            support@computershop.vn
          </WrapperFooterText>
          <WrapperSocialRow>
            <WrapperSocialIcon href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookFilled />
            </WrapperSocialIcon>
            <WrapperSocialIcon href="#" target="_blank" rel="noreferrer" aria-label="Youtube">
              <YoutubeFilled />
            </WrapperSocialIcon>
            <WrapperSocialIcon href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramFilled />
            </WrapperSocialIcon>
          </WrapperSocialRow>
        </WrapperFooterColumn>

        <WrapperFooterColumn>
          <WrapperFooterTitle>Hỗ trợ khách hàng</WrapperFooterTitle>
          <WrapperFooterLink href="#">Trung tâm trợ giúp</WrapperFooterLink>
          <WrapperFooterLink href="#">Hướng dẫn mua hàng</WrapperFooterLink>
          <WrapperFooterLink href="#">Hướng dẫn thanh toán</WrapperFooterLink>
          <WrapperFooterLink href="#">Chính sách đổi trả</WrapperFooterLink>
          <WrapperFooterLink href="#">Chính sách bảo hành</WrapperFooterLink>
          <WrapperFooterLink href="#">Vận chuyển &amp; Giao nhận</WrapperFooterLink>
        </WrapperFooterColumn>

        <WrapperFooterColumn>
          <WrapperFooterTitle>Về ComputerShop</WrapperFooterTitle>
          <WrapperFooterLink href="#">Giới thiệu</WrapperFooterLink>
          <WrapperFooterLink href="#">Tuyển dụng</WrapperFooterLink>
          <WrapperFooterLink href="#">Điều khoản sử dụng</WrapperFooterLink>
          <WrapperFooterLink href="#">Chính sách bảo mật</WrapperFooterLink>
          <WrapperFooterLink href="#">Hệ thống cửa hàng</WrapperFooterLink>
        </WrapperFooterColumn>

        <WrapperFooterColumn>
          <WrapperFooterTitle>Phương thức thanh toán</WrapperFooterTitle>
          <WrapperPaymentRow>
            <WrapperPaymentBadge>COD</WrapperPaymentBadge>
            <WrapperPaymentBadge>Visa</WrapperPaymentBadge>
            <WrapperPaymentBadge>Mastercard</WrapperPaymentBadge>
            <WrapperPaymentBadge>PayPal</WrapperPaymentBadge>
            <WrapperPaymentBadge>Momo</WrapperPaymentBadge>
            <WrapperPaymentBadge>VNPay</WrapperPaymentBadge>
          </WrapperPaymentRow>
          <WrapperFooterTitle style={{ marginTop: '24px' }}>Đơn vị vận chuyển</WrapperFooterTitle>
          <WrapperPaymentRow>
            <WrapperPaymentBadge>FAST</WrapperPaymentBadge>
            <WrapperPaymentBadge>GO_JEK</WrapperPaymentBadge>
          </WrapperPaymentRow>
        </WrapperFooterColumn>
      </WrapperFooterContainer>

      <WrapperFooterBottom>
        <WrapperFooterBottomContainer>
          <span>© {new Date().getFullYear()} ComputerShop. All rights reserved.</span>
          <span>Giấy CNĐKDN số 0000000000 do Sở KH&amp;ĐT TP.HCM cấp ngày 01/01/2024</span>
        </WrapperFooterBottomContainer>
      </WrapperFooterBottom>
    </WrapperFooter>
  )
}

export default FooterComponent
