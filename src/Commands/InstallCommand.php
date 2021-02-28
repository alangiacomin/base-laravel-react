<?php

namespace AG\LaravelReact\Commands;

use Illuminate\Filesystem\Filesystem;

class InstallCommand extends BaseCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'laravelreact:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the Laravel React package';

    /**
     * Execute the console command.
     *
     * @param \Illuminate\Filesystem\Filesystem $filesystem
     *
     * @return void
     */
    public function handle(Filesystem $filesystem)
    {
        $this->handleSanctum($filesystem);
        $this->handleVoyager($filesystem);
        $this->handleLaravelReact($filesystem);
    }

    public function handleSanctum(Filesystem $filesystem)
    {
        $this->info('Publishing the Laravel/Sanctum assets, database, and config files');
        $this->call('vendor:publish', ['--provider' => "Laravel\Sanctum\SanctumServiceProvider"]);

        $this->info('Migrating the database tables into your application');
        $this->call('migrate');
    }

    public function handleVoyager(Filesystem $filesystem)
    {
        $stubsPath = dirname(__DIR__, 2) . '/stubs';

        $this->call('voyager:install');

        $this->info('Adding Voyager usings');
        $routes_contents = $filesystem->get(base_path('routes/web.php'));
        if (false === strpos($routes_contents, 'use TCG\Voyager\Facades\Voyager;')) {
            $routes_contents = str_replace(
                'use Illuminate\Support\Facades\Route;',
                "use Illuminate\Support\Facades\Route;\nuse TCG\Voyager\Facades\Voyager;",
                $routes_contents
            );
            $filesystem->put(base_path('routes/web.php'), $routes_contents);
        }
        $this->fileReplaceContent(
            $filesystem,
            base_path('app/Models/User.php'),
            "\n}\n",
            "\n" . $filesystem->get($stubsPath . '/Models/User_fullData.php') . "}\n",
            'function fullData()'
        );
    }

    public function handleLaravelReact(Filesystem $filesystem)
    {
        $this->info('Publishing the Laravel React assets, database, and config files');

        $filesystem->deleteDirectory(base_path('resources/js'), true);

        $this->vendorPublish(['controllers', 'resources']);
        $this->vendorPublishForce(['mix']);

        $this->info('Adding LaravelReact routes to routes/web.php');
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'Route::get(\'/\'',
            'Route::get(\'/dummy\''
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'use Illuminate\Support\Facades\Route;',
            "use Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\HomeController;",
            'use App\Http\Controllers\HomeController;'
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('routes/web.php'),
            'use Illuminate\Support\Facades\Route;',
            "use Illuminate\Support\Facades\Route;\nuse App\Http\Controllers\UserController;",
            'use App\Http\Controllers\UserController;'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "\nRoute::get('/user', [UserController::class, 'user']);\n",
            "Route::get('/user'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "Route::post('/login', [UserController::class, 'postLogin']);\n",
            "Route::post('/login'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "Route::post('/logout', [UserController::class, 'logout']);\n",
            "Route::post('/logout'"
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('routes/web.php'),
            "\nRoute::get('/{any}', [HomeController::class, 'index'])->where('any', '.*')->name('home');\n",
            'Route::get(\'/{any}\''
        );

        $this->info('Adding .env variables');
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\n# must always begin and end with slash\nAPP_BASENAME=/\nMIX_APP_BASENAME=\"\${APP_BASENAME}\"\n",
            'APP_BASENAME'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\nMIX_APP_NAME=\"\${APP_NAME}\"\n",
            'MIX_APP_NAME'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('.env'),
            "\nMIX_APP_URL=\"\${APP_URL}\"\n",
            'MIX_APP_URL'
        );

        $this->info('Append .gitignore entries');
        $this->fileAppendContent(
            $filesystem,
            base_path('.gitignore'),
            "/public/**/\n",
            '/public/**/'
        );
        $this->fileAppendContent(
            $filesystem,
            base_path('.gitignore'),
            "/public/mix-manifest.json\n",
            '/public/mix-manifest.json'
        );

        $this->info('Adding package.json scripts');
        $this->fileReplaceContent(
            $filesystem,
            base_path('package.json'),
            '"scripts": {',
            '"scripts": {' . "\n" . '        "lint:watch": "esw --watch --color --ext .jsx resources/js/**/*.js resources/js/**/*.jsx",',
            '"lint:watch": "esw --watch --color --ext .jsx resources/js/**/*.js resources/js/**/*.jsx"'
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('package.json'),
            '"scripts": {',
            '"scripts": {' . "\n" . '        "lint": "eslint --ext .jsx resources/js/**/*.js resources/js/**/*.jsx",',
            '"lint": "eslint --ext .jsx resources/js/**/*.js resources/js/**/*.jsx"'
        );
        $this->fileReplaceContent(
            $filesystem,
            base_path('package.json'),
            '"scripts": {',
            '"scripts": {' . "\n" . '        "start": "npm run watch",',
            '"start": "npm run watch"'
        );

        $this->info('Adding package.json dependencies');
        $this->addNpmDependencies($filesystem, [
            '@alangiacomin/js-utils' => '^1.1.0',
            '@fortawesome/fontawesome-svg-core' => '^1.2.32',
            '@fortawesome/free-brands-svg-icons' => '^5.15.1',
            '@fortawesome/free-solid-svg-icons' => '^5.15.1',
            '@fortawesome/react-fontawesome' => '^0.1.14',
            '@reduxjs/toolkit' => '^1.5.0',
            'axios' => '^0.21',
            'babel-eslint' => '^10.1.0',
            'bootstrap' => '^4.5.3',
            'connected-react-router' => '^6.8.0',
            'core-js' => '^3.8.1',
            'eslint' => '^7.18.0',
            'eslint-config-airbnb' => '^18.2.1',
            'eslint-config-react-app' => '^6.0.0',
            'eslint-plugin-babel' => '^5.3.1',
            'eslint-plugin-dependencies' => '^2.4.0',
            'eslint-plugin-flowtype' => '^5.2.0',
            'eslint-plugin-import' => '^2.22.1',
            'eslint-plugin-jsx-a11y' => '^6.4.1',
            'eslint-plugin-react' => '^7.22.0',
            'eslint-plugin-react-hooks' => '^4.2.0',
            'eslint-watch' => '^7.0.0',
            'formik' => '^2.2.6',
            'history' => '^4.10',
            'i18next' => '^19.8.4',
            'i18next-browser-languagedetector' => '^6.0.1',
            'i18next-http-backend' => '^1.0.21',
            'import-glob-loader' => '^1.1.0',
            'prop-types' => '15.7.2',
            'react' => '^16.0',
            'react-bootstrap' => '^1.4.0',
            'react-dom' => '^16.0',
            'react-i18next' => '^11.8.5',
            'react-redux' => '^7.2.2',
            'react-router-bootstrap' => '^0.25.0',
            'react-router-dom' => '^5.2.0',
            'redux-logger' => '^3.0.6',
            'regenerator' => '^0.14.7',
            'regenerator-runtime' => '^0.13.7',
            'simple-line-icons' => '^2.5.5',
            'yup' => '^0.31.1'
        ]);

        $this->info('Successfully installed LaravelReact! Enjoy');
    }

    private function addNpmDependencies(Filesystem $filesystem, $packages)
    {
        krsort($packages);
        foreach ($packages as $package => $version) {
            $this->addNpmDependency($filesystem, $package, $version);
        }
    }

    private function addNpmDependency(Filesystem $filesystem, $package, $version)
    {
        $packageJsonPath = base_path('package.json');
        $newDependencies = $this->fileReplaceContent(
            $filesystem,
            $packageJsonPath,
            "\"devDependencies\": {",
            "\"dependencies\": {\n    },\n    \"devDependencies\": {",
            "\"dependencies\": {"
        );
        $this->fileReplaceContent(
            $filesystem,
            $packageJsonPath,
            "\"dependencies\": {",
            "\"dependencies\": {\n        \"$package\": \"$version\"" . (!$newDependencies ? ',' : ''),
            "\"$package\":"
        );
    }
}
