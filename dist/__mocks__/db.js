"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const vitest_mock_extended_1 = require("vitest-mock-extended");
exports.client = (0, vitest_mock_extended_1.mockDeep)();
// the function which are mocked always return undefined
// vi.mock("../db",()=>{
//         return {
//             client:{
//                 user:{
//                     create:vi.fn().mockResolvedValue({})
//                 }
//             }
//         }
// })
