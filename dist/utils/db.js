"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'userData', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '@123@432', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
