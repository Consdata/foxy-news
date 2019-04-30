module.exports = {
  name: 'fxy-app-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fxy-app/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
