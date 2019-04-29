module.exports = {
  name: 'newsletter-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
