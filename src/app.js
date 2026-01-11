const express=require('express');
const cors=require('cors');
const sequelize = require('./config/database');
const cookieParesr=require('cookie-parser');
const app=express();
const authRoute=require('./routes/auth/index');
const {isProtectedRoute}=require('./middlerware/auth')

app.use(express.json());
app.use(cookieParesr());
app.use(express.urlencoded({extended:true}));

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

sequelize.authenticate()
.then(()=>console.log('DB connected'))
.catch((err)=>console.log("db error",err));

app.get('/',(req,res)=>{
 res.send("api running");
})

app.use('/auth',authRoute);
app.use(isProtectedRoute);

app.get('/test',(req,res)=>{
  res.send('test route');
})

app.use(require('./middlerware/error.middleware'));
app.listen(3000,()=>console.log("app is running"));