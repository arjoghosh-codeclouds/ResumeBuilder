import mongoose from 'mongoose'
export const connectDB =async()=>
{
    await mongoose.connect('mongodb+srv://arjoghosh_db_user:resume123@cluster0.jthfzvo.mongodb.net/resumebuilder')
    .then(()=>
    {
        console.log('DB CONNECTED')
    })
}