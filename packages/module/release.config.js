module.exports = {
  branches: [
    'do-not-delete',
    { name: '2.0.x', channel: 'prerelease-bugfix' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: '*',
            release: 'patch'
          }
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm'
  ],
  tagFormat: 'patch-v${version}',
  dryRun: true
};
