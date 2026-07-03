import { useState, useEffect, useCallback } from 'react';
import { useContact } from '../utils/ContactContext';
import './LockedCaseStudy.css';

// Decrypts an AES-GCM encrypted case-study JSON (see scripts/encrypt-case-study.mjs).
// The plaintext never ships in the bundle — only the ciphertext in public/data/.

const b64ToBytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

const decryptContent = async (encPath, password) => {
  const res = await fetch(encPath);
  if (!res.ok) throw new Error('fetch failed');
  const file = await res.json();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: b64ToBytes(file.salt), iterations: file.iterations, hash: 'SHA-256' },
    keyMaterial, { name: 'AES-GCM', length: 256 }, false, ['decrypt']
  );
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: b64ToBytes(file.iv) }, key, b64ToBytes(file.data)
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
};

const Section = ({ section }) => (
  <div className="project-section">
    <h2>{section.title}</h2>
    {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
    {section.bullets && (
      <ul className="feature-list">
        {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
    {section.subsections?.map((sub, i) => (
      <div key={i}>
        <h3>{sub.title}</h3>
        {sub.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
        {sub.bullets && (
          <ul className="feature-list">
            {sub.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const LockedCaseStudy = ({ encPath, storageKey }) => {
  const { openContact } = useContact();
  const [content, setContent] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const tryUnlock = useCallback(async (pw, { remember }) => {
    setBusy(true);
    try {
      const data = await decryptContent(encPath, pw);
      setContent(data);
      setError(false);
      if (remember) localStorage.setItem(storageKey, pw);
    } catch {
      if (remember) {
        setError(true);
        setPassword('');
        setTimeout(() => setError(false), 500);
      } else {
        localStorage.removeItem(storageKey);
      }
    } finally {
      setBusy(false);
    }
  }, [encPath, storageKey]);

  // Silently retry a previously accepted password
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) tryUnlock(stored, { remember: false });
  }, [storageKey, tryUnlock]);

  if (content) {
    return (
      <>
        {content.intro && (
          <div className="project-section">
            <h2>The System</h2>
            <p>{content.intro}</p>
          </div>
        )}
        {content.sections.map((section, i) => <Section key={i} section={section} />)}
      </>
    );
  }

  return (
    <div className="project-section locked-section">
      <div className="locked-label label">[ 401 · access restricted ]</div>
      <h2>Full case study — locked</h2>
      <p className="locked-subtitle">
        This section contains detail on current employer work, so it stays behind a
        password — available on request,{' '}
        <a href="#contact" onClick={(e) => { e.preventDefault(); openContact(); }}>get in touch</a>.
      </p>
      <form
        className={`locked-form ${error ? 'shake' : ''}`}
        onSubmit={(e) => {
          e.preventDefault();
          if (password) tryUnlock(password, { remember: true });
        }}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
          className={`locked-input ${error ? 'error' : ''}`}
          aria-label="Case study password"
        />
        <button type="submit" className="btn btn-primary" disabled={busy}>
          {busy ? 'unlocking…' : 'unlock'}
        </button>
      </form>
      {error && <div className="locked-error label">incorrect password</div>}
    </div>
  );
};

export default LockedCaseStudy;
