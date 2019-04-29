module.exports = {
  name: 'fxy-ui-kit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fxy-ui-kit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
