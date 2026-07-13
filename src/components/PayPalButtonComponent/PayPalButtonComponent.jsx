import React, { useEffect, useRef } from 'react'

const PayPalButtonComponent = ({ amount, currency = 'USD', onSuccess, onError }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!window.paypal || !containerRef.current) {
      return
    }
    containerRef.current.innerHTML = ''

    const buttons = window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: currency,
              value: String(amount)
            }
          }]
        })
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          onSuccess && onSuccess(details, data)
        })
      },
      onError: (err) => {
        onError && onError(err)
      }
    })

    buttons.render(containerRef.current)

    return () => {
      try {
        buttons.close()
      } catch (e) {
        // button instance already removed
      }
    }
  }, [amount, currency])

  return <div ref={containerRef} />
}

export default PayPalButtonComponent
