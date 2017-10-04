# Task List V3

## Setup
1. Install `Node 6.10.x` or later
2. Fork and clone repo
3. `$ touch .env` in the root directory of your project
4. Add credentials to `.env` file:
```sh
USERNAME=[username]
PASSWORD=[password]
NODE_ENV=development
AUTH_TYPE=Token
```

## Running the project
1. Install dependencies `npm i` (from root of project)
2. Start server `$ npm run serve`
3. Start dev server `$ npm run dev:server`
4. Set auth: set browser url to `localhost:5000/auth`
5. Run task list: set browser url to `localhost:5000/`