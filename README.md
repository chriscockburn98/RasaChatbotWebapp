My academic paper explaining the research involved and the logical thinking behind my design choices:
https://drive.google.com/file/d/1SoTotH9hGK99cEqkuWZHbYXirXbXrGEm/view?usp=sharing

# Rasa Chatbot Webapp
Node JS / Express.js / Rasa / EJS Chatbot webapp

This repository is a proof-based project of a cloud-based AI chatbot system. That can interact and converse instantly using conversational AI (using Rasa) & a Node.js express framework cloud architecture.

For the system to be fully functional, both servers must be ran concurrently & currently implement to be ran from the same operating system (Which can be hosted in Droplet on Digital Ocean etc.); this can be changed via changing 'localhost' to URL's hosting servers.

Context: The current context of chatbot system is for computer science students. The chatbot was initally developed to help serve students and lectures about questions students may have.

## Rasa Server

#### Prerequisite:
- Python (Anaconda)
- Rasa

#### Commands to run:
1. Open an Anaconda Terminal.
2. Navigate to the RasaServer directory (A Python Venv will be needed to be setup to access Rasa commands).
3. Command 'rasa train'.
4. Open another Anaconda Terminal.
5. Navigate to the RasaServer directory and activate the Venv.
6. Command ‘rasa run –enable-api’.

  

##### Helpful commands:
‘conda info –envs’
‘activate [#venv_name]’

  

## Node Webapp

#### Prerequisite:
- Node.js
- NPM or Yarn
- MongoDB server connected


#### Dependancies used:
- axios
- connect-mongodb-session
- cookie-parser
- debug
- ejs
- express
- express-device
- express-session
- http
- http-errors
- jquery
- mongoose
- morgan
- nodemon

#### Commands to run:
1. Command ‘npm install’ or 'yarn' (install project dependencies).
2. Command ‘npm run start’ or 'yarn start' to run the project.
3. Open a browser & navigate to ‘http://localhost:8080’.
