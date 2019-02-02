import { Component } from 'custom-elements-jsx'

import { renderRoutes } from './utils'

import './link'
import './navLink'

class CustomRouter extends Component {
    componentDidCreate() {
        const { history } = this.props

        this.location = history.location

        this.unlisten = history.listen((location, action) => {
            if (location.pathname !== this.location.pathname) {
                this.location = location
                this.action = action

                this.update()
            }
        })
    }

    componentWillUnmount() {
        if (this.unlisten) this.unlisten()
    }

    render() {
        const context = {
            history: this.props.history,
            location: this.location,
            action: this.action,
            // match:
        }

        return renderRoutes(this.props.routes, context)
    }
}

if (!window.customElements.get('custom-router'))
    window.customElements.define('custom-router', CustomRouter)

export { renderRoutes }
