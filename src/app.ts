import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRouter);
app.use('/api/v1', routers);

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

export default app;
