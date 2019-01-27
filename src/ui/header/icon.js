import jsx, { Component } from 'custom-elements-jsx'
import cn from 'classnames'

import './styles'

class HeaderIcon extends Component {
    render() {
        const { xlinkHref, className } = this.props

        return (
            <svg className={cn('headerIcon', className)}>
                <use xlinkHref={`#${xlinkHref}`} />
            </svg>
        )
    }
}

if (!window.customElements.get('header-icon'))
    window.customElements.define('header-icon', HeaderIcon)
