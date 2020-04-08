import { Handler, Context, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { proxy } from 'aws-serverless-fastify';
import * as fastify from 'fastify';
import { bootstrap } from './app.fastify';
import { Server } from 'http';

import * as path from 'path';





const binaryMimeTypes: string[] = [];

let fastifyServer: fastify.FastifyInstance;


process.on('unhandledRejection', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

// function bootstrapServer(): Promise<Server> {
//   const expressApp = require('express')();
//   const adapter = new ExpressAdapter(expressApp);
//   return NestFactory.create(AppModule, adapter)
//     .then(app => app.enableCors())
//     .then(app => app.useGlobalPipes(new ValidationPipe()))
//     .then(app => app.init())
//     .then(() => serverless.createServer(expressApp));
// }


export const handler: Handler = async (event: any, context: Context): Promise<APIGatewayProxyResult> => {

  if (!fastifyServer) {
    fastifyServer = await bootstrap();
  }



  return await proxy(fastifyServer, event, context);
};
