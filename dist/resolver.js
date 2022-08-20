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
const axios_1 = __importDefault(require("axios"));
const fetchSwapi = ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(page);
        var options = { method: 'GET', url: 'https://swapi.dev/api/people', params: { page } };
        let { data, status } = yield axios_1.default.request(options);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
const searchSwapi = ({ text }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(text);
        var options = { method: 'GET', url: 'https://swapi.dev/api/people', params: { search: text } };
        let { data, status } = yield axios_1.default.request(options);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});
const resolvers = {
    Query: {
        people: (_, { page }) => fetchSwapi({ page }),
        search: (_, { text }) => searchSwapi({ text }),
    },
};
exports.default = resolvers;
