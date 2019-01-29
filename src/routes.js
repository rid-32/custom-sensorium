const routes = [
    {
        path: '/',
        component: 'page-layout',
        routes: [
            {
                path: '/statistic',
                component: 'custom-statistic',
            },
            {
                path: '/documents',
                component: 'custom-documents',
            },
        ],
    },
]

export default routes
