export function newsletterModalView(callbackId: string, categories: { key: string, label: string }[]) {
    return {
        type: 'modal',
        callback_id: callbackId,
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
                        categories.map(category => ({
                            value: category.key, text: {type: 'plain_text', text: category.label, emoji: true}
                        }))
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
    };
};