import {PendingLink} from './chatbot/pending-link';

export const addLinkHandler = (
    functions: import('firebase-functions').FunctionBuilder,
    config: import('firebase-functions').config.Config,
    firebase: typeof import('firebase-admin')) => {
    return functions.pubsub.topic('pending-links').onPublish(
        async (topicMessage, context) => {
            const link: PendingLink = JSON.parse(Buffer.from(topicMessage.data, 'base64').toString());
            const firestore = firebase.firestore();
            const linkCollection = firestore.collection(`team/${link.team}/field/${link.field}/link`);
            await linkCollection.add(link);
        }
    );
}
