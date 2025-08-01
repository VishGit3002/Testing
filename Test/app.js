import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname , "public")));

app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/feature", (req, res)=>{
    res.render("feature")
})
app.get("/pricing", (req, res)=>{
    res.render("pricing")
})
app.get("/login", (req, res)=>{
    res.render("login")
})


app.listen(3000);