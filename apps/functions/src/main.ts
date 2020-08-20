import {PubSub} from '@google-cloud/pubsub';
import * as firebase from 'firebase-admin';
import * as functions from 'firebase-functions';
import {FunctionBuilder} from 'firebase-functions';
import {chatbotHandler} from './app/chatbot.handler';
import {addLinkHandler} from './app/add-link.handler';

firebase.initializeApp();

const region = functions.region('europe-west3');
const functionBuilder: () => FunctionBuilder = () => region
  .runWith({
    maxInstances: 5,
    memory: '256MB'
  });

export const addLink = addLinkHandler(functionBuilder(), functions.config(), firebase);
export const chatbot = chatbotHandler(functionBuilder().runWith({memory: '512MB'}), functions.config(), new PubSub());
