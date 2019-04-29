module.exports = {
  name: 'newsletter-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
