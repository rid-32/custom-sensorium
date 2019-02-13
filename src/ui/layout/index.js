import jsx, { Component } from 'custom-elements-jsx'

import { renderRoutes } from 'lib/custom-elements-router'

import './styles'

class PageLayout extends Component {
    render() {
        const { route, context } = this.props

        return (
            <div className="pageLayout">
                <page-header context={context} />
                <main className="pageLayout-content">
                    {/* {renderRoutes(route.routes, context)} */}
                    <custom-switch context={context}>
                        <custom-route
                            path="/statistic"
                            component="statistic-page"
                        />
                        <custom-route
                            path="/documents"
                            component="documents-page"
                        />
                        <custom-route path="/email" component="email-page" />
                        <custom-route path="/users" component="users-page" />
                        <custom-route
                            path="/settings"
                            component="settings-page"
                        />
                        <custom-route path="/help" component="help-page" />
                        <custom-route
                            path="/"
                            component="custom-redirect"
                            to="/statistic"
                        />
                    </custom-switch>
                </main>
            </div>
        )
    }
}

if (!window.customElements.get('page-layout'))
    window.customElements.define('page-layout', PageLayout)
