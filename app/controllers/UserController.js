const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API de Usuários
 */

/**
 * @swagger
 * /v1/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: login efetuado com sucesso.
 *    
 */
exports.register = async (req, res) => {
  try {
    let validator = [], user = 0;
    const { username, password } = req.body;

    if (typeof username === 'undefined') {
      validator.push('username é um campo obrigatório.');

    } else if (username.length == 0) {
      validator.push('username nulo.');

    } else {
      user = await Users.findOne({ where: { username } });
    }

    if (user)
      validator.push('username em uso.');

    if (typeof password === 'undefined') {
      validator.push('password é um campo obrigatório.');

    } else if (password.length == 0) {
      validator.push('password nulo.');
    }

    if (validator.length) {
      res.status(400).json({ "status": 0, message: validator });
      return;
    }

    cryptPassword = await encryptPassword(password);
    users = await Users.create({ username: username, password: cryptPassword });

    if (users)
      res.status(201).json({ "status": 1, message: [`'${username}' criado com sucesso!`] });

  } catch (error) {
    console.error(error);
    res.status(500).json({ "status": 0, error: 'Erro ao criar um novo usuário.' });
  }
};

/**
 * @swagger
 * /v1/login:
 *   post:
 *     summary: Fazer login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: Token JWT de autenticação
 */
exports.login = async (req, res) => {
  try {
    let validator = [], user = 0;
    const { username, password } = req.body;

    if (typeof username === 'undefined') {
      validator.push('username é um campo obrigatório.');

    } else if (username.length == 0) {
      validator.push('username nulo.');
    }

    if (typeof password === 'undefined') {
      validator.push('password é um campo obrigatório.');

    } else if (password.length == 0) {
      validator.push('password nulo.');
    }

    if (validator.length) {
      res.status(400).json({ "status": 0, message: validator });
      return;
    }

    cryptPassword = await encryptPassword(password);
    user = await Users.findOne({ where: { username: username, password: cryptPassword } });

    if (!user) {
      res.status(401).json({ "status": 0, message: ['não foi possível executar essa ação, verifique se username ou password são válidos.'] });
      return;
    }

    let token = jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, { expiresIn: config.jwtExpiration });
    res.header('Authorization', token).json({ "status": 0, "token": token, message: ['login efetuado com sucesso.', 'authorization token disponível no header do request também.'] });

  } catch (error) {
    console.error(error);
    res.status(500).json({ "status": 0, error: 'erro ao efetuar o login.' });
  }
};

function encryptPassword(password) {
  try {
    return bcrypt.hashSync(password, '$2b$10$abcdefghijklmnopqrstuvsxyz');
  } catch (error) {
    throw new Error('erro desconhecido.');
  }
}
