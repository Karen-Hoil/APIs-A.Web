import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User} from './user.entity'
import { Repository } from 'typeorm';
import { CreateUserDto} from './Dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    CreateUser(user : CreateUserDto){
        const NewUser = this.userRepository.create(user)
        return this.userRepository.save(NewUser)
    }
    getUser(){
        return this.userRepository.find()
    }
}
