import React, {Component} from 'react'

import './header.scss'

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <button className='iconfont icon-fanhui back'>
                    
                </button>
                <span className='title'>{this.props.title}</span>
                <button className='info'>
                    
                </button>
            </header>
        )
    }
}

export default Header