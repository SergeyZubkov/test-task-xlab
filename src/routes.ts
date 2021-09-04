import pages from './pages';

type PathsOfRoutes = 
    | "/"
    | "/address"
    | "/somePage1"
    | "/somePage2"
    | "/somePage3"
    | "/somePage4"
    | "/somePage5"
    | "/somePage6"


export interface RouteCfg {
    path: PathsOfRoutes,
    component: React.ComponentType<any>,
    title: string,
    iconName: string,
    subRoutes?: RouteCfg[]
}


const {
    Main,
    SearchAddress
} = pages;

const routes = [
    {
        path: '/' as const,
        component: Main,
        title: 'Главная',
        iconName: 'home'
    },
    {
        path: '/address' as const,
        component: SearchAddress,
        title: 'Поиск адресов',
        iconName: 'search'
    },
    {
        path: '/somePage1' as const,
        component: Main,
        title: 'Таблицы',
        iconName: 'table'
    },
    {
        path: '/somePage2' as const,
        component: Main,
        title: 'Календарь',
        iconName: 'calendar'
    },
    {
        path: '/somePage3' as const,
        component: Main,
        title: 'Карты',
        iconName: 'map'
    },
    {
        path: '/somePage4' as const,
        component: Main,
        title: 'Виджеты',
        iconName: 'tv'
    },
    {
        path: '/somePage5' as const,
        component: Main,
        title: 'Настройки',
        iconName: 'settings',
        subRoutes: [
            {
                path: '/' as const,
                component: Main,
                title: 'Подменю',
                iconName: 'home'
            },
            {
                path: '/' as const,
                component: Main,
                title: 'Подменю',
                iconName: 'home'
            }
        ]
    },
    {
        path: '/somePage6' as const,
        component: Main,
        title: 'Выход',
        iconName: 'exit'
    },
]

export default routes