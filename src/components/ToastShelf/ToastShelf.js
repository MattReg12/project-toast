import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';


function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} variant={toast.variant} removeToast={removeToast}>{toast.message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
