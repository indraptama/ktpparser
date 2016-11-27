function cityCheck(city) {
    if(kota == 'kabupaten bandung' || 'kota bandung' || 'bandung') {
        return 'orangBandung'
    } else {
        return 'bukanOrangBandung'
    }
};

module.exports = cityCheck;
