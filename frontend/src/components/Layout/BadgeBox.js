import React from 'react'
import { Icon, Badge } from 'antd'
import { Link } from 'react-router'
import styles from './BadgeBox.less'

function BadgeBox() {
    return (
        <div className="badgeBox">
            <Link to="/" className="badge">
                <Badge count={5} style={{ backgroundColor: '#108ee9' }}>
                    <Icon type="message" className="size"/>
                </Badge>
            </Link>
            <Link to="/" className="badge">
                <Badge count={10} style={{ backgroundColor: '#87d068' }}>
                    <Icon type="mail" className="size"/>
                </Badge>
            </Link>
            <Link to="/" className="badge">
                <Badge count={100} overflowCount={99}>
                    <Icon type="notification" className="size"/>
                </Badge>
            </Link>
        </div>
    )
}

export default BadgeBox