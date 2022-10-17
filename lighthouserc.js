module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/features',
        'http://localhost:3000/pricing',
        'http://localhost:3000/community',
        'http://localhost:3000/team',
        'http://localhost:3000/blog',
        'http://localhost:3000/tags/open-source',
        'http://localhost:3000/blog/the-open-source-development-platform-introducing-amplication',
      ],
      startServerCommand: 'npm run start',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
