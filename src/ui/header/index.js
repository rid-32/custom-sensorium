import jsx, { Component } from 'custom-elements-jsx'

import './styles'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <header-menu />
            </header>
        )
    }
}

if (!window.customElements.get('page-header'))
    window.customElements.define('page-header', Header)
