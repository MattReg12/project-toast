import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  function createToast(message, variant) {
    return {
      message,
      variant,
      id: crypto.randomUUID(),
    }
  }

  function addToast(toast) {
    setToasts([...toasts, toast]);
  }

  function removeToast(id) {
    setToasts(toasts.filter(toast => toast.id !== id));
  }

  const value = {
    toasts,
    createToast,
    addToast,
    removeToast,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
