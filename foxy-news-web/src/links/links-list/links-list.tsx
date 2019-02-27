import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../app-state/app-state';
import {LinkListItem} from './link-list-item/link-list-item';
import styles from './links-list.module.scss';


type OwnProps = {};
const stateToProps = (state: AppState) => ({
  links: Object.values(state.links)
});
const dispatchToProps = () => ({});

export const LinksList = connect(
  stateToProps,
  dispatchToProps
  )(class LinksList extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {
    render(): React.ReactNode {
      return (
        <div>
          {this.props.links.map(link => (
            <div className={styles.item} key={link.id}>
              <LinkListItem link={link}/>
            </div>
          ))}
        </div>
      );
    }
  }
  )
;
