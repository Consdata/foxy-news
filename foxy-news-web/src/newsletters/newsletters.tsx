import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppState, Newsletter} from '../app-state/app-state';
import {NewsletterTile} from './newsletters-tile/newsletter-tile';
import styles from './newsletters.module.scss';

type OwnProps = {};
const stateToProps = (state: AppState) => ({
  newsletters: Object.values(state.newsletters)
});
const dispatchToProps = () => ({});

export const Newsletters = connect(
  stateToProps,
  dispatchToProps
)(class Newsletters extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {
    render() {
      return (
        <div className={styles.grid}>
          {
            this.props.newsletters.map(
              (newsletter: Newsletter) => (
                <div className={styles.tile} key={newsletter.id}>
                  <Link to={newsletter.id}>
                    <NewsletterTile newsletter={newsletter}/>
                  </Link>
                </div>
              )
            )
          }
        </div>
      );
    }
  }
);
