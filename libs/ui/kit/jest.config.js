module.exports = {
  name: 'ui-kit',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/kit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
