module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', () => 'tsc -p tsconfig.json --noEmit'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
