
// Ejercicios para practicar TypeScript:

// Nivel Básico
// 1. Variables y Tipos: Declara variables con tipos explícitos (string, number, boolean). 
// Crea una función que tome dos números y devuelva su suma. Prueba con tipos union (string | number).

let nombre: string = "Juan";
let edad:  number = 30;
let esEstudiante: boolean = true;

const sumar = (a: number, b: number): number => a + b;

const result = sumar(5, 10);
console.log(`La suma es: ${result}`);

// 2. Funciones: Escribe una función que reciba un array de strings y devuelva la longitud total 
// de todos los strings combinados. Usa parámetros opcionales y valores por defecto.

const longitudTotal = (arr: string[], multiplicador: number = 1): number => {
    const total = arr.reduce((acc, red) => acc + red.length, 0);
    return total * multiplicador;
}

const palabras = "hola como estas soy carlos".split(" ");
console.log(`La longitud total es: ${longitudTotal(palabras, 2)}`);

// 3. Arrays y Objetos: Crea un array de objetos con propiedades como nombre y edad. 
// Filtra los objetos donde la edad sea mayor a 18 usando métodos de array.

const personas = [
    { nombre: " Ana", edad: 25},
    { nombre: " Luis", edad: 17},
    { nombre: " Marta", edad: 30},
    { nombre: " Pedro", edad: 15}
]

const mayoresEdad = personas.filter(persona => persona.edad > 18);
console.log("Personas mayores de edad:");
mayoresEdad.forEach(persona => console.log(`${persona.nombre.trim()} tiene ${persona.edad} años`));

// Nivel Intermedio
// 4. Interfaces: Define una interfaz para un "Usuario" con propiedades nombre, email y opcional
//  teléfono. Crea una función que valide si un objeto cumple con la interfaz.

interface Usuario { 
    nombre: string;
    email: string;
    telefono?: number;
}

const validar = (usuario: Usuario):void=>{ 
    if (usuario.nombre && usuario.email && usuario.telefono) { 
        console.log(`Usuario ${usuario.nombre} validado`)
    }else{ 
        console.log(`usuario no validado, faltan datos`)
    }
};

const esUsuario = (obj: any): obj is Usuario=>{
    return ( 
        typeof obj.nombre === "string" && 
        typeof obj.email === "string" && 
        typeof obj.telefono === "number" || typeof obj.telefono === "undefined"
    )
}

const user: Usuario = {
    nombre: "Carlos",
    email: "carlos@gmail.com",
    telefono: 584242964319
}

validar(user);
const result2 = esUsuario(user);
console.log(result2);

// 5. Clases: Implementa una clase "Coche" con propiedades marca, modelo y métodos para acelerar
//  y frenar. Usa constructores y herencia para crear una subclase "CocheElectrico".

class Coche{ 
    marca: string;
    modelo: string;
    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar(): void{
        console.log(`${this.marca} ${this.modelo} está acelerando...`);
    };

    frenar(): void{
        console.log(`${this.marca} ${this.modelo} está frenando...`);
    }
}

class CocheElectrico extends Coche{
    bateria: number;
    constructor(marca: string, modelo: string, bateria: number){
        super(marca, modelo);
        this.bateria = bateria;
    }
}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar();
const miCocheElectrico = new CocheElectrico("Tesla", "Model 3", 100);
miCocheElectrico.acelerar();

// 6. Genéricos: Crea una función genérica que tome un array de cualquier tipo y devuelva el primer
//  elemento. Prueba con tipos específicos como number[] y string[].

// Nivel Avanzado
// 7. Módulos: Divide tu código en módulos. Crea un módulo para utilidades matemáticas (suma, resta)
//  y otro para validaciones. Importa y usa en un archivo principal.

// 8. Async/Await: Escribe una función asíncrona que simule una llamada a una API (usa setTimeout).
//  Maneja errores con try/catch y devuelve datos tipados.

// 9. Decoradores: Implementa un decorador simple que registre el tiempo de ejecución de una función. 
// Aplícalo a una función que realice cálculos complejos.

// 10. Tipos Avanzados: Usa tipos condicionales para crear un tipo que dependa de otro 
// (ej: si es string, devuelve string; si es number, devuelve number). Crea un ejemplo con mapped types.

