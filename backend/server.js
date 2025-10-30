import  express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';


const __fileName=fileURLToPath(import.meta.url);//convert the url to path
const __dirname=path.dirname(__fileName);//return the directory containing the file


const app=express();
const PORT=4000;
//middlewares to allow cross origin policy
app.use(cors())
//Connect db

connectDB();
//Middleware


app.use(express.json())
app.use('/api/auth',userRoutes)
app.use('/api/resume',resumeRoutes)
app.use('/uploads',express.static(
    path.join(__dirname,'uploads'),
    {
        setHeaders: (res,_path)=>
        {
            res.set(`Acess control origin`,'http://localhost:5173')
        }
    }
))

//routes

app.get('/',(req,res) =>
{
 res.send("API working")
})
app.listen(PORT, ()=>
{
    console.log(`server starting at host ${PORT}`)
})
