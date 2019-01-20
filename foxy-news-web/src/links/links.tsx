import React from 'react';
import {LinksAdd} from './links-add/links-add';
import {LinksList} from './links-list/links-list';
import {LinksNewsletter} from './links-newsletter/links-newsletter';
import styles from './links.module.scss';

type LinksState = {
  addVisible: boolean
};

export class Links extends React.Component<{}, LinksState> {

  constructor(props: any) {
    super(props);
    this.state = {
      addVisible: false
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        {/*if any link selected show create newsletter section*/}
        <div className={styles.addNewsletter}>
          <LinksNewsletter/>
        </div>
        <div className={styles.addLink}>
          {this.state.addVisible ? (
            <LinksAdd onCancel={() => this.onAddLinkCanceled()}/>
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

  private onAddLinkCanceled() {
    this.setState({
      addVisible: false
    });
  }

}
