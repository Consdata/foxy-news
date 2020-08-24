export function linkSlackPost(title: string, description: string, link: string, category: string, date: string, author: string, votes: number = 0, userVotes: string[] = []) {
  return [
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': `:newspaper: *${title}*`
      }
    },
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': `${description}`
      }
    },
    {
      'type': 'section',
      'text': {
        'type': 'mrkdwn',
        'text': `<${link}|${link}>`
      }
    },
    {
      'type': 'actions',
      'elements': [
        {
          'type': 'button',
          'text': {
            'type': 'plain_text',
            'text': `:+1:${votes > 0 ? ' ' + votes : ''}`,
            'emoji': true
          },
          'value': 'vote'
        }
      ]
    },
    {
      'type': 'context',
      'elements': [
        {
          'type': 'mrkdwn',
          'text': `*Category*: ${category}`
        },
        {
          'type': 'mrkdwn',
          'text': `*Author*: ${author}`
        },
        ...(userVotes.length > 0 ? [{
          'type': 'mrkdwn',
          'text': `*Votes*: ${userVotes.join(', ')}`
        }] : []),
      ]
    }
  ];
}
