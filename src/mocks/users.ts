import { faker } from '@faker-js/faker';
import { UserType } from '../types/user';

export const mockUsers: UserType[] = [{
  id: faker.number.int(),
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  address: {
    street: faker.location.street(),
    suite: faker.location.buildingNumber(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    geo: {
      lat: (faker.location.latitude()).toString(),
      lng: (faker.location.longitude()).toString(),
    }
  },
  phone: (Number(faker.phone)).toString(),
  website: faker.internet.domainName(),
  company: {
    name: faker.company.name(),
    catchPhrase: faker.person.bio(),
    bs: faker.person.jobTitle()
  }
}];
