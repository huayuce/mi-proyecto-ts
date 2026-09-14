//La palabra clave 'export' hace que la clase sea visible para otros archivos
export class Persona {
    //1. Atributos con modificadores de acceso (igual que en java)
    private nombre: string;
    public edad: number;

    //2. El constructor (en TS siempre se usa la palabra clave 'constructor')
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    //3. Un método comun y corriente
    public presentar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}