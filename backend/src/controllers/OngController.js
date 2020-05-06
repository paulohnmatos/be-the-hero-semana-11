const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const data = await connection('ongs').select();
        return response.json(data);
    },
    
    async store (request,response) {
        const { ong_name,email,city,phone,uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({ id,ong_name,email,city,phone,uf });
        return response.json({ id });
    }
};