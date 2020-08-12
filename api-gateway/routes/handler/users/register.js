const apiAdapter = require('../../apiAdapter');

const{
    URL_SERVICE_USER
} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async(req, res) => {
    try{
        const media = await api.post('/media', req.body);
        return res.json(media.data);
    }catch (error){

        if(error.code === 'ECONNREFUSED'){
            return res.status(500).json({ status: 'error', message: 'service unavailable'});
        }

        const { status, data } = error.response;
        return res.status(status).json(data)
    }
}