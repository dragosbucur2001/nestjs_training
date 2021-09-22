# Training NestJS API Development

In this training I will show you how to create a REST API using NestJS. I will go over performing CRUD operations in a database, authentication, role-based authorization, file upload and much more.


# Table of contents
1. [Introduction](#introduction)
    1. [Installation](#installation)
    1. [Creating a new project](#creation)
    1. [What's inside the project](#inside)


## Introduction <a name="introduction"></a>

This chapter will cover the basics of NestJS


### NestJs CLI Installation <a name="installation"></a>

The first step is to install the nestjs cli, which is used to create and run projects, and create resources inside your nestjs project. We can do this by running: `npm install -g @nestjs/cli` inside the terminal.

This will install the cli globally, which means that you can run nest cli commands in any folder using the `nest` command.


### Creating a new project <a name="creation"></a>

To create a new nest project you can simply execute `nest new project_name` where project_name is the name of your project.. pretty self-explanatory. 

The command will prompt you to choose which packet manager you want to use `npm` or `yarn`, choose your favorite (I will chose npm in this tutorial).


### What's inside the project <a name="inside"></a>

When you open the project folder you can see that nest generated a basic scaffold for us inside the `src` folder, and also installed all the npm packages we needed for our app. Nest also generates a `test` folder where you can write tests for your projects, we will not focus on them or any other test file generated by nest in this tutorial.

**Important!!!** Do not forget to include your `package-lock.json` in `.gitignore`.

Let's dive deeper inside the `src` folder.

```
src/
 |--app.controller.spec.ts #this is a test file, we do not care about it for now
 |--app.controller.ts
 |--app.module.ts
 |--app.service.ts
 |--main.ts
```

The entry point for every nest application is the `main.ts` file, this is the file which is run when you start your app.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```
As you can see, 
