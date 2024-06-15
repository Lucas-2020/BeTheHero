const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_token = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_token', ong_token)
      .select('*');

    return response.json(incidents);
  }
}