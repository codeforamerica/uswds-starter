
module.exports = [
  /**
   * JavaScript modules. These objects follow the conventions
   * for Rollup.js module configuration.
   *
   * @reference https://rollupjs.org/configuration-options
   */
  {
    input: './src/js/index.js',
    output: [{
      file:  './dist/assets/js/default.js',
      format: 'iife',
      name: 'Default',
      sourcemap: (process.env.NODE_ENV === 'production') ? false : 'inline',
      strict: true
    }],

    /**
     * Rollup.js plugins. Use a string for pre-configured plugins.
     * Add a plugin object configuration to use a custom setting
     * instead.
     *
     * @reference https://github.com/rollup/awesome
     */
    plugins: [
      'replace',
      'nodeResolve',
      'commonJs'
    ]
  },

  /**
   * Sass/PostCSS modules. These modules will be compiled from
   * Sass then passed to PostCSS for optimization (using the
   * plugins key).
   */
  {
    input: './src/scss/_styles.scss',
    output: [{
      file: './dist/assets/css/styles.css',

      /**
       * Dart Sass compileAsync options
       *
       * @reference https://sass-lang.com/documentation/js-api/interfaces/options
       */
      options: {
        sourceMap: (process.env.NODE_ENV === 'production') ? false : true,
        loadPaths: [
          'src',
          'node_modules',
          'node_modules/@codeforamerica/uswds/src',
          'node_modules/@codeforamerica/uswds/packages',
          'node_modules/@uswds',
          'node_modules/@uswds/uswds/packages'
        ]
      }
    }],

    /**
     * PostCSS plugins. Use a string for pre-configured plugins.
     * Add a plugin object configuration to use your own settings
     * or custom plugin.
     *
     * @reference https://postcss.org/docs/postcss-plugins
     */
    plugins: [
      'autoprefixer',
      'mqpacker',
      'cssnano'
    ]
  }
];
