# ⚙️ Bitácora de Aprendizaje: Backend Profesional con NestJS
**Estudiante:** Edgar  
**Enfoque:** Arquitectura de Servidores Web (De Java a NestJS)

---

## 🛠️ Módulo 5: Tu Primer Servidor con NestJS

### 1. El Puente Arquitectural con Java
*   **NestJS:** Framework de NodeJS para el lado del servidor construido sobre TypeScript. Es el equivalente conceptual a **Spring Boot** en Java.
*   **Arquitectura Coherente:** Implementa de forma estricta conceptos que comparte con Java: Inyección de Dependencias, Módulos, Controladores y Servicios mediante "Decoradores" (análogos a las `@Anotaciones` de Java).

### 2. Decisiones de Configuración Estándar (CLI)
Al inicializar un entorno profesional de NestJS paso a paso, se adoptaron las siguientes directrices:
*   **Gestor de paquetes:** `npm` (Manejo estándar de dependencias).
*   **Módulo de Observabilidad:** Desactivado temporalmente por inducción limpia.
*   **Sistema de Módulos (Module System):** `ESM (ES Modules) [with vitest]`, garantizando la compatibilidad nativa con la sintaxis moderna de `import / export` estudiada en los módulos previos.

### 3. Comandos de la Terminal (Git Bash)
```bash
# 1. Instalar el asistente oficial de NestJS de forma global en el sistema
npm install -g @nestjs/cli

# 2. Crear un nuevo proyecto con la estructura limpia oficial
nest new mi-servidor-nest

# 3. Navegar/moverse dentro de la carpeta del proyecto desde la terminal
cd mi-servidor-nest

# 4. Refrescar y abrir la ventana de Visual Studio Code en la ruta actual
code . -r

# 5. Levantar el servidor en modo desarrollo (Monitorea cambios en tiempo real)
npm run start:dev
```

### 4. Punto de Acceso Local (End-point)
*   Por defecto, el servidor se despliega en el puerto local **3000**, respondiendo a la dirección: `http://localhost:3000`

---

## 🌐 Módulo 6: Creación de una API REST Profesional

### 1. El Patrón Controlador (Controller)
*   En NestJS, un controlador es la capa encargada de recibir las peticiones HTTP del cliente (navegador o frontend) y retornar una respuesta.
*   **Equivalencia en Java:** Funciona exactamente igual que la anotación `@RestController` en Spring Boot.

### 2. Los Decoradores HTTP
Los decoradores le añaden metadatos a las clases y métodos para decirle al servidor cómo mapear las rutas de internet:
*   **`@Controller()`**: Define que la clase es un controlador de rutas.
*   **`@Get('usuarios')`**: Especifica que cuando alguien acceda mediante el método HTTP GET a la ruta `/usuarios`, se ejecute ese método en particular. Equivale al `@GetMapping("/usuarios")` de Java.

### 3. El Formato Universal JSON
*   **JSON (JavaScript Object Notation):** Es el formato de texto plano estructurado mediante llaves `{\}` para objetos y corchetes `[\]` para listas/arreglos que se usa en la web.
*   NestJS automatiza la conversión de objetos nativos de TypeScript a strings JSON en la respuesta, garantizando un estándar profesional de comunicación.

---

## ⚡ Módulo 7: Conexión con el Frontend (El puente de red)

### 1. Mecanismo de Seguridad CORS
*   Los servidores restringen peticiones de dominios cruzados por seguridad. Para permitir el enlace con herramientas como Vite, es mandatorio habilitar los permisos en el archivo principal `main.ts` del servidor.
*   **Código de activación:** `app.enableCors();`

### 2. Consumo de Datos mediante API Fetch
*   En la web nativa, se utiliza el comando asíncrono `fetch` para realizar llamadas HTTP por red (actuando de forma homóloga a los sockets o clientes de conexión HTTP en Java de escritorio).
*   Sintaxis implementada en el controlador cliente (`index.ts`):
    ```typescript
    // Petición asíncrona hacia el puerto del backend
    const respuesta = await fetch("http://localhost:3000/usuarios");
    const usuarios = await respuesta.json(); // Deserialización del string JSON
    const primerUsuario = usuarios[0]; // Extracción del primer objeto del arreglo
    ```

### 3. Sincronización en Entornos de Desarrollo Simultáneos
*   Para proyectos estructurados por capas, la terminal del editor permite segmentar pestañas paralelas usando Git Bash para ejecutar ambos servicios concurrentemente:
    *   **Pestaña 1 (Frontend - Vite):** `npx vite` en la raíz del proyecto.
    *   **Pestaña 2 (Backend - NestJS):** `cd mi-servidor-nest` seguido de `npm run start:dev`.

### 4. Resolución de Conflictos en Arquitecturas de Git (Submódulos)
Cuando se inicializa un proyecto de NestJS dentro de otro repositorio activo, el framework genera su propia carpeta oculta `.git`. Esto bloquea el rastreo del Git raíz de la computadora.
*   **Solución profesional aplicada:**
    ```bash
    # 1. Eliminar el repositorio de Git interno que genera el conflicto
    rm -rf mi-servidor-nest/.git
    ```
---

## 💾 Módulo 8: Persistencia en la Nube con Supabase y PostgreSQL

### 1. El Concepto de Base de Datos en la Nube (DBaaS)
*   **Supabase:** Plataforma moderna en la nube que provee una base de datos relacional **PostgreSQL** real y completa sin necesidad de instalaciones locales pesadas en el sistema operativo.
*   **PostgreSQL:** Motor de base de datos relacional robusto y estándar de la industria, equivalente a los entornos corporativos donde se usa Oracle o MySQL en aplicaciones de escritorio Java.

### 2. Modelado de Datos Visual vs SQL
*   En lugar de ejecutar scripts manuales `CREATE TABLE`, se utilizó el **Table Editor** gráfico de la plataforma para mapear la entidad con tipado web estricto:
    *   `id` (`int8`, Autoincremental, Llave Primaria).
    *   `created_at` (`timestamp`, Fecha de sistema por defecto).
    *   `nombre` (`text`, Homólogo al tipo `String` de Java).
    *   `rol` (`text`, Homólogo al tipo `String` de Java).
