<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute on Development
1. Clone the repository
2. Execute
```
yarn install
```
3. Have Nest CLI installed
```
npm i -g @nestjs/cli
```
4. Start database
```
docker-compose up -d
```
5. Clone __.env.template__ file and rename the copy to __.env__
6. Fill environment variables in ```.env``` file
7. Execute app in development mode
```
yarn start:dev
```
8. Rebuild database with seed
```
localhost:3000/api/v2/seed
```

## Used Stack
* NestJS
* MongoDB