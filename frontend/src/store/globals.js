import config from 'utils/config'

const { prefix } = config

// ------------------------------------
// Constants
// ------------------------------------
export const NAV_OPEN_KEYS = 'NAV_OPEN_KEYS'
export const SWITCH_SIDER = 'SWITCH_SIDER'
export const SWITCH_THEME = 'SWITCH_THEME'

// ------------------------------------
// Actions
// ------------------------------------
export function handleNavOpenKeys (navOpenKeys) {
    return {
        type    : NAV_OPEN_KEYS,
        payload : navOpenKeys
    }
}

export function switchSider () {
    return {
        type : SWITCH_SIDER
    }
}

export function switchTheme () {
    return {
        type : SWITCH_THEME
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    user: {},
    permissions: {
        visit: [],
    },
    menu: [
        {
            id: 1,
            bpid: 1,
            icon: 'laptop',
            name: 'Home',
            router: '/',
        },
        {
            id: 2,
            bpid: 1,
            icon: 'user',
            name: 'Users',
            router: '#',
        },
        {
            id: 3,
            bpid: 1,
            icon: 'code-o',
            name: 'Recharts',
            router: '#',
        },
        {
            id: 31,
            bpid: 3,
            mpid: 3,
            icon: 'area-chart',
            name: 'AreaChart',
            router: '#',
        },
        {
            id: 32,
            bpid: 3,
            mpid: 3,
            icon: 'bar-chart',
            name: 'BarChart',
            router: '#',
        },
        {
            id: 33,
            bpid: 3,
            mpid: 3,
            icon: 'line-chart',
            name: 'LineChart',
            router: '#',
        },
        {
            id: 4,
            bpid: 1,
            icon: 'credit-card',
            name: 'Posts',
            router: '#',
        },
        {
            id: 5,
            bpid: 1,
            icon: 'camera-o',
            name: 'UI Element',
            router: '#',
        },
        {
            id: 51,
            bpid: 5,
            mpid: 5,
            icon: 'heart-o',
            name: 'IconFont',
            router: '#',
        },
        {
            id: 52,
            bpid: 5,
            mpid: 5,
            icon: 'database',
            name: 'DataTable',
            router: '#',
        },
        {
            id: 53,
            bpid: 5,
            mpid: 5,
            icon: 'bars',
            name: 'DropOption',
            router: '#',
        },
        {
            id: 6,
            bpid: 1,
            icon: 'bars',
            name: 'Counter',
            router: '/counter',
        },
        {
            id: 7,
            bpid: 1,
            icon: 'login',
            name: 'Register',
            router: '/register',
        },
    ],
    menuPopoverVisible: false,
    siderFold: window.localStorage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: window.localStorage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)) || []
}

const globals = (state = initialState, action) => {
    switch (action.type) {
        case 'NAV_OPEN_KEYS':
            return {
                ...state,
                navOpenKeys: action.payload,
            }
            break;
        case 'SWITCH_SIDER':
            window.localStorage.setItem(`${prefix}siderFold`, !state.siderFold)
            return {
                ...state,
                siderFold: !state.siderFold,
            }
            break;
        case 'SWITCH_THEME':
            window.localStorage.setItem(`${prefix}darkTheme`, !state.darkTheme)
            return {
                ...state,
                darkTheme: !state.darkTheme,
            }
            break;
        default:
            return state;
    }
}

export default globals;