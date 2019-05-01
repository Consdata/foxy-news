module.exports = {
  name: 'foxy-news-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/foxy-news/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
