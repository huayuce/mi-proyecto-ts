console.log("¡Hola Mundo desde TypeScript!");

//==========================================
//EJEMPLO : CLASES AL ESTILO JAVA
//==========================================

class Persona {
    //1. Atributos con modificadores de acceso (igual que en java)
    private nombre: string;
    public edad: number;

    //2. El constructor (en TS siempre se usa la palbra clave 'constructor')
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    //3. Un método comun y corriente
    public presentar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const programador = new Persona("Edgar", 51);
console.log(programador.presentar());