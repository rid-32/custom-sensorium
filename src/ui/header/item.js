import jsx, { Component } from 'custom-elements-jsx'
import cn from 'classnames'

import top from 'Assets/img/svg/top.svg'

import './styles'

class MenuItem extends Component {
    render() {
        const { xlinkHref, className, children } = this.props

        return (
            <div className="menuItem">
                <svg className="menuItem-top">
                    <use xlinkHref={`#${top.id}`} />
                </svg>
                <svg className={cn('menuItem-icon', className)}>
                    <use xlinkHref={`#${xlinkHref}`} />
                </svg>
                <span>{children}</span>
            </div>
        )
    }
}

if (!window.customElements.get('menu-item'))
    window.customElements.define('menu-item', MenuItem)
