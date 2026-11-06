export interface SocialLink {
  id: 'facebook' | 'instagram' | 'tiktok';
  name: string;
  /**
   * Official profile URL.
   * NOTE: The agency has not provided actual profile links yet.
   * Leave as null to render in placeholder (unclickable) mode.
   * Once real URLs are provided, simply paste the full URL string here
   * and the icons will automatically become active external links opening in a new tab.
   *
   * Example: 'https://facebook.com/aurahomehealth'
   */
  url: string | null;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    // PLACEHOLDER: Enter official Aura Home Health Facebook URL when available
    url: null,
    ariaLabel: 'Aura Home Health on Facebook (Official profile coming soon)',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    // PLACEHOLDER: Enter official Aura Home Health Instagram URL when available
    url: null,
    ariaLabel: 'Aura Home Health on Instagram (Official profile coming soon)',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    // PLACEHOLDER: Enter official Aura Home Health TikTok URL when available
    url: null,
    ariaLabel: 'Aura Home Health on TikTok (Official profile coming soon)',
  },
];
