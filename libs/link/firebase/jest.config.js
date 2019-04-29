module.exports = {
  name: 'link-firebase',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/link/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
