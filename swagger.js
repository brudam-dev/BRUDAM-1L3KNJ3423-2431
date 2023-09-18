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
 */

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

/**
 * @swagger
 * /v1/delivery:
 *   post:
 *     summary: Criar uma ordem de entrega
 *     tags: [Delivery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeliveryCreate'
 *     responses:
 *       200:
 *         description: Entrega criada com sucesso!
 */

/**
 * @swagger
 * /v1/delivery/{id}:
 *   get:
 *     summary: Obter detalhes de entrega por ID
 *     tags:
 *       - Delivery
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da entrega
 *     responses:
 *       200:
 *         description: Sucesso ao obter os detalhes da entrega
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeliveryGet'
 *       400:
 *         description: Erro ao obter os detalhes da entrega
 *       404:
 *         description: Entrega não encontrada
 */