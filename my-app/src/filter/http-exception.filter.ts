import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * 例外フィルタ
 * 例外レイヤーを完全に処理したい場合に使用する
 * HttpException型の例外をバインド、きゃっちするようになる
 *
 */

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();

    response.status(status);
  }
}
