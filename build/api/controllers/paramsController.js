"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paramsService_1 = __importDefault(require("../services/paramsService"));
const approveTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const queryParams = {
        spender: (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.spender,
        tokenAddress: (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.tokenAddress,
        amount: (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.amount,
    };
    try {
        const data = yield paramsService_1.default.approveTransaction(queryParams);
        res.json(data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while fetching the quote" });
    }
});
const paramsController = {
    approveTransaction,
};
exports.default = paramsController;
