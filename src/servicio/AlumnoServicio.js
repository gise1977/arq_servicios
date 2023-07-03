import AlumnosDTO from "../DTO/AlumnosDTO.js";

class AlumnoServicio{
    async getAlumno(){
        try{
            const alumnosDTO = new AlumnosDTO();
            const baseAlumnos = await alumnosDTO.getAllAlumno();
            let basefinal=[];

           baseAlumnos.forEach(element => {
            var notaFinal = element.getNotaFinal();
            var condicion = element.getCondicion(notaFinal);
            console.log(element);
            var alumnoelemento = {
                idalumno : element.idAlumnos,
                nombre_completo : element.NombreCompleto,
                nota1 : element.Nota1,
                nota2: element.Nota2,
                nota3: element.Nota3,
                notafinal: notaFinal,
                condicion: condicion,
            }
            basefinal.push(alumnoelemento)
                
            });
            return basefinal;
        }catch(error){
            console.log(basefinal);
        }

    }
}
export default AlumnoServicio