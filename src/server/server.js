import express from 'express';
import cors from 'cors';
import searchRoutes from '../routes/searchRoutes.js';
import repoRoutes from '../routes/repoRoutes.js';


const app = express ();

app.use(express.json());

app.use(cors());


app.use('/api', searchRoutes, repoRoutes);



export default app;