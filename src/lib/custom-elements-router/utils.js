export const renderRoutes = (routes = [], context = {}) => {
    const { location } = context

    const filteredRoutes = routes.filter(({ path, exact }) =>
        exact ? location.pathname === path : location.pathname.includes(path)
    )

    const route = filteredRoutes[0] || {}

    if (route.component) {
        const node = document.createElement(route.component)

        node.props.route = { ...route }
        node.props.context = { ...context }

        return node
    } else {
        throw new Error('Router exception')
    }
}
