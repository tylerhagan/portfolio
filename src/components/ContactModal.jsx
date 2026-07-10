import { useState, useEffect, useRef } from 'react';
import { useContact } from '../utils/ContactContext';
import { FORM_ENDPOINT, isFormConfigured, LINKEDIN_URL } from '../utils/contactConfig';
import './ContactModal.css';

const ContactModal = () => {
  const { isOpen, closeContact } = useContact();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' });
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Escape to close, lock body scroll, focus the first field
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeContact();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [isOpen, closeContact]);

  if (!isOpen) return null;

  const setField = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: bots fill the hidden field — pretend success, send nothing
    if (values.company) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
        })
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    closeContact();
    if (status === 'sent') {
      setStatus('idle');
      setValues({ name: '', email: '', message: '', company: '' });
    }
  };

  return (
    <div className="contact-overlay" onClick={handleClose}>
      <div
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-head">
          <span className="label contact-path">/contact</span>
          <button className="contact-close" onClick={handleClose} aria-label="Close contact form">
            esc ✕
          </button>
        </div>

        {status === 'sent' ? (
          <div className="contact-sent">
            <div className="label contact-sent-code">[ 200 · message sent ]</div>
            <h2 id="contact-title">Thanks for reaching out.</h2>
            <p>Your message is on its way, I'll get back to you soon.</p>
            <button className="btn btn-secondary" onClick={handleClose}>close</button>
          </div>
        ) : !isFormConfigured() ? (
          <div className="contact-sent">
            <h2 id="contact-title">Let's talk</h2>
            <p>
              The contact form is briefly offline, reach me on{' '}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
              instead.
            </p>
            <button className="btn btn-secondary" onClick={handleClose}>close</button>
          </div>
        ) : (
          <>
            <h2 id="contact-title">Let's talk</h2>
            <p className="contact-sub">
              Roles, collaborations, or just design conversation: all welcome.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <label className="contact-field">
                <span className="label">name</span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={values.name}
                  onChange={setField('name')}
                  maxLength={100}
                  autoComplete="name"
                />
              </label>
              <label className="contact-field">
                <span className="label">email *</span>
                <input
                  type="email"
                  required
                  value={values.email}
                  onChange={setField('email')}
                  maxLength={200}
                  autoComplete="email"
                />
              </label>
              <label className="contact-field">
                <span className="label">message *</span>
                <textarea
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  value={values.message}
                  onChange={setField('message')}
                />
              </label>
              {/* Honeypot — hidden from humans, tempting to bots */}
              <label className="contact-hp" aria-hidden="true">
                company
                <input type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={setField('company')} />
              </label>

              {status === 'error' && (
                <div className="contact-error label">
                  [ 500 · send failed ] please try again, or find me on{' '}
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'sending…' : 'send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
