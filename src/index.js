import express from "express";
import mysql from "mysql";
const base = mysql.createConnection({
    host :"127.0.0.1",
    user : "root",
    database: "bda_alumnos"
})

const app = express();
app.listen(3000);
console.log("server funcionando en el puerto", 3000);

app.get ("/alumnos",(req,res) => {
    base.query("SELECT nombre_completo FROM bda_alumnos.notas", function (error,result){
        res.send(result)
    })
});

app.post ("/alumno/:id",(req,res) => {
    res.send ("id","nombre y apellido","notas","nota final","condicion")
})