import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userModel from './usermodel.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname , "public")))

app.get("/",(req, res)=>{
    res.render("home")
})

app.listen(3000, ()=>{
    console.log("Server running on PORT : 3000");
});