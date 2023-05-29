import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express()

app.use(cors())

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
})

export default app;
