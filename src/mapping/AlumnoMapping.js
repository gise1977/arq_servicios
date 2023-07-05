import Alumno from "../objetos/Alumno.js";
import AlumnoSave from "../objetos/AlumnoSave.js";

class AlumnosMapping {
    convertAlumnos (baseAlumno){
        const alumno = new Alumno(baseAlumno.id_alumnos,
            baseAlumno.nombre_completo,
            baseAlumno.nota1,baseAlumno.nota2,baseAlumno.nota3);
        return alumno;
    }
    convertAlumnoSave(alumno){
        const alumnoSave = new AlumnoSave(
            alumno.nombre_completo.toLowerCase(),
            alumno.nota1,alumno.nota2,alumno.nota3);
        return alumnoSave;

    }

    
}
export default AlumnosMapping;