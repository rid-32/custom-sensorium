import jsx, { Component } from 'custom-elements-jsx'
import invariant from 'tiny-invariant'

const joinClassnames = (...classnames) => {
    return classnames.filter(i => i).join(' ')
}

class NavLink extends Component {
    componentDidCreate() {
        invariant(
            this.props.context,
            'You should not use <custom-nav-link> without context'
        )
    }

    render() {
        const {
            to,
            className: classNameProp,
            activeClassName = 'active',
            style: styleProp,
            activeStyle,
            isActive: isActiveProp,
            context = {},
            children,
            ...rest
        } = this.props
        const isActive =
            !!context.location && context.location.pathname.includes(to)
        // const isActive = !!(isActiveProp
        //     ? isActiveProp(context.match, context.location)
        //     : context.match)
        const className = isActive
            ? joinClassnames(classNameProp, activeClassName)
            : classNameProp
        const style = isActive ? { ...styleProp, ...activeStyle } : styleProp

        return (
            <custom-link
                to={to}
                context={context}
                className={className}
                style={style}
                {...rest}
            >
                {children}
            </custom-link>
        )
    }
}

if (!window.customElements.get('custom-nav-link'))
    window.customElements.define('custom-nav-link', NavLink)
