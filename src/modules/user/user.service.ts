import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserCreationRequest } from './user-creation.request';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    createUser = async (user: UserCreationRequest): Promise<User> => {
        const newUser = await this.userRepository.create({ ...user, password: user.password }, 'system')
        return newUser;
    }

    getUsers = async (): Promise<User[]> => {
        return await this.userRepository.find({})
    }

}
