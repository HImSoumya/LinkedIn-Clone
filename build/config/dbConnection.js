"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
async function connectDB() {
    try {
        mongoose_1.default.connection.on("connected", () => {
            console.log("conntected to local database.");
        });
        mongoose_1.default.connection.on("error", () => {
            console.log("failed to establised connection with db");
        });
        await mongoose_1.default.connect(config_1.config.mongo_url);
    }
    catch (error) {
        console.log("failed to connect to database", error);
        process.exit(1);
    }
}
exports.default = connectDB;
