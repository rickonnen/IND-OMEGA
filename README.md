# 🏠 PropBol

## 📌 Descripción General

**PropBol** es una plataforma web enfocada en la **compra, venta y gestión de inmuebles** en Bolivia.

Permite a los usuarios:

* Publicar propiedades (casas, departamentos, terrenos)
* Explorar listados disponibles
* Gestionar información de usuarios
* Autenticarse y operar de forma segura

El sistema está diseñado bajo una arquitectura moderna, escalable y desacoplada.

---

## 🧱 Arquitectura

El proyecto sigue un enfoque **monorepo** con separación clara por capas:

* **Frontend** → Next.js (App Router + TypeScript)
* **Backend** → API REST (Node.js + TypeScript)
* **Infraestructura** → Docker + CI/CD (GitHub Actions)

---

## 📂 Estructura del Proyecto

```bash
.
├── backend/      # API (lógica de negocio, autenticación, usuarios, propiedades)
├── frontend/     # Aplicación web (UI + interacción con el usuario)
├── infra/        # herramientas de testing y entornos de prueba
├── scripts/      # utilidades (stress testing, simulación, etc.)
└── .github/      # pipelines CI/CD
```

---

## ⚙️ Requisitos

* Node.js >= 18
* pnpm
* Git
* Docker (opcional)

Instalar pnpm:

```bash
npm install -g pnpm
```

---

## 🚀 Ejecución Local

### 1. Clonar el repositorio

```bash
git clone <repo-url>
cd <repo>
```

---

### 2. Instalar dependencias

```bash
pnpm install
```

---

## 3. Configurar variables de entorno

Crear el archivo:

`backend/.env`

Ejemplo:

```env
# Aplicación
PORT=5000
NODE_ENV=development

# Seguridad
JWT_SECRET=your_jwt_secret_here

# Base de datos
DATABASE_URL=postgresql://user:password@host:5432/database

# Administrador
ADMIN_EMAIL=admin@example.com

# Binance P2P
BINANCE_P2P_URL=https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search
BOB_PER_USDT=6.91
OFFICIAL_EXCHANGE_RATE=6.96

# Brevo
BREVO_API_KEY=your_brevo_api_key

# Correo
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_MULTIMEDIA_FOLDER=your_folder_name

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Facebook OAuth
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
FACEBOOK_CALLBACK_URL=http://localhost:5000/api/auth/facebook/callback

# Discord OAuth
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
DISCORD_CALLBACK_URL=http://localhost:5000/api/auth/discord/callback

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_CALLBACK_URL=http://localhost:5000/api/auth/linkedin/callback

# Frontend
FRONTEND_URL=http://localhost:3000

# Evolution API
EVOLUTION_API_URL=https://your-evolution-api-url.com
EVOLUTION_API_KEY=your_evolution_api_key
EVOLUTION_INSTANCE=your_instance_name

# Blockchain
TRON_GRID_URL=https://api.trongrid.io
TRON_WALLET_ADDRESS=your_wallet_address

# Scraper
SCRAPER_USER_AGENT=Mozilla/5.0 (...)
```

Crear el archivo:

`frontend/.env`

Ejemplo:

```env
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:5000

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# Tipo de cambio
OFFICIAL_EXCHANGE_RATE=6.96

# Binance P2P
BINANCE_P2P_URL=https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search

# Scraper
SCRAPER_USER_AGENT=Mozilla/5.0 (...)

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_public_token
```

### Producción

```env
NEXT_PUBLIC_API_URL=https://api.your-domain.com
```

> Las variables con prefijo `NEXT_PUBLIC_` son accesibles desde el navegador y no deben contener secretos, claves privadas ni credenciales sensibles.


---

### 4. Ejecutar Backend

```bash
pnpm --filter backend dev
```

Disponible en:

```bash
http://localhost:5000
```

---

### 5. Ejecutar Frontend

En otra terminal:

```bash
pnpm --filter frontend dev
```

Disponible en:

```bash
http://localhost:3000
```

---

### 6. Ejecutar todo (monorepo)

```bash
pnpm dev
```

---

## 🐳 Docker

Levantar contenedor de desarrollo:

```bash
docker-compose up --build
```

---

## 🔄 Scripts principales

| Acción           | Comando                      |
| ---------------- | ---------------------------- |
| Instalar deps    | `pnpm install`               |
| Dev (todo)       | `pnpm dev`                   |
| Backend dev      | `pnpm --filter backend dev`  |
| Frontend dev     | `pnpm --filter frontend dev` |
| Build            | `pnpm build`                 |
| Start producción | `pnpm start`                 |

---

## 🌿 Flujo de Trabajo

* `main` → producción
* `develop` → integración

### Convención de commits

```bash
feat: nueva funcionalidad
fix: corrección de errores
chore: tareas internas
```

---

## 📦 Buenas Prácticas

* No subir archivos `.env`
* No modificar configuraciones críticas sin aprobación
* Mantener commits pequeños (máx. ~250 líneas)
* Seguir arquitectura por capas en backend
* Separar lógica y UI en frontend

---

## 🔐 Seguridad

* No hardcodear credenciales
* Uso obligatorio de variables de entorno
* Revisar scripts antes de ejecutarlos (`/scripts`)

---

## 🚧 Estado del Proyecto

En desarrollo activo.

---

## 🎯 Objetivo del Proyecto

Construir una plataforma robusta y escalable que facilite el mercado inmobiliario en Bolivia, permitiendo:

* Mayor visibilidad de propiedades
* Gestión eficiente de usuarios
* Experiencia moderna y rápida

---

## 👥 Contribución

1. Crear una rama desde `develop`
   `feature/nombre_HU`
2. Implementar cambios siguiendo estándares
3. Abrir un Pull Request

---

## 📄 Licencia

Pendiente de definición.

