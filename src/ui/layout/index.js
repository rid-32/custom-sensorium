import jsx, { Component } from 'custom-elements-jsx'

import { renderRoutes } from 'lib/custom-elements-router/utils'

import './styles'

class PageLayout extends Component {
    render() {
        const { route } = this.props

        return (
            <div className="pageLayout">
                <page-header />
                <main className="pageLayout-content">
                    {renderRoutes(route.routes)}
                </main>
            </div>
        )
    }
}

if (!window.customElements.get('page-layout'))
    window.customElements.define('page-layout', PageLayout)
