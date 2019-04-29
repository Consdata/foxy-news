module.exports = {
  name: 'newsletter-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
