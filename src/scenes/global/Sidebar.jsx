import { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { Menu, MenuItem, Sidebar as ProSidebar } from 'react-pro-sidebar';
import userlogo from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { HomeOutlined, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutline,
  CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlineOutlined,
  TimelineOutlined, MenuOutlined, MapOutlined
 } from '@mui/icons-material';
 import leftArrow from '../../assets/arrowleft.svg'
 import whiteArrow from '../../assets/white-arrowleft.svg'

 const Item = ({title, to, icon, selected, setSelected}) => {
  const { theme } = useTheme()
  return(
    <MenuItem active={selected === title} style={theme.sidebarItem} onClick={() => setSelected(title)} component={<Link to={to} />} icon={icon} >
      {title}
    </MenuItem>
  )
 }


const Sidebar = ({ ismobile = false, toggleShowSidebar }) => {
  const [isCollaspsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  const { theme, isDarkMode } = useTheme()

  const toggleCollapsed = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={`min-h-screen `}>
      <ProSidebar
      rootStyles={theme.sidebar}
        collapsed={isCollaspsed}
      >
        <div className={` px-5 mt-5 flex items-center ${!isCollaspsed ? 'justify-between' : 'justify-center'} `} >
          {!isCollaspsed && <h3 className={`${theme.text} text-2xl font-semibold `} >ADMIN</h3>}
          {
            ismobile ?
            <img src={ isDarkMode ? whiteArrow : leftArrow } width={20} onClick={toggleShowSidebar} />
            :
            <MenuOutlined className={`cursor-pointer`} onClick={toggleCollapsed} />
          }
        </div>

        {
          !isCollaspsed &&
          <div className={`md:mt-8 mt-4`}>
            <div className={`flex items-center justify-center`}>
              <img src={userlogo} width={100} height={100} alt='userlogo' className={`rounded-full cursor-pointer`} />
            </div>
            <div className={`text-center mt-3`}>
              <h2 className={`font-bold text-3xl ${theme.text}`} >JentleJoe</h2>
              <p className={`font-base text-[#4CC2AC] `}>VP Active Admin</p>
            </div>
          </div>
        }
        <div className={`md:mt-6 mt-3`}>
          <Menu
            menuItemStyles={theme.sidebarItem}
          >
            <Item title='Dashboard' to='/' icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />
            <h6 className={`${theme.sidebarSubtitle} `}>Data</h6>
            <Item title='Manage Team' to='/team' icon={<PeopleOutline />} selected={selected} setSelected={setSelected} />
            <Item title='Contacts Information' to='/contacts' icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Invoices Balance' to='/invoices' icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected} />
            <h6 className={`${theme.sidebarSubtitle} `}>Pages</h6>
            <Item title='Profile Form' to='/form' icon={<PersonOutline />} selected={selected} setSelected={setSelected} />
            <Item title='Calendar' to='/calendar' icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='FAQ Page' to='/faq' icon={<HelpOutlineOutlined />} selected={selected} setSelected={setSelected} />
            <h6 className={`${theme.sidebarSubtitle} `}>Charts</h6>
            <Item title='Bar Chart' to='/barchart' icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Pie Chart' to='/piechart' icon={<PieChartOutlineOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Line Chart' to='/linechart' icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Geography Chart' to='/geography' icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
          </Menu>
        </div>
      </ProSidebar>
    </div>
  )
}

export default Sidebar