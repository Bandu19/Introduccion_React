# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## **Instalación NODEJS (Linux)**

- [Link del Repositorio GitHub](https://github.com/nodesource/distributions/blob/master/README.md)



# **Instalación desde FEDORA**

Para en caso de _fedora_ solo se nececita copiar y pegar el link(**se recomienda checar el repositorio por situaciones de actualización**):

```
 _curl -fsSL https://rpm.nodesource.com/setup_17.x | bash -_

```

El link lo escribes dentro de la terminal con el superusuario **root**. y ejecutas el siguiente comando:

```
$ sudo dnf install nodejs
```

Compruebas con **_node --version_** y te aparecera la version que quiere decir que se instalo de forma exitosa.
Tambien se tiene que verificar la version del **npm** y es lo mismo como el anterior comando: **_npm --version_**.

## **DESINSTALACIÓN**

Para la desisntalación de **nodejs** junto con **_npm_** se requiere con el siguiente comando

```
$ sudo dnf remove nodejs
```

#

## **Creación de proyecto NodeJs**

```
$ npm init
```

### Notas:

Para reconstruir los modulos de Node **(node_modules)**. Utilizamos el siguiente comando:

```
$ npm install
```

Y para construir el build, o ejecutar el proyecto:

```
$ npm run build
```

# Creación de un Proyecto con React

Deberá tener Node 14.0.0 o una versión posterior en su máquina de desarrollo local (pero no es obligatorio en el servidor). Recomendamos utilizar la última versión de LTS. Puede usar nvm (macOS/Linux) o nvm-windows para cambiar las versiones de Node entre diferentes proyectos.

### **npx**
```
npx create-react-app my-app(nombre de tu carpeta)
```
Si ya creaste una carpeta, que dentro de ella es donde quieres almacenar tu proyecto con los demas archivos puedes utilizar el siguiente comando:

```
npx create-react-app ./

```
**_Advertencia: Para tus carpetas tienes que empezar con letra minuscula ya que es requisito que tu carpeta del proyecto tiene que empezar con letra minuscula y evitar de poner nombres claves como REACT O REACT-DOM _**





