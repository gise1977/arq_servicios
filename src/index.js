import express from "express";
import mysql from "mysql";
import AlumnoServicio from "./servicio/AlumnoServicio.js";
const base = mysql.createConnection({
    host :"127.0.0.1",
    user : "root",
    database: "bda_alumnos"
})

const app = express();
app.listen(3000);
console.log("server funcionando en el puerto", 3000);

app.get ("/alumnos",async (req,res) => { 
    try {
        const alumnoServicio = new AlumnoServicio ();
        const baseAlumnos = await alumnoServicio.getAlumno();
    res.send(baseAlumnos);     
    } catch (error) {
    res.status(500).send("falla el servidor");     
    }
         })
