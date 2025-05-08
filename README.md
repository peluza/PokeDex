# PokeDex Project

## Descripción General

Este proyecto consta de dos partes principales:

1.  **PokeDexApi:** Una API backend construida con Django y Django REST Framework que gestiona la autenticación de usuarios.
2.  **pokedex:** Una aplicación móvil frontend construida con React Native (Expo) que funciona como una Pokedex, consumiendo datos de la [PokeAPI](https://pokeapi.co/) pública y utilizando el backend para la gestión de favoritos (implícita, ya que el backend actual solo maneja usuarios).

---

## 📁 Estructura del Proyecto

PokeDex/
├── PokeDexApi/         # Backend Django
│   ├── PokeDexApi/     # Directorio principal de la app Django
│   │   ├── models/
│   │   │   └── serializers.py
│   │   ├── views/
│   │   │   └── userView.py
│   │   ├── init.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3      # Base de datos (SQLite por defecto)
│   └── manage.py       # Utilidad de comandos de Django
├── pokedex/            # Frontend React Native (Expo)
│   ├── src/
│   │   ├── api/        # Lógica para interactuar con APIs (PokeAPI, AsyncStorage)
│   │   ├── assets/     # Imágenes, fuentes, etc.
│   │   ├── components/ # Componentes reutilizables de UI
│   │   ├── context/    # Contexto de autenticación
│   │   ├── hooks/      # Hooks personalizados (useAuth)
│   │   ├── navigation/ # Configuración de la navegación
│   │   ├── screens/    # Pantallas principales de la app
│   │   └── utils/      # Constantes, helpers (colores, userDB)
│   ├── App.js          # Punto de entrada principal de la app Expo
│   ├── app.json        # Configuración de la app Expo
│   ├── babel.config.js # Configuración de Babel
│   ├── eas.json        # Configuración de Expo Application Services (EAS) Build
│   ├── package.json
│   └── package-lock.json
└── README.md 

---

## ⚙️ Backend (PokeDexApi)

### Descripción

Una API simple construida con Django que proporciona endpoints para el registro y login de usuarios usando autenticación por Token.

### Endpoints de la API

* **`POST /api/user/create`**: Crea un nuevo usuario.
    * **Body**: `{ "username": "...", "password": "...", "email": "..." }`
    * **Respuesta**: Mensaje de éxito o error.
* **`POST /api/user/login`**: Inicia sesión de un usuario.
    * **Body**: `{ "username": "...", "password": "..." }`
    * **Respuesta**: Mensaje, datos del usuario y token de autenticación en caso de éxito.
* **`GET /api/user/getAllUser`**: Obtiene todos los usuarios (Requiere token de admin, actualmente usuario con ID 1).
    * **Headers**: `Authorization: Token <tu_token>`
    * **Respuesta**: Lista de usuarios.
* **`GET /api/user/getUser/<id>/`**: Obtiene un usuario específico por ID (Requiere token del propio usuario).
    * **Headers**: `Authorization: Token <tu_token>`
    * **Respuesta**: Datos del usuario o error si no se encuentra o no hay permisos.

### Dependencias Principales

* Django
* Django REST Framework

### Configuración

1.  Asegúrate de tener Python y pip instalados.
2.  Navega al directorio `PokeDexApi`.
3.  (Recomendado) Crea y activa un entorno virtual:
    ```bash
    python -m venv venv
    # En Windows:
    venv\Scripts\activate
    # En macOS/Linux:
    source venv/bin/activate
    ```
4.  Instala las dependencias (asumiendo que tienes un `requirements.txt`, si no, instálalas manualmente):
    ```bash
    pip install Django djangorestframework
    # O si tienes requirements.txt: pip install -r requirements.txt
    ```
5.  Aplica las migraciones de la base de datos:
    ```bash
    python manage.py migrate
    ```

### Ejecución

1.  Desde el directorio `PokeDexApi`:
    ```bash
    python manage.py runserver
    ```
2.  La API estará disponible en `http://127.0.0.1:8000/`.

---

## 📱 Frontend (pokedex)

### Descripción

Una aplicación móvil Pokedex que muestra información sobre Pokémon obtenida de la [PokeAPI](https://pokeapi.co/). Permite a los usuarios ver una lista de Pokémon, detalles individuales, iniciar sesión (actualmente con datos fijos) y marcar Pokémon como favoritos (guardados localmente en el dispositivo).

### Pantallas Principales

* **PokeDex**: Muestra una lista paginada de Pokémon.
* **Pokemon**: Muestra los detalles de un Pokémon seleccionado (tipos, estadísticas base, imagen).
* **Favorite**: Muestra la lista de Pokémon marcados como favoritos por el usuario (si ha iniciado sesión).
* **Account**: Permite iniciar sesión (actualmente con credenciales fijas `edison`/`Eisaza.123!`) o muestra los datos del usuario autenticado.

### Dependencias Principales

* Expo
* React Navigation (Stack, Bottom Tabs)
* React Native Gesture Handler
* React Native Reanimated
* React Native Screens
* React Native Safe Area Context
* AsyncStorage
* Formik & Yup (para el formulario de login)
* Lodash
* React Native Vector Icons

### Configuración

1.  Asegúrate de tener Node.js, npm y Expo CLI instalados.
    * Instalar Expo CLI: `npm install -g expo-cli`
2.  Navega al directorio `pokedex`.
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### Ejecución

1.  Desde el directorio `pokedex`:
    ```bash
    expo start
    ```
2.  Sigue las instrucciones en la terminal para abrir la aplicación en un emulador/simulador o en tu dispositivo físico usando la app Expo Go.
