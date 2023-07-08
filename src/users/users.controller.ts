import { Controller, Post, Body, Get } from '@nestjs/common';
import {CreateUserDto} from './Dto/create-user.dto';
import { UsersService } from './users.service';
import {get} from 'http';



@Controller('users')
export class UsersController {

    constructor(private UserService : UsersService){}

        @Get()
        getUsers(){
            return this.UserService.getUser();
        }

        @Post()
        createUser(@Body() newUser : CreateUserDto ){
            return this.UserService.CreateUser(newUser)
        }
    
}
