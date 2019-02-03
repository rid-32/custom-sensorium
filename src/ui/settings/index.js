import jsx, { Component } from 'custom-elements-jsx'

class SettingsPage extends Component {
    render() {
        return <h3>Settings!</h3>
    }
}

if (!window.customElements.get('settings-page'))
    window.customElements.define('settings-page', SettingsPage)
