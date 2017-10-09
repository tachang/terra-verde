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

Ideally, each component directory should house all dependencies specific to that folder.
I didn't have time for the migration, so the `/add-task` holds all the ui functionality.

#### What's missing (global) -
- Environment configurations
- Production optimizations
- Full Hot Module Replacement configuration
- Server-side rendering
- Unit testing
- A bunch of other Webpack optimizations
- Dockerize and compose 

#### What's missing (Task List functionality) -
- Change priority
- Toggle complete incomplete
- Sort tasks ex: click on `status`, `id`, `priority` to sort
- Auth form to login
- Handle incognito mode (no cookies for auth token)
- Move strings to constant files
- Sanitized inputs

- JWT - (JSON Web Tokens) to create session
- Observables - (RxJS) to gracefully handle async operations
- Flow - incremental typing or for at least models and model update functions
- ImmutableJS - ensures the state container cannot be mutated

