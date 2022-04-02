"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = __importDefault(require("undici"));
function fetchur(...args) {
    // @ts-ignore
    return undici_1.default.fetch(...args);
}
exports.default = fetchur;
