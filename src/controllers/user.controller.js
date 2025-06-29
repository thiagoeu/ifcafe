import models from "../models/index.js";
import bcrypt from "bcrypt";

import generatedAccessToken from "../utils/generateAcessToken.js";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!name || !email || !password) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "name, email, age and password are required",
      });
    }

    // Verifica se o usuário já existe
    const userExists = await models.User.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json({
        error: true,
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashedPassword,
    };

    // Cria novo usuário
    const newUser = await models.User.create(payload);

    return res.status(201).json({
      success: true,
      error: false,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      success: false,
      message: "Internal server error",
      detail: error.message,
    });
  }
};

export const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "email and password are required",
      });
    }

    const user = models.User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      success: false,
      message: "Internal server error",
      detail: error.message,
    });
  }

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
