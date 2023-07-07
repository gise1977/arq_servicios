import mysql from "mysql";
import AlumnosMapping from "../mapping/AlumnoMapping.js";

class AlumnosDTO {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bda_alumnos'
    });

    async getAllAlumno() {
        const alumnoMapping = new AlumnosMapping();
        try {
            const results = await new Promise((resolve, reject) => {
              this.connection.query("SELECT * FROM bda_alumnos.notas;", function (error, results) {
                if (error) {
                  console.error(error);
                  reject(error);
                } else {
                  resolve(results);
                }
              });
            });
            
            const alumnomapeado = results.map(elemento => alumnoMapping.convertAlumnos(elemento));
            return alumnomapeado;
        } catch (error) {
            return error;
        }
    }
    async postAlumnos(alumnoSave) {
      try {
        const result = await new Promise((resolve, reject) => {
          console.log(alumnoSave);
          this.connection.query(`INSERT INTO bda_alumnos.notas (nombre_completo,nota1,nota2,nota3) VALUES 
          ('${alumnoSave.NombreCompleto}', ${alumnoSave.Nota1}, '${alumnoSave.Nota2}','${alumnoSave.Nota3}');`,
           function (error, result){
            if (error) {
              console.error(error);
              reject(error);
              return error;
            } else {
              resolve(result)
            }
          })
        });
        return result;
      } catch (error) {
        return error;
      }
    }
}

export default AlumnosDTO
