module.exports = {
  name: 'shared-lib-parent',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/lib-parent',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
