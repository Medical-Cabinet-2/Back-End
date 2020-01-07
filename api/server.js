const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/authRouter');
const usersRouter = require('./user/userRouter');
const recommendationsRouter = require('./recommendations/recommendationsRouter');
const strainsRouter = require('./strains/strainsRouter');
const { validateToken } = require('./middleware/');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/strains', strainsRouter);
server.use('/api/users', validateToken, usersRouter);
server.use('/api/recommendations', validateToken, recommendationsRouter);

server.get('/', (req, res) => res.status(200).json({ message: 'API is online' }));

module.exports = server;