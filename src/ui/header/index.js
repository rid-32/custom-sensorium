import jsx, { Component } from 'custom-elements-jsx'

import './styles'

class Header extends Component {
    render() {
        const { context } = this.props

        return (
            <header className="header">
                <header-menu context={context} />
            </header>
        )
    }
}

if (!window.customElements.get('page-header'))
    window.customElements.define('page-header', Header)
