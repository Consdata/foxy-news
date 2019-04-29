module.exports = {
  name: 'auth-firebase',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
