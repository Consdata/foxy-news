module.exports = {
  name: 'foxy-news-newsletter-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/foxy-news/newsletter/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
