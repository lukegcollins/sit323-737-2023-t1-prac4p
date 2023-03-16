# sit323_737-2023-t1-prac4p

## Submissions
- [Arithmetic API](express-arithmetic-api/): The Arithmetic API takes on the following file structure
  - [Src](express-arithmetic-api/) : The source code directory.
    - [App](express-arithmetic-api/src/app): The App directory.
      - [Models](express-arithmetic-api/src/models) : The Models directory.
      - [Modules](express-arithmetic-api/src/modules) : The Modules directory.
        - [Routed](express-arithmetic-api/src/modules/routed) : The Routes directory, contains route logic.
          - [Addition](/express-arithmetic-api/src/app/modules/routed/api/addition.js) : Addition route file.
          - [Subtraction](/express-arithmetic-api/src/app/modules/routed/api/subtraction.js) : Subtraction route file.
          - [Multiplication](/express-arithmetic-api/src/app/modules/routed/api/multiplication.js) : Multiplication route file.
          - [Division](/express-arithmetic-api/src/app/modules/routed/api/division.js) : Division route file.
          - [Modulation](/express-arithmetic-api/src/app/modules/routed/api/modulation.js) : Modulationddition route file.
        - [Service](express-arithmetic-api/src/modules/service) : The Service directory, contains logger, utility, and validation logic.
          - [Logger](/express-arithmetic-api/src/app/modules/service/logger/logger.js) : The Logger module file.
          - [Utility](/express-arithmetic-api/src/app/modules/service/utilities/utils.js) : The Utility module file.
          - [Validation](/express-arithmetic-api/src/app/modules/service/validation/validator.js) : The Validation module file.
    - [app.js](express-arithmetic-api/crc/app.js): The main application launch file.
  - [Logs](express-arithmetic-api/)
    - [Debug Logs](express-arithmetic-api/logs/debug-log)-
    - [Error Logs](express-arithmetic-api/logs/error-log)
    - [Info Logs](express-arithmetic-api/logs/info-log)

   

## Installation Instructions

### 1 - Project setup
```
npm install
```

### 2 - Compiles and hot-reloads for development
```
npm run dev
```

### 3 - Access Webpage
```
http://localhost:3000
```


### .ENV FIle MAY NEED TO BE CREATED IN PROJECT ROOT
```
NODE_ENV=development
APP_PORT=3000
LOG_DIR=logs/
```

