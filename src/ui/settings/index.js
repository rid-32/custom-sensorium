import jsx, { Component } from 'custom-elements-jsx'

class Settings extends Component {
    render() {
        return <h3>Settings!</h3>
    }
}

if (!window.customElements.get('custom-settings'))
    window.customElements.define('custom-settings', Settings)
