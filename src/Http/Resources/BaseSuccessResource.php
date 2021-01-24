<?php

namespace AG\LaravelReact\Http\Resources;

abstract class BaseSuccessResource extends ApiResource
{
  protected function isSuccess()
  {
    return true;
  }

  protected function getErrors()
  {
    return [];
  }
}
