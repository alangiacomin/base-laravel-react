<?php

namespace AG\LaravelReact\Http\Resources;

abstract class BaseErrorResource extends ApiResource
{
  protected function isSuccess()
  {
    return false;
  }

  protected function getVars()
  {
    return [];
  }
}
