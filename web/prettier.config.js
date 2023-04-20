/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  printWidth: 1000,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  importOrder: ['^@/styles/(.*)$', '', '^(react/(.*)$)|^(react$)', '^(next/(.*)$)|^(next$)', '<THIRD_PARTY_MODULES>', '', '^types$', '^@/types/(.*)$', '^@/config/(.*)$', '^@/lib/(.*)$', '^@/components/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};
