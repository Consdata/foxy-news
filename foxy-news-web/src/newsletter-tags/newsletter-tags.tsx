import React from 'react';
import {CounterBadge} from '../counter-badge/counter-badge';
import styles from './newsletter-tags.module.scss'

type Props = {
  tags: string[];
};

export class NewsletterTags extends React.Component<Props> {
  render() {
    const tags = this.groupTags(this.props.tags);
    return (
      <div className={styles.tags}>
        {Object.keys(tags).map(tag => (
          <div className={styles.badge} key={tag}>
            <CounterBadge label={tag} counter={tags[tag]}/>
          </div>
        ))}
      </div>
    );
  }

  private groupTags(tags: string[]) {
    return tags.reduce(
      (group, tag: string) => ({
        ...group,
        [tag]: (group[tag] || 0) + 1
      }),
      {} as { [key: string]: number }
    );
  }

}
