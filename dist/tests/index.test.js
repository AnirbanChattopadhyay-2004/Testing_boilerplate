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
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
const db_1 = require("../__mocks__/db");
// mocking means somehow skipping the logic of external dependencies and dealing with the other logic in that endpoint
// vi.mock("../db",()=>{
//     return {
//         client:{
//             user:{
//                 create:vi.fn().mockResolvedValue({})
//             }
//         }
//     }
// })
// can be done in this file or in __mocks__ folder to be in a structured format. The __mocks__ folder should be in the same directory as the file you are mocking.
vitest_1.vi.mock("../db");
(0, vitest_1.describe)("POST /sum", () => {
    db_1.client.user.create.mockResolvedValue({ id: 1, a: 1, b: 1 }); // this is the mock function which is used to skip the logic of db and return a value which is used in the test case.
    (0, vitest_1.it)("should return the correct sum", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = (yield (0, supertest_1.default)(index_1.app).post("/sum").send({ a: 1, b: 2 }));
        const finalresult = res.body.answer;
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.id).toBe(1);
        (0, vitest_1.expect)(finalresult).toBe(3);
    }));
});
