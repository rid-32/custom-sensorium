import { Component, createFragmentWithChildren } from 'custom-elements-jsx'
import invariant from 'tiny-invariant'

import renderRoutes from './renderRoutes'

import './link'
import './navLink'
import './redirect'
import './switch'
import './route'
import './memoryRouter'
import './staticRouter'
import './browserRouter'
import './hashRouter'

class CustomRouter extends Component {
    componentDidCreate() {
        invariant(
            this.props.history,
            'You should not use <custom-router> without history'
        )

        const { history, staticContext } = this.props

        this.location = history.location

        if (!staticContext) {
            this.unlisten = history.listen(location => {
                this.location = location

                this.update()
            })
        }
    }

    componentWillUnmount() {
        if (this.unlisten) this.unlisten()
    }

    computeRootMatch = pathname => {
        return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
    }

    render() {
        const { routes, history, staticContext, children } = this.props
        const context = {
            history: history,
            location: this.location,
            match: this.computeRootMatch(this.location.pathname),
            staticContext,
        }

        if (routes) {
            return renderRoutes(routes, context)
        }

        // пройтись по массиву children, добавить к каждому элементу context в пропсы
        // создать фрагмент, добавить в этот фрагмент children и сделать return этого фрагмента
        return createFragmentWithChildren(children, { context })
    }
}

if (!window.customElements.get('custom-router'))
    window.customElements.define('custom-router', CustomRouter)

export { renderRoutes }
