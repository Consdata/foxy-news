import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './app.module.scss';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import {Links} from './links/links';
import {Newsletter} from './newsletter/newsletter';
import {Newsletters} from './newsletters/newsletters';
import {ProposeLink} from './propose-link/propose-link';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <div className={styles.header}>
            <Header/>
          </div>
          <div className={styles.proposeLink}>
            <ProposeLink/>
          </div>
          <div className={styles.body}>
            <Switch>
              <Route path="/" exact component={Newsletters}/>
              <Route path="/links" component={Links}/>
              <Route path="/:newsletter" component={Newsletter}/>
            </Switch>
          </div>
          <div className={styles.footer}>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
