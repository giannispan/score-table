import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String
  },
  country: {
    type: String
  },
  avatar: {
    type: String
  },
  age: {
    type: Number
  }
});

const User = mongoose.model('User', userSchema);

export { User };
