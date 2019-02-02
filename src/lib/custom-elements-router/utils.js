const stringsIntersection = (str1, str2) =>
    !!str1.substring(str2) && !!str2.substring(str1)

export const renderRoutes = (routes = [], context = {}) => {
    const { location } = context

    const filteredRoutes = routes.filter(({ path, exact }) =>
        exact
            ? location.pathname === path
            : stringsIntersection(location.pathname, path)
    )

    const route = filteredRoutes[0] || {}

    if (route.component) {
        const node = document.createElement(route.component)

        node.props = {
            ...node.props,
            route,
            context,
        }

        return node
    } else {
        throw new Error('Router exception')
    }
}
