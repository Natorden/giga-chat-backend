// Some typeorm can't find this entity when changing it to UserEntity
export class User {
  uuid: string;
  username: string;
  email: string;
  password: string;
}
