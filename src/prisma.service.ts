import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';
import * as util from 'util';

export const customPrismaClient = new PrismaClient()
  .$extends({
    query: {
      $allModels: {
        async $allOperations({ operation, model, args, query }) {
          const start = performance.now();
          const result = await query(args);
          const end = performance.now();
          const time = end - start;
          console.log(
            util.inspect(
              { model, operation, args, time },
              { showHidden: false, depth: null, colors: true },
            ),
          );
          return result;
        },
      },
    },
  })
  .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }));

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Note: this is optional
    Object.assign(this, customPrismaClient);
    await this.$connect();
  }
}
