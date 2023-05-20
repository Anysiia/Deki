"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// GET /helloworld
function helloWorld(_req, res) {
    res.json({ greetings: 'Hello World !' });
}
exports.default = helloWorld;
