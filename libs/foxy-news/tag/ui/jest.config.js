module.exports = {
  name: 'tag-ui',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/foxy-news/tag/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
