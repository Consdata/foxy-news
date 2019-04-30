module.exports = {
  name: 'fxy-app-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../coverage/libs/fxy-app/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
