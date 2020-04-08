class EnvironmentVariables {

    public env = process.env.NODE_ENV || process.env.ENVIRONMENT || 'prod';

    get isDev(): boolean {
        return !this.isProd;
    }
    get isProd(): boolean {
        return this.env === 'production' || this.env === 'prod';
    }

    get IS_OFFLINE(): boolean {
        return process.env.IS_OFFLINE === 'true' || process.env.ENVIRONMENT === 'local';
    }

    get MYSQL_HOST(): string {
        return process.env.MYSQL_HOST || 'localhost'
    }

    get MYSQL_USER(): string {
        return process.env.MYSQL_USER || 'root'
    }

    get MYSQL_PASSWORD(): string {
        return process.env.MYSQL_PASSWORD || 'root'
    }

    get MYSQL_DATABASE(): string {
        return process.env.MYSQL_DATABASE || 'blogUser'
    }

    get MYSQL_PORT(): number {
        return parseInt(process.env.MYSQL_PORT, 10) || 3306
    }
}

export default new EnvironmentVariables();