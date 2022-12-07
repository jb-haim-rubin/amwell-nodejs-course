const inputs = {
    name: document.getElementById('name'),
    cardNumber: document.getElementById('card-number'),
    expirationDate: document.getElementById('expiration-date'),
    securityCode: document.getElementById('security-code'),
}

const cardPreview = {
    namePreview: document.getElementById('name-preview'),
    cardNumberPreview: document.getElementById('card-number-preview'),
    expirationDatePreview: document.getElementById('expiration-date-preview'),
    securityCodePreview: document.getElementById('security-code-preview'),
}

const bind = () => {
    Object.entries(inputs).forEach(([key, elRef]) => {
        debugger
        elRef.addEventListener('keyup', (event) => {
            const { value } = event.target
            const cardPreviewRef = cardPreview[`${key}Preview`]
            cardPreviewRef.innerHTML = value
        })
    })
}

bind()
