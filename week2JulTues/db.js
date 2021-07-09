module.exports = [
    {
        name: 'Finley',
        handle: '@fin',
        skill: 'deep sea diving'
    },
    {
        name: 'Skyler',
        handle: '@blue',
        skill: 'base jumping'
    },
    {
        name: 'Lennon',
        handle: '@walrus',
        skill: 'public speaking'
    },
    {
        name: 'Charlie',
        handle: '@chaz',
        skill: 'cozy sweaters'
    },
];
1
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const db = require('./db');

