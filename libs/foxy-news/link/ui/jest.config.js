module.exports = {
  name: 'foxy-news-link-ui',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/foxy-news/link/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
