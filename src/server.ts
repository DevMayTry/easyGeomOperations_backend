import express from 'express';
import cors from 'cors';

import swaggerUi  from "swagger-ui-express";
import  swaggerDocs from "./swagger.json";

import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes);

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Server started on port 3333!')
})