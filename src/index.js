import express from "express";
const app = express();
app.listen(3000);
console.log("server funcionando en el puerto", 3000);

app.get ("/alumnos",(req,res) => {
    res.send ("ponete las pilas giselaaa")
});

app.post ("/alumno/:id",(req,res) => {
    res.send ("id","nombre y apellido","notas","nota final","condicion")
})