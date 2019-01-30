import jsx, { Component } from 'custom-elements-jsx'

class Email extends Component {
    render() {
        return <h3>Email!</h3>
    }
}

if (!window.customElements.get('custom-email'))
    window.customElements.define('custom-email', Email)
