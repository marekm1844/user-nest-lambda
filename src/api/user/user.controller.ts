import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { UserService } from "../../core/user/user.service";
import { UserDto } from "./dto/user.dto";




@ApiTags('User')
@Controller()
export class UserController {

    constructor(public readonly service: UserService) {

    }


    @ApiOperation({ description: 'Find user by one parameter. Send Id' })
    @ApiParam({ name: 'request', type: String })
    @Get()
    async getOne(): Promise<UserDto[]> {
        return await this.service.get().then(r => r.map(e => UserDto.fromEntity(e)));
    }


    @ApiOperation({ description: 'Find user by one parameter. Send Id' })
    @ApiParam({ name: 'request', type: String })
    @Get('nodb')
    getNoDb(): UserDto {
        return UserDto.fromEntity(this.service.getNoDB());
    }



}