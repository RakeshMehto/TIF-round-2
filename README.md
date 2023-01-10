# Problem Statement

You run an EdTech-Management SaaS company. On your platform, Schools are registered, along with their Students.

To restrict access, you need to develop a Scope-based Authorization system,

where any Role (ex: Admin, Student, Principal)
must have a scope (eg: school-create, user-get) with them
to perform any actions on the resources (eg: User, School)
We basically have these models:

- `Role`
- `User`
- `Student`
- `School`

This is the crux of the platform:

Users sign-up using Email and Password, and have some Role assigned to them.
Every Role has scopes, that lets them have permission to work on some resource.
User can have multiple Student associated with them. Think of it like this: the User is a parent, who can have multiple Student profiles for their children.

The libraries for use are:

- `Sequelize` (<https://sequelize.org/docs/v6>)
- `Validator` (<https://www.npmjs.com/package/validatorjs>)
- `jsonwebtoken` (<https://www.npmjs.com/package/jsonwebtoken>)

Get Started

```text
├── app.js
├── controllers
│   ├── roleController.js
│   ├── schoolController.js
│   ├── studentController.js
│   ├── userController.js
├── middlewares
│   ├── auth.js
│   ├── errorHandler.js
├── models
│   ├── index.js
│   ├── role.js
│   ├── school.js
│   ├── student.js
│   ├── user.js
├── routes
│   ├── roleRoutes.js
│   ├── schoolRoutes.js
│   ├── studentRoutes.js
│   ├── userRoutes.js
└── utils
    ├── scopes.js
    ├── tokens.js
```
