module.exports = {
  name: 'shared-firebase',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
