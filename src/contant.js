export const orderContant = {
  delivery: {
    fast: 'FAST',
    gojek: 'GO_JEK'
  },
  payment: {
    later_money: 'Thanh toán tiền mặt khi nhận hàng',
    paypal: 'Thanh toán bằng paypal'
  }
}

// PayPal chỉ nhận thanh toán bằng USD, quy đổi tạm thời từ VND
export const USD_TO_VND_RATE = 25000