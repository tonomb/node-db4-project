const express = require('express')

const server = express();

const recipiesRouter = require('./recepies/recipies-router')

server.use(express.json())


server.use('/recipies', recipiesRouter)

module.exports = server;