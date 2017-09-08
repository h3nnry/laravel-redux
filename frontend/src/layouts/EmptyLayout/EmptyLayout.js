import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { config } from 'utils/config'
import 'themes/index.less'

const mapStateToProps = (state) => {
    return state;
}

const mapActionCreators = {

}

class EmptyLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        children : PropTypes.object.isRequired,
        dispatch : PropTypes.func
    }

    render() {
        const { dispatch } = this.props
        const { iconFontJS, iconFontCSS, logo, prefix } = config

        return (
            <div>
                <Helmet>
                    <title>DASHBOARD</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" href={logo} type="image/x-icon"/>
                    {iconFontJS && <script src={iconFontJS}/>}
                    {iconFontCSS && <link rel="stylesheet" href={iconFontCSS}/>}
                </Helmet>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EmptyLayout)
