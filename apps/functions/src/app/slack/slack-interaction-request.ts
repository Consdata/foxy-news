export interface SlackInteractionRequest {
    type: 'shortcut' | 'view_submission' | 'block_actions' | string;
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
    callback_id: string;
    trigger_id: string;
}
