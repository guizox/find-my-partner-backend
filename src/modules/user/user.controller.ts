import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiPublicController } from 'src/api/swagger/controller/api-public-controller.decorator';
import { UserService } from './user.service';
import { UserCreationRequest } from './user-creation.request';
import { User } from './user.entity';

@ApiPublicController('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(
        @Body()
        request: UserCreationRequest,
    ): void {
        return this.userService.createUser(request)
    }
}
