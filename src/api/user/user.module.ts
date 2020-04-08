import { User } from "../../core/user/model/user.entity";
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "../../core/user/user.service";
import { UserController } from "./user.controller";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }