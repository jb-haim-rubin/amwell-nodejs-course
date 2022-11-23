class UiRender {
    constructor() {
        this.nameValue = ''
        this.nameRef = document.querySelector('#name')
        this.nameRef.addEventListener('keyup', (event) => {
            this.name = event.target.value
        })
        this.typingResultsRef = document.querySelector('#typing-results')
    }

    set name(nameValue) {
        this.nameValue = nameValue
        this.render()
    }

    get name() {
        return this.nameValue
    }

    render() {
        this.typingResultsRef.innerHTML = this.name
    }
}

new UiRender()
