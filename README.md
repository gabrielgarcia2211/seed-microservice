# Microservicio Node.js - Reporte de Productos

Este proyecto consiste en un **microservicio desarrollado en Node.js** que se conecta a una base de datos relacional compartida con una aplicación Laravel y expone un reporte en formato JSON con los productos activos.

👉 [Proyecto Laravel](https://github.com/gabrielgarcia2211/seed-backend)

---

## 🧩 Contexto General

- **Formato**: Proyecto técnico entregable en repositorio (GitHub o GitLab)
- **Duración estimada**: 4 a 6 horas
- **Requisitos**:
  - Base de datos relacional (MySQL o PostgreSQL)
  - Laravel 10+
  - Vue 3
  - Node.js 18+
  - Acceso o simulación de integración con GCP
  - 
  
---

## 📁 Estructura del Proyecto

```
├── logs/                      # Archivos de logs generados por winston
├── node_modules/
├── src/
│   ├── config/               # Configuraciones generales (por ejemplo, base de datos)
│   ├── controllers/          # Lógica del controlador de productos
│   ├── repositories/         # Capa de acceso a datos (consultas SQL)
│   ├── routes/               # Definición de rutas Express
│   ├── utils/                # Utilidades auxiliares
│   └── logger.js             # Configuración de logs con winston
├── .gitignore
├── package.json
└── README.md
|__ serve.js                  # Configuración principal del servidor Express
```

## ⚙️ Instalación

1. Clonar el repositorio:

```
git clone https://github.com/gabrielgarcia2211/seed-microservice.git
cd seed-microservice
```

2. Instalar las dependencias:

```
npm install
```

3. Crear un archivo `.env` con la configuración de la base de datos:

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=seed_db
```

## ▶️ Ejecución

Para iniciar en modo desarrollo:

```
npx nodemon server.js 
```
Visita: http://127.0.0.1:3000/report


## 📌 Endpoint Disponible

### GET /report

- **Descripción**: Devuelve un arreglo JSON con los productos activos (donde `active = true`).
- **Respuesta de ejemplo**:

```json
[
  {
    "id": 1,
    "name": "Producto A",
    "price": 100,
    "active": true
  },
  {
    "id": 2,
    "name": "Producto B",
    "price": 150,
    "active": true
  }
]
```

## 🧱 Funcionalidades

- Lectura de productos activos desde la base de datos.
- Middleware de logs con `morgan`.
- Manejo de errores con `try/catch`.
- Logging de eventos y errores con `winston`.

## 🚨 Manejo de Errores

- Error en la conexión a la base de datos.
- Error en la ejecución de la consulta SQL.
- Error interno del servidor.
- Todos los errores se registran en archivos `.log` usando `winston`.
