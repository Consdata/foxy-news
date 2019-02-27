import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Link} from '../../../app-state/app-state';
import {LinkItem} from '../../../link-item/link-Item';
import {NewsletterLinkToggled} from '../../../store/newsletter-link-toggled.action';
import styles from './link-list-item.module.scss';

type OwnProps = {
  link: Link
};
const stateToProps = () => ({});
const dispatchToProps = (dispatch: Dispatch) => ({
  toggleLink: (id: string) => dispatch(NewsletterLinkToggled.of(id))
});

export const LinkListItem = connect(
  stateToProps,
  dispatchToProps
)(class LinkListItem extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {
  render(): React.ReactNode {
    const {link, toggleLink} = this.props;
    return (
      <div className={styles.item}>
        <div className={styles.check}>
          <input type={'checkbox'} onClick={() => toggleLink(link.id)}/>
        </div>
        <div className={styles.linkItem}>
          <LinkItem link={link}/>
          {/*or link edit*/}
        </div>
      </div>
    );
  }
});
