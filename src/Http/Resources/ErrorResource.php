<?php

namespace AG\LaravelReact\Http\Resources;

class ErrorResource extends BaseErrorResource
{
  public function __construct()
  {
    parent::__construct('');
  }

  protected function getErrors()
  {
    return [];
  }
}
