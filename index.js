const express=require('express')
const dotenv=require('dotenv')
const port=process.env.port
const path=require('path')
const ejs=require('ejs')
const app=express()

dotenv.config()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('map')

})

app.listen(process.env.port,()=>{

    console.log(`listenning to port  {$port}`)
})