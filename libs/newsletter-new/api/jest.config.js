module.exports = {
  name: 'newsletter-new-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter-new/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
