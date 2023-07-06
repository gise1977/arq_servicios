class Alumno{
    constructor (id_alumnos,nombre_completo,nota1,nota2,nota3){
        this.idAlumnos = id_alumnos;
        this.NombreCompleto = nombre_completo;
        this.Nota1 = nota1;
        this.Nota2 = nota2;
        this.Nota3 = nota3;
    
    }

    getIdAlumnos() {
        return this.id_alumnos;
    }

    getNombreCompleto(){
        return this.nombre_completo;
    }

    getNota1(){
        return this.nota1;
    }
    getNota2(){
        return this.nota2;
    }
    getNota3(){
        return this.nota3;
    }
    getNotaFinal(){
        var NotaFinal = (this.Nota1+this.Nota2+this.Nota3)/3
        return Math.ceil(NotaFinal);
    }
    getCondicion(NotaFinal){
        if (NotaFinal >=7){
            return "APROBADO"
        }       
        
        if (NotaFinal >=4 || NotaFinal <= 6){
            return " EXAMEN FINAL"
        }
    
    
        if (NotaFinal <4){
            return "DESAPROBADO"
        } 
    }
}

export default Alumno;