import jsx, { Component } from 'custom-elements-jsx'

class HelpPage extends Component {
    render() {
        return <h3>Help!</h3>
    }
}

if (!window.customElements.get('help-page'))
    window.customElements.define('help-page', HelpPage)
