# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Proyecto Test Rick & Morty

Este es un proyecto privado que utiliza tecnologías modernas para crear una aplicación basada en la serie "Rick & Morty".

## Descripción

Este proyecto utiliza tecnologías como React, GraphQL y TypeScript para crear una aplicación web centrada en la serie "Rick & Morty". Utiliza bibliotecas como Apollo Client, Ant Design y SweetAlert2 para funcionalidades específicas.

## Instalación
Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm o yarn:

```bash
   npm install
   # o
   yarn install
```

### Scripts disponibles
En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- dev: Inicia el servidor de desarrollo en el puerto 3000.
- build: Compila el proyecto para producción.
- lint: Ejecuta eslint para linting del código.
- preview: Inicia un servidor de vista previa para la versión compilada del proyecto.

### Tecnologías utilizadas
- React
- React Router DOM
- Ant Design
- GraphQL
- Apollo Client
- TypeScript
- Vite
