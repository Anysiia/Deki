"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helloWorld_1 = __importDefault(require("./routes/helloWorld"));
const getUsers_1 = __importDefault(require("./routes/user/getUsers"));
const app = (0, express_1.default)();
const PORT = 8080;
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
// Routes
app.get('/helloworld', helloWorld_1.default);
app.get('/users', getUsers_1.default);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
