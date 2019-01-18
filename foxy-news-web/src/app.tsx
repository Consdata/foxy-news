import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import {ProposeLink} from './propose-link/propose-link';
import {Newsletters} from './newsletters/newsletters';
import {Newsletter} from './newsletter/newsletter';
import {Links} from './links/links';
import styles from './app.module.scss';

export class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <Header/>
        </div>
        <div className={styles.proposeLink}>
          <ProposeLink/>
        </div>
        <div className={styles.body}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Newsletters}/>
              <Route path="/links" component={Links}/>
              <Route path="/:newsletter" component={Newsletter}/>
            </Switch>
          </BrowserRouter>
        </div>
        <div className={styles.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}
