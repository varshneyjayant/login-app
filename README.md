# Login App

A simple application with NestJS based REST API and Angular based application

### Tech Used

1. Node.js 12.8.3
2. Typescript
3. Nest.js
4. Express
5. Angular
6. Bootstrap
7. Jasmine
8. Karma
9. Jest
10. Express
11. Docker
12. Docker Compose

## How to Run

Currently, this project contains 2 docker contains
1. login-app
2. login-app-ui

**Prerequisites**
Docker & Docker Compose

```bash
$ docker-compose up -d
```

To stop the app
```bash
$ docker-compose down
```

## login-app (REST API)


You can access the REST API at http://localhost:3000

Read more at ##[Login App Backend](./login-app-backend/README.md)


## login-app-ui (Frontend)

You can access the UI at http://localhost:4200 or http://localhost

Read more at ##[Login App Frontend](./login-app-frontend/README.md)


### Mock Data
**Username:** MTN_user

**Password:** MTN281#^@*


**NOTE:** Since the username provided in mockdata isn't an email so I have kept the username as a non-empty string.

# 12 Things that can be improved

1. Backend - Proper Authentication system using a library and a database
2. Backend - Use of Interceptor to handle HTTPStatuses 
3. Backend - Use of a middleware to validate username and password 
4. Backend - Use of a stateless authentication mechanism like JWT
5. Frontend - Better coverage of Tests
6. Frontend - Implentation of store APIs to keep the user data instead of local storage
7. Frontend - We should be refreshing page to load updated data after login
8. Frontend - More configurable API URL to support other than localhost
9. Frontend - Using Angular form validation instead of custom
10. Overall - Integration testing including UI and Backend
11. Overall - With more existing libraries, the development time can be speeded up
12. Overall - Common Error Handling and Messages store
