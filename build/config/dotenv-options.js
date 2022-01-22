"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotEnvOptions = void 0;
var path = require("path");
var env = process.env.NODE_ENV || 'development';
var envPath = path.join(process.cwd(), "env/".concat(env, ".env"));
console.log("Loading environment from ".concat(envPath));
var dotEnvOptions = {
    path: envPath
};
exports.dotEnvOptions = dotEnvOptions;
