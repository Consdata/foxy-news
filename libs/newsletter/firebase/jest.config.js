module.exports = {
  name: 'newsletter-firebase',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/newsletter/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
