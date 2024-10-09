import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    const customPrismaClient = new PrismaClient().$extends(
      withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }),
    );

    Object.assign(this, customPrismaClient);
    await this.$connect();
  }
}
