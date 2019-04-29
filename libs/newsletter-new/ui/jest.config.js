module.exports = {
  name: 'newsletter-new-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter-new/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
