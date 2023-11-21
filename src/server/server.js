import express from 'express';
import cors from 'cors';
import searchRoutes from '../routes/searchRoutes.js';


const app = express ();

app.use(express.json());

app.use(cors());


app.use('/api', searchRoutes);



export default app;