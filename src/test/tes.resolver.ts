import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => Boolean) isTest() {
    return true;
  }
}
