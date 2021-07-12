import mongoose from 'mongoose';
import { expect } from 'chai';
import config from '../../config/config';
import userService from '../../api/user/user.service';

describe('User score service', () => {
  before(async () => {
    await mongoose.connect(config.mongo.uri, config.mongo.options.db);
  });

  it('should return an array of users', async () => {
    const users = await userService().getUsers();

    expect(users).to.be.an('array');
  });

  after(async () => {
    await mongoose.disconnect();
  });
});
