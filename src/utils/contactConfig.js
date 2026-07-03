// Form relay endpoint. Sign up at https://formspree.io (free tier), create a
// form, and paste its endpoint here. Formspree forwards submissions to your
// inbox — the email address itself never ships in the site's code or bundle.
export const FORM_ENDPOINT = 'https://formspree.io/f/mzdlknwb';

export const isFormConfigured = () => !FORM_ENDPOINT.includes('YOUR_FORM_ID');

// Fallback contact shown while the form endpoint is not configured
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tylerhagan/';
