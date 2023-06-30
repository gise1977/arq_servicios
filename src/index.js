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
    //desde la linea 16 a la 28 va en el DTo
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
        //la 30 va en el 30  
        const alumnosMap = alumnosBase.map(dato =>alumnoMapping.convertAlumnos(dato));
       // la linea 32 va en el service y arreglar la nota final,maximo 10
        console.log(alumnosMap[0].getNotaFinal());
        res.send(alumnosMap);
    } catch(error){
      res.status(500).send("falla el servidor");
    }
 
});

app.post ("/alumno/:id",(req,res) => {
    res.send ("id","nombre y apellido","notas","nota final","condicion")
})