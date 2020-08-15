import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiPublicController } from 'src/api/swagger/controller/api-public-controller.decorator';
import { UserService } from './user.service';
import { UserCreationRequest } from './user-creation.request';
import { User } from './user.entity';
import { ApiCreationEndpoint } from 'src/api/swagger/endpoint/api-creation-endpoint.decorator';
import { ApiBodyType } from 'src/api/swagger/endpoint/api-body.type';
import { ApiResponseType } from 'src/api/swagger/endpoint/api-response.type';


@ApiPublicController('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @ApiCreationEndpoint(
        'Create a user',
        ApiBodyType(UserCreationRequest),
        ApiResponseType(User),
    )
    @Post()
    createUser(
        @Body()
        request: UserCreationRequest,
    ): Promise<User> {
        return this.userService.createUser(request)
    }
}
