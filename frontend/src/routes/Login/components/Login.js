import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Form, Input, Icon } from 'antd'
import { config } from 'utils'
import styles from '../assets/index.less'

const FormItem = Form.Item

export const Login = ({
    form: {
        getFieldDecorator,
        validateFieldsAndScroll,
    }
}) => (
    <div className="form login-form">
        <div className="logo">
            <img alt={'logo'} src={config.config.logo} />
            <span>{config.config.name}</span>
        </div>
        <form>
            <FormItem hasFeedback>
                {getFieldDecorator('email', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input size="large" onPressEnter={console.log('handleOk')} placeholder="Email" />)}
            </FormItem>
            <FormItem hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input size="large" type="password" onPressEnter={console.log('handleOk')} placeholder="Password" />)}
            </FormItem>
            <Row>
                <Button type="primary" size="large" onClick={console.log('handleOk')} loading={console.log('loginLoading')}>
                    <Icon type="login"/> Sign In
                </Button>
            </Row>
        </form>
        <div className="sign-operation">
            <Row>
                <span className="member-text">Not a member?</span>
                <Link to="/register"> Sign Up</Link>
            </Row>
        </div>
    </div>
)
Login.propTypes = {
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
