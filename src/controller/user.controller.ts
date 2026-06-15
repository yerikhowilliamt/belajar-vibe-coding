import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {
  async register({ body, set }: { body: any; set: any }) {
    try {
      const result = await userService.registerUser(body);
      set.status = 201;
      return {
        message: 'User created successfully',
        data: result,
      };
    } catch (error: any) {
      set.status = 400;
      return {
        message: error.message || 'Terjadi kesalahan',
      };
    }
  }
}
