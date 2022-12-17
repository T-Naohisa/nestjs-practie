import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimeService {
  /**
   * アニメ情報を取得してアニメーションドメインを生成して返却をする
   * @returns
   */
  getAnimetionInfo() {
    return 'animetion info';
  }
}
