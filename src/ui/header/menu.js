import jsx, { Component } from 'custom-elements-jsx'

import research from 'Assets/img/svg/research.svg'
import test from 'Assets/img/svg/test.svg'
import email from 'Assets/img/svg/email.svg'
import group from 'Assets/img/svg/group.svg'
import gear from 'Assets/img/svg/gear.svg'
import help from 'Assets/img/svg/help.svg'

import './styles'

class HeaderMenu extends Component {
    render() {
        const { context } = this.props

        return (
            <div className="headerMenu">
                <custom-nav-link
                    to="/statistic"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item
                        xlinkHref={research.id}
                        className="headerMenu-research"
                    >
                        Статистика
                    </menu-item>
                </custom-nav-link>
                <custom-nav-link
                    to="/documents"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item xlinkHref={test.id} className="headerMenu-test">
                        Документы
                    </menu-item>
                </custom-nav-link>
                <custom-nav-link
                    to="/email"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item
                        xlinkHref={email.id}
                        className="headerMenu-email"
                    >
                        Письма
                    </menu-item>
                </custom-nav-link>
                <custom-nav-link
                    to="/users"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item
                        xlinkHref={group.id}
                        className="headerMenu-group"
                    >
                        Пользователи
                    </menu-item>
                </custom-nav-link>
                <custom-nav-link
                    to="/settings"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item xlinkHref={gear.id} className="headerMenu-gear">
                        Настройки
                    </menu-item>
                </custom-nav-link>
                <custom-nav-link
                    to="/help"
                    context={context}
                    className="headerMenu-link"
                    activeClassName="headerMenu-link-isActive"
                >
                    <menu-item xlinkHref={help.id} className="headerMenu-help">
                        Помощь
                    </menu-item>
                </custom-nav-link>
            </div>
        )
    }
}

if (!window.customElements.get('header-menu'))
    window.customElements.define('header-menu', HeaderMenu)
