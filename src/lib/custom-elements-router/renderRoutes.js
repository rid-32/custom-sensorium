import invariant from 'tiny-invariant'

import matchPath from './matchPath'
import createElement from './createElement'

const stringsIntersection = (str1, str2) =>
    !!str1.substring(str2) && !!str2.substring(str1)

const renderRoutes = (routes = [], context) => {
    invariant(context, 'You should not use renderRoutes without context')

    const { location } = context || {}

    /* переделать как надо */
    const filteredRoutes = routes.filter(({ path, exact }) =>
        exact
            ? location.pathname === path
            : stringsIntersection(location.pathname, path)
    )

    const route = filteredRoutes[0] || {}
    /* этот блок */

    if (route.component) {
        const match = route.path
            ? matchPath(location.pathname, route.path)
            : context.match
        const props = { route, context: { ...context, match } }

        return createElement(route.component, props)
    } else {
        throw new Error('Route component is not specify')
    }
}

export default renderRoutes
