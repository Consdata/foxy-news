module.exports = {
  name: 'shared-auth-api',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/auth/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
