import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

/**
 * モジュールの参照
 *
 */

@Injectable()
export class DogService implements OnModuleInit {
  //   private service Service;
  //   constructor(private moduleRef: ModuleRef) {
  //   }

  /**
   * モジュール内のサービスを取得することができる
   */
  onModuleInit() {
    // this.service = this.moduleRef.get(Service);
  }
  create(): string {
    return 'test';
  }
}
