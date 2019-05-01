module.exports = {
  name: 'tag-firebase',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/foxy-news/tag/firebase',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
