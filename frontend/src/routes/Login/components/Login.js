import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Form, Input } from 'antd'
import { config } from 'utils'
import styles from '../assets/index.less'

const FormItem = Form.Item

export const Login = ({
    form: {
        getFieldDecorator,
        validateFieldsAndScroll,
    }
}) => (
    <div className="form">
        <div className="logo">
            <img alt={'logo'} src={config.config.logo} />
            <span>{config.config.name}</span>
        </div>
        <form>
            <FormItem hasFeedback>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(<Input size="large" onPressEnter={console.log('handleOk')} placeholder="Username" />)}
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
                    Sign in
                </Button>
                <p>
                    <span>Username：guest</span>
                    <span>Password：guest</span>
                </p>
            </Row>

        </form>
    </div>
)
Login.propTypes = {
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
