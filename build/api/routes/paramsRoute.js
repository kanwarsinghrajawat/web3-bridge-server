"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paramsController_1 = __importDefault(require("../controllers/paramsController"));
const router = express_1.default.Router();
router.post("/params", paramsController_1.default.approveTransaction);
exports.default = router;
