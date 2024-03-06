import { faker } from '@faker-js/faker';
import { PostType } from '../types/post';

export const mockPosts: PostType[] = [{
  userId: faker.number.int(),
  id: faker.number.int(),
  title: faker.string.alpha(),
  body: faker.string.alpha()
}];
