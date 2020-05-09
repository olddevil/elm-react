import React, { Component } from 'react'
import Swiper from 'swiper/js/swiper.min.js'
import store from '../../store'

import 'swiper/css/swiper.min.css'
import './carousel.scss'

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
    }

    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal', 
            loop: true, 
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default Carousel