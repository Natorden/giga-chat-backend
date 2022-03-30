import { Inject, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Model } from 'mongoose';
import { Profile } from './entities/profile.entity';
import { UserMatchDto } from '../matches/dto/user.match.dto';

@Injectable()
export class ProfilesService {
  constructor(@Inject('PROFILE_MODEL') private profileModel: Model<Profile>) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdProfile = new this.profileModel(createProfileDto);
    return createdProfile.save();
  }

  findByProperty(gender: string): Promise<Profile[]> {
    return this.profileModel
      .find({
        gender: gender,
      })
      .exec();
  }

  findAll() {
    return this.profileModel.find().exec();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addUserMatch(userMatch: UserMatchDto) {}
}
