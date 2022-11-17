module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/enterprise',
        'http://localhost:3000/features',
        'http://localhost:3000/pricing',
        'http://localhost:3000/community',
        'http://localhost:3000/team',
        'http://localhost:3000/blog',
        'http://localhost:3000/blog/the-open-source-development-platform-introducing-amplication',
        'http://localhost:3000/tags/open-source',
        'http://localhost:3000/about',
      ],
      startServerCommand: 'npm run start',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['warn', {minScore: 0.8}],
        'categories:best-practices': ['warn', {minScore: 0.8}],
        'categories:seo': ['warn', {minScore: 0.8}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
