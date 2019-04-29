module.exports = {
  name: 'fxy-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fxy-web/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
