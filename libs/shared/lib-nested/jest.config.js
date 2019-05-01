module.exports = {
  name: 'shared-lib-nested',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/lib-nested',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
