import express from "express";
import mysql from "mysql";
import AlumnosMapping from "./mapping/AlumnoMapping.js";

const base = mysql.createConnection({
    host :"127.0.0.1",
    user : "root",
    database: "bda_alumnos"
})

const app = express();
app.listen(3000);
console.log("server funcionando en el puerto", 3000);

 app.get ("/alumnos",async (req,res) => { 
    const alumnoMapping = new AlumnosMapping();
    try{
        const alumnosBase = await new Promise((resolve,reject) =>{
            base.query("SELECT * FROM bda_alumnos.notas", function (error,result){
                 if (error){
                    console.error(error);
                    reject(error);
                 }else{
                    resolve(result);
                 }
         })
        })
        const alumnosMap = alumnosBase.map(dato =>alumnoMapping.convertAlumnos(dato));
        console.log(alumnosMap.get(1));
        res.send(alumnosMap);
    } catch(error){
      res.status(500).send("falla el servidor");
    }
 
});

app.post ("/alumno/:id",(req,res) => {
    res.send ("id","nombre y apellido","notas","nota final","condicion")
})