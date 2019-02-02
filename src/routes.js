const routes = [
    {
        path: '/',
        component: 'page-layout',
        routes: [
            {
                path: '/',
                component: 'custom-statistic',
                exact: true,
            },
            {
                path: '/statistic',
                component: 'custom-statistic',
                exact: true,
            },
            {
                path: '/documents',
                component: 'custom-documents',
                exact: true,
            },
            {
                path: '/email',
                component: 'custom-email',
                exact: true,
            },
            {
                path: '/users',
                component: 'custom-users',
                exact: true,
            },
            {
                path: '/settings',
                component: 'custom-settings',
                exact: true,
            },
            {
                path: '/help',
                component: 'custom-help',
                exact: true,
            },
        ],
    },
]

export default routes
