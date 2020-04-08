import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConnectionManager, getConnectionManager } from 'typeorm';
import { User } from '../core/user/model/user.entity';
import env_variables from "./env_variables";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        const connectionManager: ConnectionManager = getConnectionManager();
        let options: any;

        if (connectionManager.has('default')) {
            options = connectionManager.get('default').options;
            await connectionManager.get('default').close();
        } else {
            options = {
                name: 'default',
                type: 'mysql',
                host: env_variables.MYSQL_HOST,
                username: env_variables.MYSQL_USER,
                password: env_variables.MYSQL_PASSWORD,
                database: env_variables.MYSQL_DATABASE,
                port: env_variables.MYSQL_PORT,
                //entities: [__dirname + '/../modules/*/model/**.entity{.ts,.js}'],
                entities: [User],
                synchronize: true,
                logging: false,
                extra: {
                    charset: "utf8mb4_unicode_ci"
                }

            } as TypeOrmModuleOptions;
        }
        return options;
    }
}
