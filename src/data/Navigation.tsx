import { Lists } from '../pages/Lists';
import { Home } from '../pages/Home';
import { RouterParams } from '../pages/RouterParams';
import { State } from '../pages/State';
import { ContentProps } from '../pages/ContentProps';
import { Lazy } from '../pages/Lazy';
import { Context } from '../pages/Context';
import { Ref } from '../pages/Ref';
import { HOC } from '../pages/HOC';

const nav = [
    {
        url: '/',
        title: 'Basic tsx',
        route: '/',
        element: <Home/>
    },
    {
        url: '/lists',
        title: 'Lists',
        route: '/lists',
        element: <Lists/>
    },
    {
        url: '/routerparams/4',
        title: 'Router params',
        route: '/routerparams/:source',
        element: <RouterParams/>
    },
    {
        url: '/state',
        title: 'State',
        route: '/state',
        element: <State/>
    },
    {
        url: '/contentprops',
        title: 'Content props',
        route: '/contentprops',
        element: <ContentProps/>
    },
    {
        url: '/lazy',
        title: 'React lazy',
        route: '/lazy',
        element: <Lazy/>
    },
    {
        url: '/context',
        title: 'Context',
        route: '/context',
        element: <Context/>
    },
    {
        url: '/ref',
        title: 'Ref',
        route: '/ref',
        element: <Ref/>
    },
    {
        url: '/hoc',
        title: 'HOC',
        route: '/hoc',
        element: <HOC/>
    }
]

export {nav}

