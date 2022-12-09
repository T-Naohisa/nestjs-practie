import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * 例外処理のカスタマイズ
 * 第一引数：json
 * 第二引数：httpstatus
 * をカスタムすることができる
 */
export class ForbiddenException extends HttpException {
  constructor() {
    super(
      { status: HttpStatus.FORBIDDEN, emg: 'Forbidden' },
      HttpStatus.FORBIDDEN,
    );
  }
}
