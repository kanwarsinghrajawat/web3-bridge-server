"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paramsRoute_1 = __importDefault(require("./paramsRoute"));
const quotesRoute_1 = __importDefault(require("./quotesRoute"));
const tokensRoute_1 = __importDefault(require("./tokensRoute"));
const routes = (app) => {
    app.use("/api", paramsRoute_1.default);
    app.use("/api", quotesRoute_1.default);
    app.use("/api", tokensRoute_1.default);
};
exports.default = routes;
