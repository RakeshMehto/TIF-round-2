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

## PRIMARY PROBLEM STATEMENT

API Routes should be allowed/denied access based on Scope, not Role
School Students API should return School Students of that particular School only
Your Task
Your task is to create a basic Authentication and CRUD API. The endpoints that you need to create will be given below.

You need to use PostgreSQL Database with Sequelize.

The libraries for use are:

- `Sequelize` (<https://sequelize.org/docs/v6>)
- `Validator` (<https://www.npmjs.com/package/validatorjs>)
- `jsonwebtoken` (<https://www.npmjs.com/package/jsonwebtoken>)

Get Started

### INPUT

You have to use the Schema described in each API to create the Models for User, Role, Student and Schools.

Make sure to use relationships between the table.

All the Endpoints are given below, and the examples are in this documentation only. Remember to check all the Success and Error Examples, below, also use the Dropdown on the right-side to navigate between examples.

Do not create extra API Endpoints. Here is a list of all the endpoints along with the scope needed to access those endpoints:

User

- `User` / Sign up (no scope needed)
- `User` / Sign in (no scope needed)
- `User` / Get All (user-get)
- `User` / Get Single (user-get)
- `Role`

- `Role` / Create (no scope needed)
- `Role` / Get All (role-get)
- `Student`

- `Student` / Create (student-create)
- `Student` / Get All (student-get)
- `School`

- `School` / Create (school-create)
- `School` / Get All (school-get)
- `School` / Get Students (school-students)

### OUTPUT

You need to provide code that can run these APIs.

Checklist before submission -

- I have use PostgreSQL Database for storing data.
- I have connected the SQL database to the Application using Sequelize.
- I have the URL for GitHub Repository, accessible to public.
(Heroku Endpoint is not required for this assignment, feel free to leave it blank in the above form)

BIBLIOGRAPHY
Scopes (<https://oauth.net/2/scope/>)
