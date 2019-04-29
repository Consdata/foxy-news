module.exports = {
  name: 'link-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/link/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
