module.exports = {
  name: 'auth-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
