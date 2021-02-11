import userModel from '../models/user.js';

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error, "data can't be fetched");
  }
};

export const postUsers = async (req, res) => {
  const userCreated = new userModel(req.body);
  try {
    await userCreated.save();
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error, "data can't be created");
  }
};
