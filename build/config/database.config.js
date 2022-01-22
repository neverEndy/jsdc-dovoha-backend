"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var dotenv_options_1 = require("./dotenv-options");
dotenv.config(dotenv_options_1.dotEnvOptions);
var result = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number.parseInt(process.env.TYPEORM_PORT, 10),
    entities: ["/build/entity/*.js"],
    migrations: ["src/migration/*.js"],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
exports.default = result;
