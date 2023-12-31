import ErrorResponse from "../utils/errorResponse.js";
import Account from "../models/Account.js";
import User from "../models/User.js";
import express from "express";
import STATUS_CODE from "../constants/statusCodes.js";

// @desc    Get all Accounts
// @route   GET /api/v1/Accounts

export const getAccounts = async (req, res, next) => {
  try {
    const data = readUserFromRecord();
    const user = data.find((u) => u.id === req.params.id);

    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User was not found");
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a Account
// @route   POST /api/v1/Accounts

export const createAccount = async (req, res, next) => {
  const { username, email, passportID, password } = req.body;

  try {
    const { username, email, password, passportId } = req.body;
    if (!username || !passportID || !email || !password) {
      res.send(STATUS_CODE.BAD_REQUEST);
      throw new error(
        "All fields (!username || !passportID || !email || !password) are required"
      );
    }

    const newUser = { id: uuidv4(), username, email, password, passportId };
    users.push(data.json);
    res.status(STATUS_CODE.CREATED).send(data.json);
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST);
    next(error);
  }
};

let username = await User.findOne({ passportID });
if (!username) {
  return next(
    new ErrorResponse(`Account that  with '${passportID}' was not found`)
  );
}

if (!username || !passportID || !email || !password) {
  res.send(STATUS_CODE.BAD_REQUEST);
  throw new error(
    "All fields (!username || !passportID || !email || !password) are required"
  );
}

const users = readUserFromRecord();
if (users.find((u) => u.username === username)) {
  res.status(STATUS_CODES.CONFLICT);
  throw new error("Username is already exist");
}
if (email.find((u) => u.email === email)) {
  res.status(STATUS_CODES.CONFLICT);
  throw new error("Email is already exist");
}

// @desc    Delete a account
// @route   DELETE /api/v1/accounts/:id

export const deleteAccount = async (req, res, next) => {
  try {
    const data = readUserFromRecord();
    const newDatalist = data.filter(
      (username) => username.id !== req.params.id
    );
    if (newDatalist.length === data.length) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new Error("Username was not found");
    }
    readUserFromRecord(newDatalist);
    res
      .status(STATUS_CODE.OK)
      .send(`User with the id of ${req.params.id} was deleted!`);
  } catch (error) {
    next(error);
  }
};

// @desc    get a account
// @route   GET /api/v1/accounts/:id
export const getUserById = async (req, res, next) => {
  try {
    const data = readUserFromRecord();
    const userId = data.find((u) => u.id === req.params.id);
    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("User was not found");
    }
    res.send(userId);
  } catch (error) {
    next(error);
  }
};

// @desc    update a account cash
// @route   put /api/v1/accounts/updateBalance/:id
export const updateBalance = async (req, res, next) => {
  const userId = req.params.id;
  const { credit = 0, cash = 0 } = req.body;

  const { credit: prevCredit, cash: prevCash } = await userId.findById(userId);
  if (!prevCredit || !prevCash) {
    new ErrorResponse(`Account that ends with '${username}' was not found`);
  }
};

// DepositeToCredit/ user/:id
export const depositUserAccount = (req, res, next) => {
  try {
    const { amount } = req.body.amount;
    if (amount <= 0) {
      res.status(STATUS_CODES.BAD_REQUEST);
      throw new error("The Value must be higher than zero");
    }
    const users = readUserFromRecord();
    const userIndex = userId.findIndex((u) => u.id == req.params.id);
    if (userIndex === -1) {
      res.status(STATUS_CODES.NOT_FOUND);
      throw new error("User with id ${userId} not found");
    }
    users[userIndex] = {
      ...users[userIndex],
      cash: users[userIndex].cash + Number(amount),
    };

    writeUsersToRecord(users);
    res.send(users[userIndex]);
  } catch (error) {
    next(error);
  }
};

// update Account Balance:
// -   sender has decrement in amount of his balance
// -   receiver has increment in amount of his balance
export const userBalanceChange = (req, res, next) => {
  const { userId, amount } = req.body.amount;
  if ((userId, amount))
    try {
      users[senderUserIndex] = {
        ...users[senderUserIndex],
        credit: Number(users[senderUserIndex].credit) - Number(amount),
      };
      users[receiverUserIndex] = {
        ...users[receiverUserIndex],
        credit: Number(users[receiverUserIndex].credit) + Number(amount),
      };

      writeUsersToFile(users);
      res.status(STATUS_CODES.OK).send(users[senderUserIndex]);
    } catch (error) {
      next(error);
    }
};
