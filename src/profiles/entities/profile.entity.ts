import { Document } from 'mongoose';

export class Profile extends Document {
  private readonly name: string;
  private readonly gender: string;
  private readonly age: number;
}
