import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CSCC',
      social: {
        github: 'https://github.com/Chisholm-Student-Creative-Collective',
        discord: 'https://discord.gg/PWSA95E',
      },
      sidebar: [
        {
          label: 'Onboarding',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Become a Collective Member', link: '/onboarding/join/' },
            { label: 'Code of Conduct', link: '/onboarding/coc/' },
          ],
        },
        {
          label: 'Our Projects',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Dorian\'s Scrapbook Theatre', link: '/projects/test' },
          ],
        },
      ],
      customCss: ['/src/master.css'],
    }),
  ],
});
