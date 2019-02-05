const routes = [
    {
        path: '/',
        component: 'page-layout',
        routes: [
            {
                path: '/statistic',
                component: 'statistic-page',
                exact: true,
            },
            {
                path: '/documents',
                component: 'documents-page',
                exact: true,
            },
            {
                path: '/email',
                component: 'email-page',
                exact: true,
            },
            {
                path: '/users',
                component: 'users-page',
                exact: true,
            },
            {
                path: '/settings',
                component: 'settings-page',
                exact: true,
            },
            {
                path: '/help',
                component: 'help-page',
                exact: true,
            },
            {
                path: '/',
                component: 'custom-redirect',
                to: '/statistic',
            },
        ],
    },
]

export default routes
