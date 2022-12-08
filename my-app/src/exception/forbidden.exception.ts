import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * 例外処理のカスタマイズ
 *
 */
export class ForbiddenException extends HttpException {
  constructor() {
    super(
      { status: HttpStatus.FORBIDDEN, emg: 'Forbidden' },
      HttpStatus.FORBIDDEN,
    );
  }
}
