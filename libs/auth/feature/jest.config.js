module.exports = {
  name: 'auth-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
