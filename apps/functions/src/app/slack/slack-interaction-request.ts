export interface SlackInteractionRequest<CallbackIds> {
    type: 'shortcut' | 'view_submission' | string;
    token: string;
    action_ts: string;
    team: {
        id: string;
        domain: string;
    };
    user: {
        id: string;
        username: string;
        team_id: string;
    };
    callback_id: CallbackIds | string;
    trigger_id: string;
}