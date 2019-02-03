import jsx, { Component } from 'custom-elements-jsx'

class EmailPage extends Component {
    render() {
        return <h3>Email!</h3>
    }
}

if (!window.customElements.get('email-page'))
    window.customElements.define('email-page', EmailPage)
