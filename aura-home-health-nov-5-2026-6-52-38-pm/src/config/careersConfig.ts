/**
 * Aura Home Health - Careers Form Configuration
 *
 * Secure Form Submission Integration:
 * - When an external form service (such as Formspree, FormKeep, Basin, or a private webhook)
 *   is configured via the VITE_CAREERS_FORM_ENDPOINT environment variable, submissions are securely
 *   POSTed to that endpoint using JSON.
 * - While in the unconfigured state (the default), the form clearly labels this status,
 *   provides administrative setup guidance, and falls back to opening the applicant's default
 *   email client pre-addressed to the agency's official recruitment address with all structured details.
 */

export const CAREERS_FORM_CONFIG = {
  // Official recruitment email address for Aura Home Health
  recipientEmail: 'aurahhfl@gmail.com',
  agencyPhone: '(727) 329-7098',

  // Submission gateway endpoint from environment variable.
  // Leave empty or undefined until a live backend endpoint/form gateway is connected.
  submissionEndpoint: (import.meta.env.VITE_CAREERS_FORM_ENDPOINT as string) || '',

  // Returns true if a live backend submission endpoint has been provided
  isConfigured: Boolean(
    import.meta.env.VITE_CAREERS_FORM_ENDPOINT &&
    import.meta.env.VITE_CAREERS_FORM_ENDPOINT.trim() !== ''
  ),
};
