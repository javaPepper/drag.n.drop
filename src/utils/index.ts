import { DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { faker } from '@faker-js/faker';
import { UserType } from '../types/user';
import { PostType } from '../types/post';
import { InitialStateType } from '../redux/reducer/reducer';

const green = '#02d18c';
const pink = '#f3b4c4';


export const getItemStyle = (
  isDragging: boolean,
  DraggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
  ...DraggableStyle,
  background: isDragging ? green : pink
});

export const id = faker.number.int();

export const users: UserType[] = [{
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

export const posts: PostType[] = [{
  userId: faker.number.int(),
  id: faker.number.int(),
  title: faker.string.alpha(),
  body: faker.string.alpha()
}];

export const testInitialState: InitialStateType = {
  isClicked: false,
  id: 0,
  isClickedBackBtn: false,
  users: [],
  posts: [],
  isWelcomed: false,
  isVisible: false,
};
