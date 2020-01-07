const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/authRouter');
const usersRouter = require('./user/userRouter');
const { validateToken } = require('./middleware/');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => res.status(200).json({ message: 'API is online.' }));

module.exports = server;
