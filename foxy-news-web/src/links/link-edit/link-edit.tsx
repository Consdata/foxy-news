import React, {ChangeEvent} from 'react';
import {Link} from '../../app-state/app-state';
import styles from './link-edit.module.scss';

type OwnProps = {
  onCancel?: () => void,
  onSave?: (link: Link) => void
  link?: Link;
}

type State = {
  original?: Link,
  link: Link
}

export class LinkEdit extends React.Component<OwnProps, State> {

  emptyLink: () => Link = () => ({
    id: 'new',
    title: '',
    summary: '',
    tag: '',
    href: ''
  });

  constructor(props: OwnProps) {
    super(props);
    this.state = {
      original: props.link,
      link: props.link ? {...props.link} : this.emptyLink()
    }
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.line}>
            <div className={styles.label}>
              Tytuł
            </div>
            <div className={styles.control}>
              <input name={'title'} onChange={this.handleInput}/>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>
              Link
            </div>
            <div className={styles.control}>
              <input name={'href'} onChange={this.handleInput}/>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>
              Tytuł
            </div>
            <div className={styles.control}>
              <input name={'title'} onChange={this.handleInput}/>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>
              Kategoria
            </div>
            <div className={styles.control}>
              <select name={'tag'} onChange={this.handleInput}>
                <option></option>
                <option>jvm</option>
                <option>security</option>
                <option>devops</option>
                <option>misc</option>
                <option>org</option>
              </select>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>
              Opis
            </div>
            <div className={styles.control}>
            <textarea className={styles.details}
                      placeholder={'Opis'}
                      name={'summary'}
                      onChange={this.handleInput}></textarea>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.line}>
            <button onClick={() => this.props.onSave && this.props.onSave(this.state.link)}>zapisz</button>
          </div>
          <div className={styles.line}>
            <button onClick={() => this.props.onCancel && this.props.onCancel()}>anuluj</button>
          </div>
        </div>
      </div>

    );
  }

  handleInput = (event: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      link: {
        ...this.state.link,
        [name]: value
      }
    });
  };

}
