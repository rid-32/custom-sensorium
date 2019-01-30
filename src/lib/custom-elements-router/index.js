import jsx, { Component } from 'custom-elements-jsx'

import { renderRoutes } from './utils'

import './link'

class CustomRouter extends Component {
    constructor() {
        super()

        const { history } = this.props

        this.unlisten = history.listen((location, action) => {
            this.location = location
            this.action = action

            this.update()
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
