<?php

namespace AG\LaravelReact;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Routing\Router;

class LaravelReactServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     */
    public function register()
    {
        if ($this->app->runningInConsole()) {
            $this->registerPublishableResources();
            $this->registerConsoleCommands();
        }
    }

    /**
     * Register the publishable files.
     */
    private function registerPublishableResources()
    {
        $publishablePath = dirname(__DIR__) . '/publishable';
        $stubsPath = dirname(__DIR__) . '/stubs';

        $publishable = [
            'controllers' => [
                "{$publishablePath}/controllers/" => base_path('app/Http/Controllers'),
            ],
            'resources' => [
                "{$publishablePath}/resources/" => base_path('resources'),
            ],
            'mix' => [
                "{$publishablePath}/webpack.mix.js" => base_path('webpack.mix.js'),
                "{$publishablePath}/.eslintrc" => base_path('.eslintrc'),
            ],
            'vscode' => [
                "{$publishablePath}/dummy.code-workspace" => base_path(basename(base_path()) . '.code-workspace'),
            ],
            'reactpage-tmp' => [
                "{$stubsPath}/js/DummyPage" => base_path('temp/DummyPage'),
            ],
            'reactpage' => [
                base_path('temp') => base_path('resources/js/pages'),
            ],
        ];

        foreach ($publishable as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(Commands\VSCodeCommand::class);
        $this->commands(Commands\InstallCommand::class);
        $this->commands(Commands\ReactPageCommand::class);
    }
}
