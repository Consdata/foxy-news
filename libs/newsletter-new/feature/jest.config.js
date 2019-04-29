module.exports = {
  name: 'newsletter-new-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter-new/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
