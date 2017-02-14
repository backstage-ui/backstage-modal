'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  container: {
    color: '#333',
    position: 'relative',
    fontFamily: ['Open Sans', 'sans-serif'],
    fontSize: '16px'
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    zIndex: '2'
  },
  modal: {
    width: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '3',
    backgroundColor: '#fff',
    borderRadius: '4px',
    display: 'flex',
    flexFlow: 'column'
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '20px',
    letterSpacing: '-0.8px',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  close: {
    height: '24px',
    color: '#999',
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none'
  },
  closeHover: {
    color: '#333'
  },
  body: {
    padding: '2.5rem 1.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.4',
    letterSpacing: '-0.0125rem',
    overflowY: 'auto'
  },
  footer: {
    borderTop: '1px solid #ccc',
    padding: '1.5rem 1.5rem'
  }
};