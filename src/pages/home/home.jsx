import React, {Component} from 'react'
import Footer from '../../components/footer/footer'
import Carousel from '../../components/carousel/carousel'
import {getCarouselData} from '../../api/index'

import './home.scss'

class Home extends Component {
    componentDidMount() {
        this._getCarouselData();
    }

    async _getCarouselData() {
        const result = await getCarouselData();
        console.log(result);
    }

    render() {
        return (
            <div className='home'>
                <Carousel />
                <Footer />
            </div>
        );
    }
}

export default Home