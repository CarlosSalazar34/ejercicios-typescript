
interface Estudiante {
    id: number;
    nombre: string;
    notas: Number[];

}

class Universidad {
    public nombre: string;
    private estudiantes: Estudiante[] = [];

    // Hacemos que estudiantes sea opcional con un valor por defecto []
    constructor(nombre: string, estudiantes: Estudiante[] = []) {
        this.nombre = nombre;
        this.estudiantes = estudiantes;
    }

    addStudent(nombre: string, notas: number[] = []) {
        const student: Estudiante = {
            // Usamos Math.floor para tener IDs enteros
            id: Math.floor(Math.random() * 1000),
            nombre: nombre,
            notas: notas
        };
        this.estudiantes.push(student);
    };
}

// Ahora esto funcionará sin errores
const universidadCatolica = new Universidad('UCAB');