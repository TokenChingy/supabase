const sidebars = {
  guides: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: true,
      items: ['about', 'architecture', 'guides/examples'],
    },
    {
      type: 'category',
      label: 'Quickstarts',
      collapsed: true,
      items: [
        'guides/with-angular',
        'guides/with-expo',
        'guides/with-flutter',
        'guides/with-ionic-angular',
        'guides/with-ionic-react',
        'guides/with-ionic-vue',
        'guides/with-nextjs',
        'guides/with-nuxt-3',
        'guides/with-react',
        'guides/with-redwoodjs',
        'guides/with-solidjs',
        'guides/with-svelte',
        'guides/with-sveltekit',
        'guides/with-vue-3',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      collapsed: true,
      items: [
        'guides/cli',
        'guides/cli/local-development',
        'guides/cli/cicd-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Auth',
      collapsed: true,
      items: [
        'guides/auth',
        {
          type: 'category',
          label: 'Authentication',
          collapsed: true,
          items: [
            'guides/auth/auth-email',
            'guides/auth/auth-magic-link',
            'guides/auth/auth-apple',
            'guides/auth/auth-azure',
            'guides/auth/auth-bitbucket',
            'guides/auth/auth-discord',
            'guides/auth/auth-facebook',
            'guides/auth/auth-github',
            'guides/auth/auth-gitlab',
            'guides/auth/auth-google',
            'guides/auth/auth-keycloak',
            'guides/auth/auth-linkedin',
            'guides/auth/auth-notion',
            'guides/auth/auth-slack',
            'guides/auth/auth-spotify',
            'guides/auth/auth-twitch',
            'guides/auth/auth-twitter',
            'guides/auth/auth-workos',
            'guides/auth/auth-zoom',
            'guides/auth/auth-twilio',
            'guides/auth/auth-vonage',
            'guides/auth/auth-messagebird',
          ],
        },
        {
          type: 'category',
          label: 'Authorization',
          collapsed: true,
          items: [
            'guides/auth/row-level-security',
            'guides/auth/managing-user-data',
          ],
        },
        {
          type: 'category',
          label: 'Auth Helpers',
          collapsed: true,
          items: [
            'guides/auth/auth-helpers/index',
            'guides/auth/auth-helpers/auth-ui',
            'guides/auth/auth-helpers/nextjs',
            'guides/auth/auth-helpers/sveltekit',
          ],
        },
        {
          type: 'category',
          label: 'Deep Dive',
          collapsed: true,
          items: [
            'learn/auth-deep-dive/auth-deep-dive-jwts',
            'learn/auth-deep-dive/auth-row-level-security',
            'learn/auth-deep-dive/auth-policies',
            'learn/auth-deep-dive/auth-gotrue',
            'learn/auth-deep-dive/auth-google-oauth',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: true,
      items: ['guides/api', 'guides/api/generating-types'],
    },
    {
      type: 'category',
      label: 'Database',
      collapsed: true,
      items: [
        'guides/database',
        'guides/database/connecting-to-postgres',
        'guides/database/tables',
        'guides/database/functions',
        'guides/database/full-text-search',
        'guides/database/migrating-between-projects',
        // 'guides/database/json',
        // 'guides/database/arrays',
        // 'guides/database/sql-to-api',
        {
          type: 'category',
          label: 'Extensions',
          collapsed: true,
          items: [
            'guides/database/extensions',
            // 'guides/database/extensions/pgtap',
            'guides/database/extensions/plv8',
            'guides/database/extensions/http',
            'guides/database/extensions/uuid-ossp',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          collapsed: true,
          items: [
            'guides/database/timeouts',
            'guides/database/replication',
            'guides/database/managing-passwords',
            'guides/database/managing-timezones',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Functions',
      collapsed: true,
      items: ['guides/functions'],
    },
    {
      type: 'category',
      label: 'Realtime',
      collapsed: true,
      items: [
        'guides/realtime',
        'guides/realtime/broadcast',
        'guides/realtime/presence',
        'guides/realtime/postgres-changes',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      collapsed: true,
      items: ['guides/storage', 'guides/storage-cdn'],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: true,
      items: [
        'guides/hosting/platform',
        'guides/platform/disk-usage',
        'guides/platform/logs',
        'guides/platform/metrics',
        'guides/platform/performance',
        'guides/platform/permissions',
        'going-into-prod',
      ],
    },
    {
      type: 'category',
      label: 'Self Hosting',
      collapsed: true,
      items: ['guides/hosting/overview', 'guides/hosting/docker'],
    },
    {
      type: 'category',
      label: 'Migrate to Supabase',
      collapsed: true,
      items: [
        'guides/migrations/firebase-auth',
        'guides/migrations/firestore-data',
        'guides/migrations/firebase-storage',
        'guides/migrations/heroku',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'guides/integrations/appsmith',
        'guides/integrations/auth0',
        'guides/integrations/authsignal',
        'guides/integrations/clerk',
        'guides/integrations/dashibase',
        'guides/integrations/directus',
        'guides/integrations/draftbit',
        'guides/integrations/pgmustard',
        'guides/integrations/plasmic',
        'guides/integrations/prisma',
        'guides/integrations/sequin',
        'guides/integrations/snaplet',
        'guides/integrations/stytch',
        'guides/integrations/supertokens',
        'guides/integrations/vercel',
      ],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Official',
      // link: { type: 'doc', id: 'reference' },
      collapsed: false,
      items: [
        { type: 'doc', id: 'reference' },
        {
          type: 'link',
          label: 'Supabase JavaScript Library',
          href: '/reference/javascript/',
        },
        {
          type: 'link',
          label: 'Supabase Dart Library',
          href: '/reference/dart',
        },
        { type: 'link', label: 'Supabase CLI', href: '/reference/cli' },
        { type: 'link', label: 'Supabase API', href: '/reference/api' },
      ],
    },
    {
      type: 'category',
      label: 'Community',
      // link: { type: 'doc', id: 'about' },
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Supabase Auth Helpers',
          href: '/reference/auth-helpers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Self-hosting',
      collapsed: false,
      items: [
        { type: 'link', label: 'Auth Server', href: '/reference/auth' },
        { type: 'link', label: 'Storage Server', href: '/reference/storage' },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Postgres Extensions',
    //   link: { type: 'doc', id: 'postgres/extensions/intro' },
    //   collapsed: true,
    //   items: [
    //     'postgres/extensions/http',
    //     'postgres/extensions/pgtap',
    //     'postgres/extensions/plv8',
    //     'postgres/extensions/uuid-ossp',
    //   ],
    // },
  ],
}

module.exports = sidebars