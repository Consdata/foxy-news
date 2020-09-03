import {ChatbotInteraction} from './chatbot-interaction';
import {ChatbotLink} from './chatbot-link';

export async function onAddLinkSubmission(pubsub: import('@google-cloud/pubsub').PubSub, interaction: ChatbotInteraction) {
    const message: ChatbotLink = {
        team: interaction.team.domain,
        user: interaction.user.username,
        field: 'tech',
        data: {
            category: interaction['view'].state.values.category.category.selected_option.value,
            summary: interaction['view'].state.values.summary.summary.value,
            link: interaction['view'].state.values.link.link.value,
            description: interaction['view'].state.values.description.description.value,
            author: interaction.user.username
        }
    };
    await pubsub.topic('pending-links').publish(Buffer.from(JSON.stringify(message)));
}
