import { useEffect, useState } from 'react'

const getView = ({ status }) => {
    switch (status) {
        case 'Pending':
            return 'Loading'

        case 'Success':
            return 'Thank you for buying'
        case 'Failed':
            return 'Sorry, something went wrong'

        default:
            return 'Loading'
    }
}

export const Payed = ({ id }) => {
    const [paymentStatus, setStatus] = useState({ status: 'Pending' })

    useEffect(() => {
        fetch(`/api/check-payment-status/${id}`)
            .then((res) => res.json())
            .then((paymentStatusRes) => {
                setStatus(paymentStatusRes)
            })
    }, [])

    return <div>{getView(paymentStatus)}</div>
}
