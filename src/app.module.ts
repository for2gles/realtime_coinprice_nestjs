import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { TestModule } from './test/test.module';
import { TestResolver } from './test/tes.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/chema.gql'),
    }),
    TestModule,
  ],
  controllers: [],
  providers: [TestResolver],
})
export class AppModule {}
