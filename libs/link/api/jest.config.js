module.exports = {
  name: 'link-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/link/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
