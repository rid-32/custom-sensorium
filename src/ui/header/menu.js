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
        return (
            <div className="header-menu">
                <custom-link to="/statistic">
                    <menu-item
                        xlinkHref={research.id}
                        className="header-menu-research"
                    >
                        Статистика
                    </menu-item>
                </custom-link>
                <custom-link to="/documents">
                    <menu-item xlinkHref={test.id} className="header-menu-test">
                        Документы
                    </menu-item>
                </custom-link>
                <custom-link to="/email">
                    <menu-item
                        xlinkHref={email.id}
                        className="header-menu-email"
                    >
                        Письма
                    </menu-item>
                </custom-link>
                <custom-link to="/users">
                    <menu-item
                        xlinkHref={group.id}
                        className="header-menu-group"
                    >
                        Пользователи
                    </menu-item>
                </custom-link>
                <custom-link to="/settings">
                    <menu-item xlinkHref={gear.id} className="header-menu-gear">
                        Настройки
                    </menu-item>
                </custom-link>
                <custom-link to="/help">
                    <menu-item xlinkHref={help.id} className="header-menu-help">
                        Помощь
                    </menu-item>
                </custom-link>
            </div>
        )
    }
}

if (!window.customElements.get('header-menu'))
    window.customElements.define('header-menu', HeaderMenu)
