import styled from "styled-components";

export const WrapperFooter = styled.div`
    width: 100%;
    background-color: #1a1a2e;
    color: rgba(255, 255, 255, 0.75);
    margin-top: 40px;
`

export const WrapperFooterContainer = styled.div`
    width: 1270px;
    margin: 0 auto;
    padding: 40px 0 20px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
`

export const WrapperFooterColumn = styled.div`
    min-width: 220px;
    flex: 1;
`

export const WrapperFooterTitle = styled.h4`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
`

export const WrapperFooterLink = styled.a`
    display: block;
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    line-height: 32px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`

export const WrapperFooterText = styled.p`
    font-size: 14px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.65);
    margin: 0 0 8px;
`

export const WrapperSocialRow = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 16px;
`

export const WrapperSocialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #9255FD;
    }
`

export const WrapperPaymentRow = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
`

export const WrapperPaymentBadge = styled.span`
    background-color: #fff;
    color: #1a1a2e;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
`

export const WrapperFooterBottom = styled.div`
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding: 16px 0;
`

export const WrapperFooterBottomContainer = styled.div`
    width: 1270px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
`
