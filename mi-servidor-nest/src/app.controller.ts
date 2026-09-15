import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ==========================================
  // TU NUEVO ENDPOINT PERSONALIZADO (MÓDULO 6)
  // ==========================================
  
  // El decorador @Get('usuarios') equivale al @GetMapping("/usuarios") de Spring Boot
  @Get('Usuarios')
  obtenerUsuarios(){
    // Retornamos un arreglo de objetos (Equivalente a una List<Objeto> en Java)
    // NestJS lo transformará automáticamente a formato JSON para la web
    return[
      {id:1, nombre:'Edgar', rol:'Programador Backend'},
      {id:2, nombre:'Ana', rol:'Diseñadora Fronted'},
      {id:3, nombre:'Carlos', rol:'Administrador de base de Datos'}
    ];
  }
}
