// Encrypts a case-study content JSON so it can ship in the public repo.
// The plaintext lives in the gitignored content/ folder; only the ciphertext
// (public/data/*.enc.json) is committed. Decryption happens in the browser
// via Web Crypto with a password shared out-of-band.
//
// Usage: node scripts/encrypt-case-study.mjs <input.json> <output.enc.json> <password>

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'crypto';

const [input, output, password] = process.argv.slice(2);
if (!input || !output || !password) {
  console.error('Usage: node scripts/encrypt-case-study.mjs <input.json> <output.enc.json> <password>');
  process.exit(1);
}

const ITERATIONS = 200000;
const plaintext = JSON.stringify(JSON.parse(readFileSync(input, 'utf8')));

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
// Web Crypto's AES-GCM expects ciphertext with the auth tag appended
const data = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final(), cipher.getAuthTag()]);

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify({
  v: 1,
  kdf: 'PBKDF2-SHA256',
  iterations: ITERATIONS,
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  data: data.toString('base64')
}));

console.log(`Encrypted ${input} -> ${output} (${data.length} bytes)`);
