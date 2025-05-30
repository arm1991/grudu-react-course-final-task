import $api from '@/api';
import type { IUser } from '@/interfaces';

export default class AuthService {
  static async login(email: string) {
    const res = await $api.get('/users');

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    const [user] = res.data.filter((userItem: IUser) => userItem.email === email);

    return user;
  }

  static async loginWithId(id: string) {
    const res = await $api.get('/users');

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    const [user] = res.data.filter((userItem: IUser) => userItem.id === id);

    return user;
  }

  static async registration(email: string, password: string, fullname: string, id: string) {
    const user = await this.login(email);

    if (user) {
      throw new Error('There is already existing user with this email');
    }

    const res = await $api.post('/users', { email, password, fullname, id });

    if (!res.status) {
      throw new Error('Something went wrong');
    }

    return { email, password, fullname, id };
  }
}
