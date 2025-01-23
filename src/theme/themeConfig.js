import { padding } from "@mui/system"
import { tokens } from "../theme"

export const lightTheme = {
  primaryText: '#000',
  background: 'bg-[#fcfcfc]',
  background2: 'bg-[#f2f0f0]',
  searchboxBg: 'bg-[rgba(0,0,0,0.1)]',
  text: 'text-gray-800',
  alertText: 'text-gray-800',
  sidebarSubtitle: 'text-sm text-[#3D3D3D] mt-[5px] mb-[3px] px-5',
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
      button: ({ level, active }) => ({
        backgroundColor: active ? 'transparent' : 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#6870fa',
          '.ps-menu-icon': {
              color: '#6870fa',
              animation: 'vibrate 0.2s ease-in-out infinite',
              animationIterationCount: '10',
          },
        },
        color: active ? '#6870fa' : 'black',
        '.ps-menu-icon': {
          color: active ? '#6870fa' : 'black',
          transition: 'all 0.3s ease',
          '@keyframes vibrate': {
              '0%': {
                  transform: 'rotate(0deg)',
              },
              '25%': {
                  transform: 'rotate(-5deg)',
              },
              '50%': {
                  transform: 'rotate(0deg)',
              },
              '75%': {
                  transform: 'rotate(5deg)',
              },
              '100%': {
                  transform: 'rotate(0deg)',
              },
          },
        },
        fontSize: '0.8rem',
        paddingTop: '0',
        paddingBottom: '0',

      }),
      // Submenu styles if needed
      subMenuContent: {
        backgroundColor: '#1F2937',
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
  accordion: {
      // backgroundColor: '#f2f0f0',
      // '&:hover': {
      //   backgroundColor: '#e6f3ff'
      // },
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #dee2e6'
    },
    accordionSummary: {
      backgroundColor: '',
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#495057'  // Change icon color
      },
      '&:hover': {
      //   backgroundColor: '#f2f0f0'
      }
    },
    accordionDetails: {
      backgroundColor: '#ffffff',
      color: '#212529'
    },
    palette: tokens("light"), //Color Palette
    dataGrid: {
      text: 'black'
    },

    calendarSidebar: {
      boxTheme: {
        background: '#f2f0f0',
        border: 'none',
        color: '', //default
      },
  },

    // Full Calendar Styles
    calendar: {
      primaryText: '#333333',
      dayText: '',
      headerText: '',
      moreLink: '',
      todayBg: '',
      buttonBg: '',
      buttonBorder: '',
      buttonText: '',
      buttonHover: '',
      timeText: '',
      listdayBg: '',
      listdayText: '',
    }
}

export const darkTheme = {
  primaryText: '#fff',
  background: 'bg-slate-900',
  background2: 'bg-[#1e293b]',
  searchboxBg: 'bg-slate-700',
  text: 'text-gray-200',
  alertText: 'white',
  sidebarSubtitle: 'text-sm text-[#A3A3A3] mt-[5px] mb-[3px] px-5 px-5',
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
      button: ({ level, active }) => ({
        backgroundColor: active ? 'transparent' : 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#6870fa',
          '.ps-menu-icon': {
              color: '#6870fa',
              animation: 'vibrate 0.2s ease-in-out infinite',
              animationIterationCount: '10',
          },
        },
        color: active ? '#6870fa' : 'white',
        '.ps-menu-icon': {
          color: active ? '#6870fa' : 'white',
          transition: 'all 0.3s ease',
          '@keyframes vibrate': {
              '0%': {
                  transform: 'rotate(0deg)',
              },
              '25%': {
                  transform: 'rotate(-5deg)',
              },
              '50%': {
                  transform: 'rotate(0deg)',
              },
              '75%': {
                  transform: 'rotate(5deg)',
              },
              '100%': {
                  transform: 'rotate(0deg)',
              },
          },
        },
        fontSize: '0.8rem',
        paddingTop: '0',
        paddingBottom: '0',
      }),
      // Submenu styles if needed
      subMenuContent: {
        backgroundColor: '#1F2937',
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
  accordion: {
      // backgroundColor: '#f2f0f0',
      // '&:hover': {
      //   backgroundColor: '#e6f3ff'
      // },
      // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      // border: '1px solid #202020'
    },
    accordionSummary: {
      backgroundColor: '#202020',
      // borderBottom: '1px solid #202020',
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: 'white'  // Change icon color
      },
      '&:hover': {
      //   backgroundColor: '#f2f0f0'
      }
    },
    accordionDetails: {
      backgroundColor: '#202020',
      color: 'white'
    },
    palette: tokens("dark"), //Color Palette
    dataGrid: {
      text: '#E1D9D1'
    },
  
    calendarSidebar: {
      boxTheme: {
        background: '#1e293b',
        color: 'white',
        border: 'none',
      },
  },

    // Full Calendar Styles
    calendar: {
      primaryText: '#ffffff',
      dayText: '',
      headerText: '',
      moreLink: '',
      todayBg: '',
      buttonBg: '',
      buttonBorder: '',
      buttonText: '',
      buttonHover: '',
      timeText: '',
      listdayBg: '',
      listdayText: '',
    }
}