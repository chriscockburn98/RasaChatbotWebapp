const express = require('express');
const router = express.Router();

const Rasa = require('../modules/custom_node_modules/Rasa');
const Recorder = require('../modules/custom_node_modules/Recorder');
const Responder = require('../modules/custom_node_modules/Responder');

const queryHandler = async (req, username, query) => {
  const response = await Promise.resolve(Rasa.askRasa(req, username, query))
  return response
}

router.get('/sendingQuery', (req, res) => {
	const query = req.query.query;
  const username = req.session.user.username;

  queryHandler(req, username, query)
  .then(response => {
    return res.send(response)
  })
  .catch(error => {
    console.error(error)
  })
  return 
});

router.post('/relevantFeedback', (req, res) => {
  const id = req.body.id;
  const isRelevant = req.body.isRelevant;
  
  Recorder.updateQueryAction(id, isRelevant);
})

router.get('/getMostFrequentIntents', async (req, res) => {
  return res.send(await Promise.resolve(Responder.getMostFrequentIntents()))
})

router.get('/getCurrentUsers', async (req, res) => {
  return res.send(await Promise.resolve(Responder.getCurrentUsers()))
})

router.get('/deleteAccount', async (req, res) => {
  return res.send(await Promise.resolve(Responder.deleteAccount(req.query.query)))
})

router.get('/notRelevantQueries', async (req, res) => {
  return res.send(await Promise.resolve(Responder.notRelevantQueries()))
})

router.post('/createAccount', async (req, res) => {
  await Promise.resolve(Responder.createAccount(req.body))
  return res.redirect('/')
})

module.exports = router