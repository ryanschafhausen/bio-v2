# bio-v2

My old bio utilized HTML with Bootstrap. This is a revamp using Node, Express, Vite, and Chakra UI.

## Backend

Run the following from the project root directory:

```bash
npm init -y
npm install express
npm install nodemon -D
```

Add `"start": "nodemon backend/server.js"` to the `package.json` scripts. Run the following command to start the server:
```bash
npm start
```
Any database content is stubbed.

## Frontend

The front end uses Vite with React & Javascript, as well as Chakra UI. Install the following from the `/frontend` directory:

### Vite

```bash
npm create vite@latest .
```

Choose options for `React` and `Typescript`. Run `npm install` to complete installation.

### Chakra UI

Navigate to <http://v2.chakra-ui.com>. Click `Get Started` and scroll down to the framework section. Select `Vite` and copy the `npm` script generated. Run the command in the terminal from the `frontend` directory.

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Continue to follow the instructions from Chakra. Then run `npm run dev` to start Chakra.

```bash
npm i @chakra-ui/icons
```
