const createError = require("http-errors");
const express = require("express");
const device = require("express-device");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const interactionController = require("./routes/interactionController");
const loginController = require("./routes/loginController");

const db = require("./config/mongodb_chatbotdb_connection.js");

session = require("express-session");
let mongoDBStore = require("connect-mongodb-session")(session);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(device.capture());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "modules")));

//Used to create Cookies
var sess = {
  secret: "This ia a secret",
  cookie: {},
  resave: true,
  saveUninitialized: true,
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

app.use(session(sess));

app.use("/", indexRouter);
app.use("/", interactionController);
app.use("/", loginController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
