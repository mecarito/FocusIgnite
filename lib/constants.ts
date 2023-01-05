const nextJsFolders = [
  'components',
  'constants',
  'hooks',
  'schemas',
  'store',
  'types',
  'utils',
];

const questions = [
  {
    name: 'directoryResponse',
    type: 'confirm',
    message: `Creating src directory in the root directory with: ${nextJsFolders} directories in it`,
  },
];

export { nextJsFolders, questions }
