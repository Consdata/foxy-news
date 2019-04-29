module.exports = {
  name: 'link-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/link/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
