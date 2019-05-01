module.exports = {
  name: 'foxy-news-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/foxy-news-web/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
