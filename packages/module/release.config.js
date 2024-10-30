module.exports = {
  branches: [
    'do-not-delete',
    { name: '2.0.x', channel: 'prerelease-bugfix', range: '2.0.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
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
          { type: 'feat', release: 'patch' },
          { type: 'fix', release: 'patch' }
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
