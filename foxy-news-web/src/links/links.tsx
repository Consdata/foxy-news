import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState, Link} from '../app-state/app-state';
import {LinkAdd} from '../store/link-add.action';
import {LinkEdit} from './link-edit/link-edit';
import {LinksList} from './links-list/links-list';
import {LinksNewsletter} from './links-newsletter/links-newsletter';
import styles from './links.module.scss';
import {NewsletterLinkToggled} from '../store/newsletter-link-toggled.action';

type OwnProps = {};
const stateToProps = (state: AppState) => ({
  draft: state.newsletterDraft
});
const dispatchToProps = (dispatch: Dispatch) => ({
  addLink: (link: Link) => dispatch(LinkAdd.of(link))
});

export const Links = connect(
  stateToProps,
  dispatchToProps
)(class Links extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {

    state = {
      addVisible: false
    };

    render(): React.ReactNode {
      return (
        <div>
          {this.props.draft ? (
            <div className={styles.addNewsletter}>
              <LinksNewsletter/>
            </div>
          ) : (
            <div/>
          )}
          <div className={styles.addLink}>
            {this.state.addVisible ? (
              <LinkEdit onCancel={() => this.onAddLinkCancel()} onSave={link => this.onAddLinkSave(link)}/>
            ) : (
              <div className={styles.addLinkAction} onClick={() => this.onAddLinkClicked()}>
                (dodaj link)
              </div>
            )}
          </div>
          <div className={styles.list}>
            <LinksList/>
          </div>
        </div>
      );
    }

    private onAddLinkClicked() {
      this.setState({
        addVisible: true
      });
    }

    private onAddLinkCancel() {
      this.setState({
        addVisible: false
      });
    }

    private onAddLinkSave(link: Link) {
      this.setState({
        addVisible: false
      });
      this.props.addLink(link);
    }

  }
);
