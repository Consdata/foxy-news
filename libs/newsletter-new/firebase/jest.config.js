module.exports = {
  name: 'newsletter-new-firebase',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter-new/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
