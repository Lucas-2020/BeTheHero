const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const token = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
      token,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ token });
  }
};