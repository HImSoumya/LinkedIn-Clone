"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config/config");
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const app = (0, express_1.default)();
const port = config_1.config.port || 8086;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.get("/get", (req, res, next) => {
    res.json({ msg: "welcome to LinkedIn clone backend..." });
});
// DB_Connection
(0, dbConnection_1.default)();
app.listen(port, () => {
    console.log(`node server stared at http://localhost:${port}`);
});
