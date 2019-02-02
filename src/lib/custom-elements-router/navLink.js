import jsx, { Component } from 'custom-elements-jsx'

class NavLink extends Component {
    render() {
        const {
            to,
            context = {},
            children,
            className,
            activeClassName,
            ...rest
        } = this.props
        const isLinkActive =
            !!context.location && context.location.pathname.includes(to)
        const cn = `${className} ${isLinkActive ? activeClassName : ''}`

        return (
            <custom-link to={to} context={context} className={cn} {...rest}>
                {children}
            </custom-link>
        )
    }
}

if (!window.customElements.get('custom-nav-link'))
    window.customElements.define('custom-nav-link', NavLink)
