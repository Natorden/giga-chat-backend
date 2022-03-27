import * as mongoose from 'mongoose';

export const MongoDbProvider = [
  {
    provide: 'MONGO_DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  },
];
