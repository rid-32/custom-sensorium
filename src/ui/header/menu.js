import jsx, { Component } from 'custom-elements-jsx'

import research from 'Assets/img/svg/research.svg'
import test from 'Assets/img/svg/test.svg'
import email from 'Assets/img/svg/email.svg'
import group from 'Assets/img/svg/group.svg'
import gear from 'Assets/img/svg/gear.svg'

import './styles'

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu">
                <header-icon
                    xlinkHref={research.id}
                    className="header-menu-research"
                />
                <header-icon xlinkHref={test.id} className="header-menu-test" />
                <header-icon
                    xlinkHref={email.id}
                    className="header-menu-email"
                />
                <header-icon
                    xlinkHref={group.id}
                    className="header-menu-group"
                />
                <header-icon xlinkHref={gear.id} className="header-menu-gear" />
            </div>
        )
    }
}

if (!window.customElements.get('header-menu'))
    window.customElements.define('header-menu', HeaderMenu)
