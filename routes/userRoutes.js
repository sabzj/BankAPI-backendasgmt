import express from "express";

import {
  getAccounts,
  getUsers,
  createAccount,
  getUser,
  deleteAccount,
  updateBalance,
  getUserById,
} from "../controllers/accountControler.js";

const router = express.Router({ mergeParams: true });

router.route("/").get(getUsers).post(createAccount);

router.route("/").get(getUsers).put(updateBalance);

router.route("/getUserById").get(getUserById);

router.route("/getAccounts").get(getAccounts);

router.route("/:id").get(getUser).delete(deleteAccount);

export default router;
