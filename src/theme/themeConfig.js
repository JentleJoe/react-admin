export const lightTheme = {
    background: 'bg-[#fcfcfc]',
    searchboxBg: 'bg-[rgba(0,0,0,0.1)]',
    text: 'text-gray-800',
    sidebarSubtitle: 'text-sm text-[#3D3D3D] mt-[15px] mb-[5px] px-5',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    hover: 'hover:bg-slate-300',
    sidebar: {
        background: '#f2f0f0',
        // color: 'black',
        border: 'none',
        height: '100vh',
    },
    sidebarItem: {
        background: '',
        color: 'black',
        border: 'none',
        button: {
            [`&.active`]: {
                backgroundColor: `#13395e`,
                color: '#b6c8d9',
            },
        },
    },
    form: {
        colors: {
            inputText: '',
            inputBackground: '#f2f0f0',
            inputHoverBg: '#e6f3ff',
            inputFocusBg: '#ffffff',
            labelColor: '#2c3e50',
        },
        typography: {
            inputFontSize: '16px',
            labelFontSize: '12px',
            helperTextSize: '10px',
        },
    },
}

export const darkTheme = {
    background: 'bg-slate-900',
    searchboxBg: 'bg-slate-700',
    text: 'text-gray-200',
    sidebarSubtitle: 'text-sm text-[#A3A3A3] mt-[15px] mb-[5px] px-5',
    primary: 'text-secondary-400',
    secondary: 'text-secondary-300',
    hover: 'hover:bg-slate-600',
    sidebar: {
        background: '#1e293b',
        color: '#e5e7eb',
        border: 'none',
        height: '100vh',
    },
    sidebarItem: {
        background: '',
        // color: '#e5e7eb',
        border: 'none',
        button: {
            [`&.active`]: {
                backgroundColor: `#13395e`,
                color: '#b6c8d9',
            },
        },
    },
    form: {
        colors: {
            inputText: 'white',
            inputBackground: '#FFFFFF0F',
            inputHoverBg: '#FFFFFF33',
            inputFocusBg: '#FFFFFF0F',
            labelColor: '#A9A9A9',
        },
        typography: {
            inputFontSize: '16px',
            labelFontSize: '12px',
            helperTextSize: '10px',
        },
    },
}