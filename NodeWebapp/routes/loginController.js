const express = require('express');
const router = express.Router();

var session = require('express-session');

const Account = require('../modules/models/Account')

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    var account = await Account.findOne({ 'username' : username, 'password' : password  })

    if(account) {
      req.session.user = { username: account.username, accountType: account.accountType }
    }
  } catch(error) {console.error(error)}
  return res.redirect('/login?err=Login Failed');
})


router.post('/logout', (req, res) => {
	const username = req.session.user.username;
	req.session.user = null;

	console.log("Successfully logged out " + username);

	return res.redirect('/');
})



module.exports = router