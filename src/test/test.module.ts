import { Module } from '@nestjs/common';
import { TestResolver } from './tes.resolver';

@Module({
  providers: [TestResolver],
})
export class TestModule {}
