module.exports = {
  name: 'foxy-news-newsletter-new-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/foxy-news/newsletter-new/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
