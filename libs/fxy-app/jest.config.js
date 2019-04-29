module.exports = {
  name: 'fxy-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fxy-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
