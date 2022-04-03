const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  req.session.user = { username: "anon", accountType: "student" };

  if (req.session.user) {
    if (req.session.user.accountType === "admin") return res.redirect("/admin");

    return res.redirect("/chatbot");
  }

  res.redirect("/login");
  return res.redirect("/chatbot");
});

router.get("/login", (req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  if (req.session.user) return res.redirect("/");

  if (req.query.err === "Login Failed")
    return res.render("login", { err: req.query.err });

  res.render("login", { err: undefined });
  return;
});

router.get("/chatbot", (req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  if (!req.session.user) return res.redirect("/");

  if (req.session.user.accountType === "admin") return res.render("adminIndex");

  res.render("index");
  return;
});

router.get("/admin", (req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  if (!req.session.user || req.session.user.accountType != "admin")
    return res.redirect("/");

  res.render("adminIndex");
  return;
});

module.exports = router;
