module.exports = {
  name: 'nxdemo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nxdemo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
