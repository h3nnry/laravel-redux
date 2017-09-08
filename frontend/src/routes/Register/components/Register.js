import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row, Form, Input, Icon } from 'antd'
import { config } from 'utils'
import styles from '../assets/index.less'

const FormItem = Form.Item

export const Register = ({
    form: {
        getFieldDecorator,
        validateFieldsAndScroll,
    }
}) => {

    function handleRegisterSubmit() {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return
            }
            //todo ajax request to backend
        })
    }

    return (
        <div className="form">
            <div className="logo">
                <img alt={'logo'} src={config.config.logo}/>
                <span>{config.config.name}</span>
            </div>
            <form>
                <FormItem hasFeedback>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true, min: 2
                            },
                        ],
                    })(<Input size="large" onPressEnter={handleRegisterSubmit} placeholder="Name"/>)}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                required: true, type: 'email'
                            },
                        ],
                    })(<Input size="large" onPressEnter={handleRegisterSubmit} placeholder="Email"/>)}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true, min: 5
                            },
                        ],
                    })(<Input size="large" type="password" onPressEnter={handleRegisterSubmit} placeholder="Password"/>)}
                </FormItem>
                <Row>
                    <Button type="primary" size="large" onClick={handleRegisterSubmit}
                            loading={console.log('loginLoading')}>
                        <Icon type="user-add"/> Sign Up
                    </Button>
                </Row>

            </form>
            <div className="sign-operation">
                <Row>
                    <span className="member-text">Already a member?</span>
                    <Link to="/login">Sign In</Link>
                </Row>
            </div>
        </div>
    )
}
Register.propTypes = {
}

export default connect(({ login }) => ({ login }))(Form.create()(Register))
