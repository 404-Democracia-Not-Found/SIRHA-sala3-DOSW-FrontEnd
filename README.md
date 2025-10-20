# SIRHA-sala3-DOSW-FrontEnd
Proyecto orientado a la inscripción de horario y modificación de materias.

### Quick Start

Node js (version 22.20.00)
Para descargarlo: https://nodejs.org/en/download

npm (include with Node js)

# Development Setup 
1. Comprobar que esta instalado
node --version
npm --version
2. Instalar dependencias
npm install
3. Ejecutar el proyecto
npm start
4. Abrir en navegador: http://localhost:3000

### Estructura del proyecto
├───components
│   ├───Administrative
│   │   ├───AdministrativeDashboard
│   │   ├───AdministrativeUser
│   │   ├───MessagesAdministrative
│   │   ├───Registration
│   │   ├───RequestReviews
│   │   └───ScheduleAdmin
│   ├───AdminLogin
│   ├───PasswordRecovery
│   ├───Professor
│   │   ├───ClassesRecords
│   │   ├───ClassManagementProfessor
│   │   ├───MessagesProfessor
│   │   ├───ProfessorDashboard
│   │   ├───ProfessorUser
│   │   └───Schedule
│   ├───RoleSelection
│   ├───Student
│   │   ├───AcademicRecords
│   │   ├───ClassManagement
│   │   ├───ClassSchedule
│   │   ├───Messages
│   │   ├───StudentDashboard
│   │   └───StudentUser
│   └───StudentLogin
├───main
│   └───java
│       └───edu
│           └───dosw
│               └───project
└───test
    └───java
        └───edu
            └───dosw
                └───project

### Features

- Inicio: Ingreso al sistema SIRHA acorde al rol (estudiante o profesor)
- Estudiante: Con su pantalla principal del rol de estudiante con 4 botones: Mi perfil; Horario de clases; Registros académicos; Gestión de clases
- Profesor: Con su pantalla principal (con posibilidad a cambiar a la pantalla de rol Administrativo si así se requiere) con 4 botones: Registros de clases, Mi perfil, Horario, Gestión de clases
- Administrativo: Con su pantalla principal con 4 botones: Registro, Solicitudes, Horario y Mi perfil

