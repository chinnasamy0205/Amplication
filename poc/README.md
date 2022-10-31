# Amplication

This app was generated with Amplication.
You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and built with [react-admin](https://marmelab.com/react-admin/)

## Environment Variables

| Environment          | Description                                 | Value                 |
| -------------------- | ------------------------------------------- | --------------------- |
| PORT                 | The port that the client UI is listening to |
| REACT_APP_SERVER_URL | Amplication Server URL                      | http://localhost:3000 |

## Available Scripts

In the `admin-ui` subdirectory, you can run:

### `yarn start`

Runs the app in development mode.

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `yarn test`

Runs tests to make sure everything is working correctly.

### `yarn build`

Builds the app for production in the `build` folder.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Ejects the Create React App. [Click here for more info](https://create-react-app.dev/docs/available-scripts/#npm-run-eject).

### `docker:build`

Build the Admin-UI Docker image.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
JWT secret                               | Change_ME!!!                                               |
| JWT_EXPIRATION       | JWT expiration in days                   | 2d                                                         |

\*db-provider - the prisma DB provider (for example: for postgres is postgresql and for MySQL is mysql)

## Getting Started - Local Development

### Prerequisites

Make sure you have Node.js 16.x, npm, and Docker installed.

### Install dependencies

In the `server` subdirectory, run:

```console
cd server
npm install
```

### Generate Prisma client

```console
npm run prisma:generate
```

### Start database using Docker

```console
npm run docker:db
```

### Initialize the database

```console
npm run db:init
```

### Start the server

```console
npm start
```

## Getting Started - Docker Compose

In the `server` subdirectory, run:

```console
npm run compose:up
```

## Learn more

You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).
