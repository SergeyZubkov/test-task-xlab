import {
    NavLink
} from 'react-router-dom';
import { RouteCfg } from '../../routes';
import './style.scss';
import Icon from '../icon';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import routes from '../../routes';
import { useSidebarContext } from '../../context/SidebarContext';

interface SidebarProps {
    className: string
}

const Sidebar = (props: SidebarProps) => {
    const { className: outerClassName } = props;
    const { isOpen } = useSidebarContext();

    const renderMenuItem = (route: RouteCfg) => {
        return (
            <MenuItem 
                className="nav-menu__item" 
                key={route.title}
                icon={<Icon name={route.iconName}/>}
            >
                <NavLink 
                    className="nav-menu__item-link" 
                    to={route.path}
                    exact
                >
                    <div className="nav-menu__item-title">
                        {route.title}
                    </div>
                </NavLink>
            </MenuItem>
        )
    }

    const renderSubmenu = (route: RouteCfg) => {
        return (
            <SubMenu 
                className="nav-menu__item" 
                title={route.title} 
                key={route.title}
                icon={<Icon name={route.iconName} />}
            >
                {route.subRoutes!.map(renderRoute)}
            </SubMenu>
        )
    }

    const renderRoute = (route: RouteCfg) => {
        return route.subRoutes ? renderSubmenu(route) : renderMenuItem(route)
    }

    return (
        <aside className={outerClassName}>
            <ProSidebar 
                className="nav-menu-container" 
                breakPoint="md"
                toggled={isOpen}
            >
                <h2 className="nav-menu__header">Меню</h2>
                <Menu className="nav-menu">
                    {routes.map(renderRoute)}
                </Menu>
            </ProSidebar>
        </aside>
    )
}

export default Sidebar;