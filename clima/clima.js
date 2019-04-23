const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=8d004e22f0527628bb0e84ba601d61e8`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}