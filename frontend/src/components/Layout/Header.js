import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover } from 'antd'
import classnames from 'classnames'
import Menus from './Menu'
import BadgeBox from './BadgeBox'
import './Header.less'

const SubMenu = Menu.SubMenu

const Header = ({ user, logout, switchSider, switchFullScreen, expanded, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu }) => {
    let handleClickMenu = e => e.key === 'logout' && logout()
    const menusProps = {
        menu,
        siderFold: false,
        expanded: false,
        darkTheme: false,
        isNavbar,
        handleClickNavMenu: switchMenuPopover,
        location,
        navOpenKeys,
        changeOpenKeys,
    }
    return (
        <div className="header">
            {isNavbar
                ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName="popovermenu" trigger="click" content={<Menus {...menusProps} />}>
                <div className="button">
                    <Icon type="bars" />
                </div>
            </Popover>
                :
                <div className="header-control-buttons">
                    <div className="button" onClick={switchSider}>
                        <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
                    </div>
                    <div className="button" onClick={switchFullScreen}>
                        <Icon type={classnames({ 'shrink': expanded, 'arrows-alt': !expanded })} />
                    </div>
                </div>

            }
            <div className="rightWarpper">
                <BadgeBox/>
                <Menu mode="horizontal" onClick={handleClickMenu}>
                    <SubMenu
                        style={{
                            float: 'right',
                        }}
                        title={<span>
              <Icon type="user" />
                            {user.username}
            </span>}
                    >
                        <Menu.Item key="logout">
                            <Link to='/login'>
                                <Icon type="logout" />
                                Sign out
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}

Header.propTypes = {
    menu: PropTypes.array,
    user: PropTypes.object,
    logout: PropTypes.func,
    switchSider: PropTypes.func,
    switchFullScreen: PropTypes.func,
    siderFold: PropTypes.bool,
    isNavbar: PropTypes.bool,
    menuPopoverVisible: PropTypes.bool,
    location: PropTypes.object,
    switchMenuPopover: PropTypes.func,
    navOpenKeys: PropTypes.array,
    changeOpenKeys: PropTypes.func,
}

export default Header
