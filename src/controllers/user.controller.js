import User from "../models/User.js";
import crypto from "node:crypto";

export const userRegister = async (req, res) => {
  try {
    const crateUser = {
      id: crypto.randomUUID(),
      ...req.body,
    };

    const newUser = await User.create(crateUser);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const userLogin = (req, res) => {
  res.status(200).send("user logged in");
};

export const userLogout = (req, res) => {
  res.status(200).send("user logged out");
};

export const userDelete = (req, res) => {
  res.status(200).send("user deleted");
};

export const userUpdate = (req, res) => {
  res.status(200).send("user updated");
};

export const userGet = (req, res) => {
  res.status(200).send("user found");
};

export const userGetAll = (req, res) => {
  res.status(200).send("users found");
};
