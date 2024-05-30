import React from 'react';
import Toast from '../Toast'
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('')
    setVariant(VARIANT_OPTIONS[0]);

    let newToasts = [...toasts, { variant: variant, message: message, id: crypto.randomUUID() }]
    setToasts(newToasts);
  }

  function handleDismiss(id) {
    let newToasts = toasts.filter(toast => toast.id !== id)
    setToasts(newToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {<ToastShelf toasts={toasts} removeToast={handleDismiss}/>}

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                id="message"
                className={styles.messageInput}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}  />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map(variantOption => {
                return (
                <label key={variantOption} htmlFor={`variant-${variantOption}`}>
                  <input
                    id={`variant-${variantOption}`}
                    type="radio"
                    name="variant"
                    value={variantOption}
                    checked={variant === variantOption}
                    onChange={() => setVariant(variantOption)}
                  />
                  {variantOption}
                </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button onClick={() => true}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
