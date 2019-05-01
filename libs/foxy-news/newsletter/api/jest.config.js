module.exports = {
  name: 'foxy-news-newsletter-api',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/foxy-news/newsletter/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
