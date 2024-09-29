export const lightTheme = {
    background: 'bg-white',
    searchboxBg: 'bg-[rgba(0,0,0,0.1)]',
    text: 'text-gray-800',
    sidebarSubtitle: 'text-sm text-[#3D3D3D] mt-[15px] mb-[5px]',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    hover: 'hover:bg-slate-300',
    sidebar: {
        background: 'transparent',
        color: 'black',
        border: 'none',
    },
    sidebarItem: {
        background: 'white',
        color: 'black',
        border: 'none',
        button: {
            [`&.active`]: {
                backgroundColor: `#13395e`,
                color: '#b6c8d9',
            },
        },
    },
}

export const darkTheme = {
    background: 'bg-slate-800',
    searchboxBg: 'bg-slate-700',
    text: 'text-gray-300',
    sidebarSubtitle: 'text-sm text-[#A3A3A3] mt-[15px] mb-[5px]',
    primary: 'text-secondary-400',
    secondary: 'text-secondary-300',
    hover: 'hover:bg-slate-600',
    sidebar: {
        background: 'transparent',
        color: 'gray',
        border: 'none',
    },
    sidebarItem: {
        background: 'black',
        color: 'gray',
        border: 'none',
        button: {
            [`&.active`]: {
                backgroundColor: `#13395e`,
                color: '#b6c8d9',
            },
        },
    },
}