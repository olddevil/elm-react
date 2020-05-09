import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
import '../../assets/iconfont/iconfont.css'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <NavLink exact to='/' className='nav-item'>
                    <i className='iconfont icon-changyonglogo40 icon-style'></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to='/order' className='nav-item'>
                    <i className='iconfont icon-xinbaniconshangchuan- icon-style'></i>
                    <span>订单</span>
                </NavLink>
                <NavLink to='/center' className='nav-item'>
                    <i className='iconfont icon-wode icon-style'></i>
                    <span>我的</span>
                </NavLink>
            </footer>
        );
    }
}

export default Footer