## Passo a Passo

### 1 - Create file action.yml and place this code it.

```
name: 'My Custom Action'

runs:
  using: 'node16'
  main: 'dist/index.js'
```

### 2 - npm init -y for create ("package.json")

### 3 - Modify the file ("package.json") add 

```
"scripts": {
    "build": "tsc",
}
```

### 4 - Install typescript

    npm install -D typescript

### 5 - Use this command to create a tsconfig.json

    npx tsc --init

### 5.1 - Swap the content the tsconfig.json to:

```
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "commonjs",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### 6 - Create your code in src/index.ts
 

 ## 7 - Use this command to create a gitignore for node

    npx gitignore node

### 8 - Install jest

    npm install -D jest ts-jest @types/jest

### 8.1 - Create a file called **jest.config.ts** and paste this code it.

```
{
  "preset": "ts-jest",
  "testEnvironment": "node",
  "collectCoverage": true,
  "coverageReporters": ["lcov", "text-summary"],
  "collectCoverageFrom": ["src/**/*.ts"],
  "coveragePathIgnorePatterns": ["/node_modules/", "/__tests__/"],
  "testPathIgnorePatterns": ["/node_modules/"]
}
```

### 9 - Your file header should this code:

```
import { Your fuction } from '../path/to/file';
```

### 10 - Run all tests 

    npx jest

### 10.1 - Run tests specific

  npx jest __tests__/index.test.ts

    