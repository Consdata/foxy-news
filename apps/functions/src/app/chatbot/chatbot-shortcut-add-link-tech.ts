import * as nodeFetch from 'node-fetch';
import {ChatbotInteraction} from './chatbot-interaction';

export async function onShortcutAddLinkTech(slackHttpHeaders: any, interactionRequest: ChatbotInteraction) {
    await nodeFetch(`https://slack.com/api/views.open`, {
        method: 'POST',
        headers: slackHttpHeaders,
        body: JSON.stringify({
            trigger_id: interactionRequest.trigger_id,
            view: {
                type: 'modal',
                callback_id: 'addLink_tech',
                title: {type: 'plain_text', text: 'Add newsletter link', emoji: true},
                submit: {type: 'plain_text', text: 'Submit', emoji: true},
                close: {type: 'plain_text', text: 'Cancel', emoji: true},
                blocks: [
                    {
                        type: 'input',
                        block_id: 'category',
                        element: {
                            type: 'static_select',
                            action_id: 'category',
                            placeholder: {type: 'plain_text', text: 'Choose category', emoji: true},
                            options: [
                                {
                                    text: {
                                        type: 'plain_text',
                                        text: 'frontend',
                                        emoji: true
                                    },
                                    value: 'frontend'
                                },
                                {
                                    text: {
                                        type: 'plain_text',
                                        text: 'devops',
                                        emoji: true
                                    },
                                    value: 'devops'
                                },
                                {
                                    text: {
                                        type: 'plain_text',
                                        text: 'misc',
                                        emoji: true
                                    },
                                    value: 'misc'
                                }
                            ]
                        },
                        label: {
                            type: 'plain_text',
                            text: 'Category',
                            emoji: true
                        }
                    },
                    {
                        type: 'input',
                        block_id: 'summary',
                        element: {
                            type: 'plain_text_input',
                            action_id: 'summary'
                        },
                        label: {
                            type: 'plain_text',
                            text: 'Summary',
                            emoji: true
                        }
                    },
                    {
                        type: 'input',
                        block_id: 'link',
                        element: {
                            type: 'plain_text_input',
                            action_id: 'link'
                        },
                        label: {
                            type: 'plain_text',
                            text: 'Link',
                            emoji: true
                        }
                    },
                    {
                        type: 'input',
                        block_id: 'description',
                        element: {
                            type: 'plain_text_input',
                            action_id: 'description',
                            multiline: true
                        },
                        label: {
                            type: 'plain_text',
                            text: 'Description',
                            emoji: true
                        }
                    }
                ]
            }
        })
    })
}
