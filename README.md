# SIRHA-sala3-DOSW-FrontEnd
Frontend de SIRHA — Sistema de Reasignación de Horarios Académicos.

Objetivo
--------
Interfaz web del Sistema de Reasignación de Horarios Académicos (SIRHA) diseñada para la Escuela Colombiana de Ingeniería. Construida con React y Tailwind, permite a estudiantes, profesores y administrativos visualizar, solicitar y gestionar reasignaciones de horario a través de APIs REST.

Inicio Rápido
-----------
- Node.js: (ver `package.json`) — el proyecto usa dependencias compatibles con Node y Create React App.
- Para descargar Node: https://nodejs.org/
- npm viene incluido con Node.

Configuración de Desarrollo
-----------------
1. Comprobar versiones:

     node --version
     npm --version

2. Instalar dependencias:

     npm install

3. Ejecutar en modo desarrollo:

     npm start

4. Abrir en el navegador:

     http://localhost:3000

Estructura destacada del frontend
---------------------------------
El frontend está organizado en `src/components` por roles y componentes reutilizables. A continuación un resumen de las partes más relevantes encontradas en el código:

- Auth / Entradas
    - `StudentLogin`, `AdminLogin`, `CoordinatorLogin`, `PasswordRecovery` — pantallas de acceso y recuperación.
- Selección de rol
    - `RoleSelection` — permite elegir el rol (Estudiante, Profesor, Administrativo).
- Estudiante
    - `StudentDashboard`, `StudentUser`, `ClassSchedule`, `ClassManagement`, `AcademicRecords`, `Messages` — gestión de horario, registros académicos y mensajería.
- Profesor
    - `ProfessorDashboard`, `ProfessorUser`, `ClassesRecords`, `ClassManagementProfessor`, `Schedule`, `MessagesProfessor` — ver y gestionar clases, registros y horario.
- Administrativo
    - `AdministrativeDashboard`, `AdministrativeUser`, `Registration`, `RequestReviews`, `ScheduleAdmin`, `MessagesAdministrative` — administración de solicitudes, registros y horario institucional.
- Componentes comunes
    - `UserRegistrationForm`, `Notification`, `ErrorMessage`, `LoadingSpinner`, `ComponentsPreview` — elementos reutilizables para formularios, notificaciones y estados de carga.

Características del frontend
---------------------------
- Interfaz orientada a roles: vistas diferenciadas para Estudiante, Profesor y Administrativo.
- Componentes reutilizables para formularios, mensajes y carga.
- Basado en Create React App (scripts `start`, `build`, `test`).

Tecnologías y dependencias 
--------------------------------------------------
- React 18
- Create React App (`react-scripts`)
- Tailwind CSS (devDependency)
- lucide-react (iconos)

Scripts útiles
--------------
- `npm start` — servidor de desarrollo
- `npm run build` — build de producción
- `npm test` — ejecutar tests
 
Nota - 2da versión del README
-----------------------------

Fecha: 2025-10-25


