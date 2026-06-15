import { Elysia, t } from 'elysia';
import { UserController } from '../controller/user.controller';

const userController = new UserController();

export const userRoutes = new Elysia({ prefix: '/api' })
  .post('/users', userController.register, {
    body: t.Object({
      name: t.String({ maxLength: 100, minLength: 1 }),
      email: t.String({ format: 'email', maxLength: 100 }),
      password: t.String({ maxLength: 255, minLength: 1 }),
    }),
  });
