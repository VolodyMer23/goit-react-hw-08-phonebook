import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children, modalOpen}) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById('portal')
  );
}

export default Modal;
