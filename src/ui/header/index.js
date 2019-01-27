import jsx, { Component } from 'custom-elements-jsx'

import './styles'

class Header extends Component {
    render() {
        return <header className="header">Hello, world</header>
    }
}

if (!window.customElements.get('sensorium-header'))
    window.customElements.define('sensorium-header', Header)
