// Some typeorm can't find this entity when changing it to FriendEntity
export class Friend {
  uuid: string;
  userOneId: string;
  userTwoId: string;
}
