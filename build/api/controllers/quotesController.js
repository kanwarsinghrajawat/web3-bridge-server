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
const quotesService_1 = __importDefault(require("../services/quotesService"));
const quotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const queryParams = {
        srcQuoteTokenAmount: (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.srcQuoteTokenAmount,
        slippage: (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.slippage,
        srcChainId: (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.srcChainId,
        srcQuoteTokenAddress: (_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.srcQuoteTokenAddress,
        dstChainId: (_e = req === null || req === void 0 ? void 0 : req.query) === null || _e === void 0 ? void 0 : _e.dstChainId,
        dstQuoteTokenAddress: (_f = req === null || req === void 0 ? void 0 : req.query) === null || _f === void 0 ? void 0 : _f.dstQuoteTokenAddress,
    };
    try {
        const data = yield quotesService_1.default.getQuote(queryParams);
        res.json(data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "An error occurred while fetching the quote" });
    }
});
const quotesController = {
    quotes,
};
exports.default = quotesController;
