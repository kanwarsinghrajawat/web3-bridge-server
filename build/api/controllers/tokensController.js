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
const tokenService_1 = __importDefault(require("../services/tokenService"));
const getAllRecommendedTokens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chainId } = req.query;
    if (!chainId)
        return res.sendStatus(404);
    const parsedChainId = parseInt(chainId);
    if (isNaN(parsedChainId)) {
        return res.status(400).json({ error: "Invalid chainId" });
    }
    try {
        const recommendedTokens = yield tokenService_1.default.fetchRecommendedTokens();
        const filteredTokens = recommendedTokens.filter((token) => {
            return token.chainId === parsedChainId;
        });
        res.status(200).json(filteredTokens);
    }
    catch (error) {
        console.error("Error fetching and filtering tokens:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
const tokensController = {
    getAllRecommendedTokens,
};
exports.default = tokensController;
