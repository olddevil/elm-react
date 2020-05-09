import client from './client'

const BASE_URL = 'http://localhost:1234/'

export const getCarouselData = () => {
    client(BASE_URL + 'getcarouseldata');
} 