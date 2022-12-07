import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * middleware
 * ルートハンドラの前に呼び出される関数
 *
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: NextFunction) {
    console.log('');
    next();
  }
}
