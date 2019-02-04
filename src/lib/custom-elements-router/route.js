import jsx, { Component } from 'custom-elements-jsx'
import invariant from 'tiny-invariant'

import matchPath from './matchPath'
import createElement from './createElement'

class CustomRoute extends Component {
    componentDidCreate() {
        invariant(
            this.props.context,
            'You should not use <custom-route> without context'
        )
    }

    render() {
        const {
            location: propsLocation,
            context = {},
            path,
            component,
            render,
        } = this.props
        let { children } = this.props
        const {
            location: contextLocation = {},
            computedMatch,
            match: contextMatch,
        } = context
        const location = propsLocation || contextLocation
        const match = computedMatch
            ? computedMatch // <Switch> already computed the match for us
            : path
                ? matchPath(location.pathname, this.props)
                : contextMatch
        const props = { context: { ...context, location, match } }

        if (typeof children === 'function') {
            children = children(props)

            if (typeof children === 'undefined') {
                children = null
            }
        }

        return children && !children.length
            ? children
            : match
                ? component
                    ? createElement(component, props)
                    : render
                        ? render(props)
                        : null
                : null
    }
}

if (!window.customElements.get('custom-route'))
    window.customElements.define('custom-route', CustomRoute)
