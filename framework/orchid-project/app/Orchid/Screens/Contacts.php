<?php

namespace App\Orchid\Screens;

use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen\EmailSenderScreen;

class Contacts extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Контакты';

    /**
     * Display header description.
     *
     * @var string
     */
    public $description = 'Контакты';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [];
    }

    /**
     * Button commands.
     *
     * @return Action[]
     */
    public function commandBar(): array
    {
        return [

            Link::make('Домашняя страница')->icon('icon-home')->href('/'),
            Link::make('Новая функция')->method('create')
        ];
    }

    /**
     * Views.
     *
     * @return Layout[]
     */
    public function layout(): array
    {
        return [];
    }

    public function create()
    {
        return view('EmailSenderScreen');
    }
}
