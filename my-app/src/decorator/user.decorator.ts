import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    /**
     * requestオブジェクトからuse情報を取得
     * dataが存在する場合dataを返却する。ない場合undefindを返却する
     *
     */
    const user = request.user;
    return data ? user?.data : user;
  },
);
