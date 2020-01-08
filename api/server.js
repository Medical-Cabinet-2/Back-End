const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/authRouter');
const usersRouter = require('./user/userRouter');
const strainsRouter = require('./strains/strainsRouter');
const { validateToken } = require('./middleware/');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/strains', strainsRouter);
server.use('/api/user', validateToken, usersRouter);

server.get('/', (req, res) => res.status(200).json({ message: 'API is online' }));

module.exports = server;