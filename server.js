// import express from "express";

// import morgan from "morgan";
// import users from "./routes/usersRoutes.js";
// import cors from "cors";
// import errorHandler from "./middleware/errorHandler.js";

// // import connectDB from "./config/db.js";

// // connectDB();

// const app = express();

// app.use(cors());

// // Body parser middleware
// app.use(express.json());

// if (process.env.NODE_ENV !== "production") {
//   app.use(morgan("dev"));
// }

// app.use("/api/v1/accounts", accounts);

// app.use("/api/v1/users", users);

// app.use(errorHandler);

// const PORT = process.env.PORT || 4000;

// const server = app.listen(PORT, () => {
//   console.log(
//     `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
//   );
// });

import express from "express";
import morgan from "morgan";
// import users from "./routes/usersRoutes.js";
// import accounts from "./routes/userRoutes.js";
import cors from "cors";
// import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// app.use("/api/v1/accounts", accounts);
// app.use("/api/v1/users", users);
// app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
