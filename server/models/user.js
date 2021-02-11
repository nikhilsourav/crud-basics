import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  interests: [],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const userModel = mongoose.model('users', userSchema);

export default userModel;
