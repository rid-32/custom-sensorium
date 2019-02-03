import { Component } from 'custom-elements-jsx'

import renderRoutes from './renderRoutes'

import './link'
import './navLink'
import './redirect'

class CustomRouter extends Component {
    static computeRootMatch(pathname) {
        return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
    }

    componentDidCreate() {
        const { history, staticContext } = this.props

        this.location = history.location

        if (!staticContext) {
            this.unlisten = history.listen(location => {
                if (location.pathname !== this.location.pathname) {
                    this.location = location

                    this.update()
                }
            })
        }
    }

    componentWillUnmount() {
        if (this.unlisten) this.unlisten()
    }

    render() {
        const { routes, history, staticContext, children } = this.props
        const context = {
            history: history,
            location: this.location,
            match: CustomRouter.computeRootMatch(this.location.pathname),
            staticContext,
        }

        if (routes) {
            return renderRoutes(routes, context)
        } else {
            return children
        }
    }
}

if (!window.customElements.get('custom-router'))
    window.customElements.define('custom-router', CustomRouter)

export { renderRoutes }
