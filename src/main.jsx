import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// For the people who inspect. You always inspect.
console.log(
  '%c[ th.2026 ]%c hello, inspector.\n\n' +
  'this site is treated as a product: the cv is one data module compiled to web, ' +
  'ats-safe pdf and json-ld; locked case studies are aes-256-gcm encrypted client-side ' +
  '(only ciphertext ships; nothing to find in here, i checked); and the full spec ' +
  'sheet lives at /colophon.\n\n' +
  'source: https://github.com/tylerhagan/portfolio',
  'font-family: monospace; background: #0066ff; color: #fff; padding: 2px 6px;',
  'font-family: monospace;'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
