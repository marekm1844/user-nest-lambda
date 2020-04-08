import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { User } from "./model/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, TransactionRepository, Transaction } from "typeorm";
import env from '../../shared/env_variables';



@Injectable()
export class UserService {


    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) {

    }


    async get(): Promise<User[]> {

        try {
            return await this.userRepository.find();

        } catch (error) {
            //logger.error('core.user.userService.get', { data: { id, error: error } })
        }


    }


    getNoDB(): User {

        try {

            const _users_json: User = JSON.parse(`{"id":"89251ab3-1cdc-4629-9086-ce022cf6669e","firstName":"Marek","lastName":"Majdak","email":"info@sufrago.com","name":"sufrago","createAt":"2019-12-17T17:58:07.533406","phoneNo":"+48666666666","companyName":"Sufrago sp z o.o.","vatId":"PL 9512468001"}`);
            return _users_json;

        } catch (error) {
            //logger.error('core.user.userService.get', { data: { id, error: error } })
        }


    }

}


