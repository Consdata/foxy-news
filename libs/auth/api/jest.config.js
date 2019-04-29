module.exports = {
  name: 'auth-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
