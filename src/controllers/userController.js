const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {

  async create(req, res) {
    const { cpf, nome, telefone, data_nascimento, } = req.body;

    if (cpf == null || nome == null || telefone == null || data_nascimento == null)
      return res.status(400).json({ "codigo": 0, "mensagem": "Parametros inválidos" });

    try {
      const user = await User.findOrCreate({
        where: { cpf: cpf },
        defaults:{
          cpf, nome, telefone, data_nascimento
        }
      });

      return res.json({"codigo":1,"user":user,"mensagem":"Usuário criado com sucesso"});
    } catch (error) {
      console.log(error);
      return res.status(400).json({ "codigo": 0, "mensagem": "Ocorreu um erro" });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    if (id == null)
      return res.status(400).json({ "codigo": 0, "mensagem": "Parametros inválidos" });

    try {
      await User.update(req.body, {
        where: {
          id: id
        }
      });

      return res.json({"codigo":1,"mensagem":"Usuário alterado com sucesso!"});
    } catch (error) {
      return res.status(400).json({ "codigo": 0, "mensagem": "Ocorreu um erro" });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    if (id == null)
      return res.status(400).json({ "codigo": 0, "mensagem": "Parametros inválidos" });

    try {
      const user = await User.update({ "deleted_at": Date.now() }, {
        where: {
          id: id,
          deleted_at:{
            [Op.eq]: null
          }
        }
      });

      return res.json({"codigo":1,"mensagem":"Usuário deletado com sucesso!"});
    } catch (error) {
      return res.status(400).json({ "codigo": 0, "mensagem": "Ocorreu um erro" });
    }
  },

  async getById(req, res) {
    const { id } = req.params;

    if (id == null)
      return res.status(400).json({ "codigo": 0, "mensagem": "Parametros inválidos" });

    try {
      const user = await User.findByPk(id);

      if(user == null)
        return res.json({"codigo":1,"user":user,"mensagem":"Usuário não encontrado!"});
        
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ "codigo": 0, "mensagem": "Ocorreu um erro" });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll({
        where:{
          deleted_at:{
            [Op.eq]: null
          }
        }
      })

      return res.json(users);
    } catch (error) {
      return res.status(400).json({ "codigo": 0, "mensagem": "Ocorreu um erro" });
    }
  },
}