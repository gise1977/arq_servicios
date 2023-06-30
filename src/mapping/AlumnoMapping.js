import Alumno from "../objetos/Alumno.js";

class AlumnosMapping {
    convertAlumnos (baseAlumno){
        const alumno = new Alumno(baseAlumno.id_alumnos,baseAlumno.nombre_completo,
            baseAlumno.nota1,baseAlumno.nota2,baseAlumno.nota3);
        return alumno;
    }
}
export default AlumnosMapping;