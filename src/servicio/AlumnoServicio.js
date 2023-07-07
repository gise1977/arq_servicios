import AlumnosDTO from "../DTO/AlumnosDTO.js";
import AlumnosMapping from "../mapping/AlumnoMapping.js";

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
                id_alumnos : element.idAlumnos,
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
    postAlumno(alumno) {
      var validacion_final = this.validarNotas(alumno.nota1,alumno.nota2,alumno.nota3);
        if (validacion_final == false)
            return "Notas_Fallo";
        
        if (alumno.nombre_completo.length > 50)
            return "NombreCompleto_Fallo";
        
        
        try {
            const alumnosMapping = new AlumnosMapping();
            const alumnoguardado = alumnosMapping.convertAlumnoSave(alumno)
            const alumnosDTO = new AlumnosDTO();
            alumnosDTO.postAlumno(alumnoguardado);
            
            return "todo_ok";
        
        } catch (error) {
            return error;
        }
    }
    validarNotas(nota1,nota2,nota3){
        if (nota1 < 1 || nota1 > 10){
            return false;
        }
        if (nota2 < 1  || nota2 > 10){
            return false;
        }
        if (nota3 < 1  || nota3 > 10){
            return false;
        }
            return true;
    }
    
}
export default AlumnoServicio;