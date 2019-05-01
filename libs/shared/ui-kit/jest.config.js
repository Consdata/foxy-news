module.exports = {
  name: 'shared-ui-kit',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-kit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
