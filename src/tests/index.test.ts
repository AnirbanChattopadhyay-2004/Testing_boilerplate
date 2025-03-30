import {expect, it, describe,vi} from 'vitest';
import request from 'supertest';
import {app} from '../index';
import { client } from '../__mocks__/db';
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

vi.mock("../db")

describe("POST /sum", () => {
    it("should return the correct sum",async ()=>{
            client.user.create.mockResolvedValue({id:1,a:1,b:1}) // this is the mock function which is used to skip the logic of db and return a value which is used in the test case.
            vi.spyOn(client.user,"create")
            const res = (await request(app).post("/sum").send({a:1,b:2}))
            // for spying means to check whether the function was called or not, if called then how many times it was called or with what arguments and so on. 
            const finalresult = res.body.answer
            // ---------------------------------------- spy ----------------------------------------------------------------
            expect(client.user.create).toHaveBeenCalledWith({data:{
                a:1,
                b:2
            }
            })
            // -------------------------- checks the input of the functions -----------------------------------------------
            expect(res.statusCode).toBe(200)
            expect(res.body.id).toBe(1)
            expect(finalresult).toBe(3)
    })
})