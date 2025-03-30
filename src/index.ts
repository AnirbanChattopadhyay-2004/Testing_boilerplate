import express from "express";
import {client} from "./db"
export const app = express();
app.use(express.json());
app.post("/sum",async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;
    const result = await client.user.create({
        data: {
            a:a,
            b:b
        }})
    res.json({
        answer,
        id:result.id
    });
});