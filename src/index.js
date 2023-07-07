import express from "express";
import mysql from "mysql";
import AlumnoServicio from "./servicio/AlumnoServicio.js";
import bodyParser from "body-parser";

const base = mysql.createConnection({
    host :"127.0.0.1",
    user : "root",
    database: "bda_alumnos"
});
const app = express();
app.listen(3000);
console.log("server funcionando en el puerto", 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get ("/alumnos",async (req,res) => { 
    try {
        const alumnoServicio = new AlumnoServicio ();
        const baseAlumnos = await alumnoServicio.getAlumno();
     res.send(baseAlumnos);     
    } catch (error) {
     res.status(500).send("falla el servidor");     
    }
         });

app.post ("/alumnos", (req, res) => {
    try {
        const alumnoServicio = new AlumnoServicio ();
        const alumnobase = alumnoServicio.postAlumno(req.body);  
        switch (alumnobase) {
          case "Notas_Fallo":
            res.status(403).send({message: "el rango de las notas es de 1 a 10."});
            break;
          case "todo_ok":
            res.status(200).send({message: "Se guardo con exito."});
            break;
          case "NombreCompleto_Fallo":
             res.status(403).send({message:"el nombre excedio el maximo de caracteres(50)"});
             break;
          default:
            res.status(500).send("sos alto cornudo,no te corre el programa");
            break;
        }
      } catch (error) {
        res.status(500).send("Internal Server Error");
        }
     });
