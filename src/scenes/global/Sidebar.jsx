import { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { Menu, MenuItem, Sidebar as ProSidebar } from 'react-pro-sidebar';
import userlogo from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { HomeOutlined, PeopleOutline, ContactsOutlined, ReceiptOutlined, PersonOutline,
  CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlineOutlined,
  TimelineOutlined, MenuOutlined, MapOutlined
 } from '@mui/icons-material';

 const Item = ({title, to, icon, selected, setSelected}) => {
  const { theme, isDarkMode } = useTheme()
  return(
    <MenuItem active={selected === title} style={theme.sidebarItem} onClick={() => setSelected(title)} component={<Link to={to} />} icon={icon} >
      {title}
    </MenuItem>
  )
 }


const Sidebar = () => {
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
          <MenuOutlined className={`cursor-pointer`} onClick={toggleCollapsed} />
        </div>

        {
          !isCollaspsed &&
          <div className={` mt-8`}>
            <div className={`flex items-center justify-center`}>
              <img src={userlogo} width={100} height={100} alt='userlogo' className={`rounded-full cursor-pointer`} />
            </div>
            <div className={`text-center mt-3`}>
              <h2 className={`font-bold text-3xl ${theme.text}`} >JentleJoe</h2>
              <p className={`font-base text-[#4CC2AC] `}>VP Active Admin</p>
            </div>
          </div>
        }
        <div className={`mt-6`}>
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
            <Item title='Bar Chart' to='/bar' icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Pie Chart' to='/pie' icon={<PieChartOutlineOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Line Chart' to='/line' icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
            <Item title='Geography' to='/geography' icon={<MapOutlined />} selected={selected} setSelected={setSelected} />
          </Menu>
        </div>
      </ProSidebar>
    </div>
  )
}

export default Sidebar