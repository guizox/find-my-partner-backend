import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserCreationRequest } from './user-creation.request';

@Injectable()
export class UserService {

    private users = [];

    createUser = (user: UserCreationRequest): void => {
        this.users.push(user);
    }

    getUsers = (): User[] => {
        return this.users
    }

}
