"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { users } = require('../../data/users');
// GET /users
function getUsers(_req, res) {
    //console.log('inside api getUsers function');
    res.json(users);
}
exports.default = getUsers;
