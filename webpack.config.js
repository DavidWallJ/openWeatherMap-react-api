/**
 * Created by david on 5/20/17.
 */

// you are here 'installing foundation' approx 7 mins in

module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [

    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/main.jsx',
            Nav: 'app/components/nav.jsx',
            Weather: 'app/components/weather.jsx',
            WeatherForm: 'app/components/weatherForm.jsx',
            WeatherResults: 'app/components/weatherResults.jsx',
            About: 'app/components/about.jsx',
            Examples: 'app/components/examples.jsx',
            OpenWeatherMap: 'app/api/openWeatherMap.jsx'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // devtool: 'cheap-module-eval-source-map'
};


// devtool just makes the the post webpack code show in the react console
// If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.
