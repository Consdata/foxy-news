import {PubSub} from '@google-cloud/pubsub';
import * as firebase from 'firebase-admin';
import * as functions from 'firebase-functions';
import {FunctionBuilder} from 'firebase-functions';
import {addLinkHandler} from './app/add-link.handler';
import {chatbotHandler} from './app/chatbot.handler';
import {sendLinkToChannelHandler} from './app/send-link-to-channel.handler';
import {storeUserVoteHandler} from './app/store-user-vote.handler';
import {updateChannelOnLinkChangeHandler} from './app/update-channel-on-link-change.handler';

firebase.initializeApp();

const region = functions.region('europe-west3');
const functionBuilder: () => FunctionBuilder = () => region
    .runWith({
        maxInstances: 5,
        memory: '256MB',
        timeoutSeconds: 10
    });

export const addLink = addLinkHandler(functionBuilder(), functions.config(), firebase);
export const chatbot = chatbotHandler(functionBuilder().runWith({memory: '512MB'}), functions.config(), new PubSub());
export const sendLinkToChannel = sendLinkToChannelHandler(functionBuilder(), functions.config());
export const storeUserVote = storeUserVoteHandler(functionBuilder(), functions.config(), firebase);
export const updateChannelOnLinkChange = updateChannelOnLinkChangeHandler(functionBuilder(), functions.config());