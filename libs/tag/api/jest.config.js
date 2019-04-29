module.exports = {
  name: 'tag-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/tag/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
