export const addLinkHandler = (
    functions: import('firebase-functions').FunctionBuilder,
    config: import('firebase-functions').config.Config,
    firebase: typeof import('firebase-admin')) => {
    return functions.pubsub.topic('pending-links').onPublish(
        async (topicMessage, context) => {
        }
    );
}
