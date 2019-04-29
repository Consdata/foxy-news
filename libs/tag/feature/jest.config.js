module.exports = {
  name: 'tag-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/tag/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
