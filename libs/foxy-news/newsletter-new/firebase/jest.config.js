module.exports = {
  name: 'foxy-news-newsletter-new-firebase',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/foxy-news/newsletter-new/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
