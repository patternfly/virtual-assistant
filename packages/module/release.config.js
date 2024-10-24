module.exports = {
  branches: [ 'do-not-delete', { name: 'v5', channel: 'prerelease-v1', range: '1.x' } ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm'
  ],
  tagFormat: 'prerelease-v${version}',
  dryRun: true
};
