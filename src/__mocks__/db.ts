import {mockDeep} from 'vitest-mock-extended';
import {PrismaClient} from '@prisma/client';
export const client = mockDeep<PrismaClient>();

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
