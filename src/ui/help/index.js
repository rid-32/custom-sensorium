import jsx, { Component } from 'custom-elements-jsx'

class Help extends Component {
    render() {
        return <h3>Help!</h3>
    }
}

if (!window.customElements.get('custom-help'))
    window.customElements.define('custom-help', Help)
