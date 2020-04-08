
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsUUID, IsAlpha, IsPhoneNumber, IsAlphanumeric } from 'class-validator';
import { Expose, plainToClass } from 'class-transformer';
import { User } from '../../../core/user/model/user.entity';


export class UserDto implements Readonly<UserDto> {

    @ApiProperty({ required: true })
    @IsUUID()
    @Expose()
    id: string;

    @ApiProperty({ required: true })
    @IsAlpha()
    @IsString()
    @Expose()
    firstName: string;

    @ApiProperty({ required: true })
    @IsString()
    @Expose()
    lastName: string;

    @ApiProperty({ required: true })
    @IsEmail()
    @Expose()
    email: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsAlphanumeric()
    @Expose()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsPhoneNumber('ZZ')
    @Expose()
    phoneNo: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @Expose()
    companyName: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @Expose()
    vatId: string;



    public static from(dto: Partial<UserDto>) {

        return plainToClass<UserDto, Partial<UserDto>>(UserDto, dto, { excludeExtraneousValues: true })
    }

    public static fromEntity(entity: User) {
        return plainToClass<UserDto, Partial<User>>(UserDto, entity, { excludeExtraneousValues: true })
    }

    public toEntity() {

        return plainToClass<User, Partial<UserDto>>(User, this, { excludeExtraneousValues: true })
    }

}