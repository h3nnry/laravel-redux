import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import {  config } from 'utils'
import classnames from 'classnames'
import { Layout } from 'components'
import { connect } from 'react-redux'
import 'themes/index.less'
import './PageLayout.less'
import 'components/Layout/Layout.less'
import { handleNavOpenKeys, switchSider, switchTheme, switchFullScreen } from 'store/globals'
import { fullscreen, fullscreenChangeAddListener, fullscreenChangeRemoveListener } from 'utils/fullscreen'

import { Alert, Steps } from 'antd';

const mapStateToProps = (state) => {
    return {
        globals: state.globals
    }
}

class PageLayout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullscreen: false
        }

        this.handleFullScreenState = this.handleFullScreenState.bind(this);
        this.handleFullScreen =this.handleFullScreen.bind(this);
    }

    componentDidMount() {
        fullscreenChangeAddListener(this.handleFullScreenState);
    }

    componentWillUnmount() {
        fullscreenChangeRemoveListener(this.handleFullScreenState);
    }

    handleFullScreenState() {
        this.setState({
            fullscreen: !this.state.fullscreen
        });
    }

    handleFullScreen() {
        fullscreen(document.getElementById('root'))
    }

    static propTypes = {
        children : PropTypes.object.isRequired,
        dispatch : PropTypes.func.isRequired,
    }

    render() {
        const { dispatch } = this.props
        const { user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys, menu, permissions } = this.props.globals
        const Step = Steps.Step;
        const { iconFontJS, iconFontCSS, logo, prefix } = config
        const { Bread, Header, Sider } = Layout

        const headerProps = {
            menu,
            user,
            siderFold,
            isNavbar,
            menuPopoverVisible,
            navOpenKeys,
            switchMenuPopover () {
                dispatch({ type: 'app/switchMenuPopver' })
            },
            logout () {
                dispatch({ type: 'app/logout' })
            },
            switchSider () {
                dispatch(switchSider())
            },
            changeOpenKeys (openKeys) {
                dispatch( handleNavOpenKeys(openKeys))
            },
        }

        const siderProps = {
            menu,
            siderFold,
            darkTheme,
            navOpenKeys,
            changeTheme () {
                dispatch(switchTheme())
            },
            changeOpenKeys (openKeys) {
                window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
                dispatch( handleNavOpenKeys(openKeys))
            },
        }

        const breadProps = {
            menu,
        }
        return (
            <div>
                <Helmet>
                    <title>DASHBOARD</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" href={logo} type="image/x-icon"/>
                    {iconFontJS && <script src={iconFontJS}/>}
                    {iconFontCSS && <link rel="stylesheet" href={iconFontCSS}/>}
                </Helmet>
                <div className={classnames("layout", { ["fold"]: isNavbar ? false : siderFold }, { ["withnavbar"]: isNavbar })}>
                    {!isNavbar ? <aside className={classnames("sider", { ["light"]: !darkTheme })}>
                        <Sider {...siderProps} />
                    </aside> : ''}
                    <div className="main" id="mainContent">
                        <Header {...headerProps} switchFullScreen={this.handleFullScreen} expanded={this.state.fullscreen} />
                        <Bread {...breadProps} />
                        <div className="container">
                            <div className="content-inner">
                                <div className="content">
                                    <h1>React Redux Starter Kit</h1>
                                    <div className='page-layout__viewport'>
                                        <Alert message="Very long warning text warning text text text text text text text" banner
                                               closable/>
                                        <Steps>
                                            <Step title="first step"/>
                                            <Step title="second step"/>
                                            <Step title="third step"/>
                                        </Steps>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PageLayout)
