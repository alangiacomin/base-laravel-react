<?php

namespace AG\LaravelReact\Http\Resources;

use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

abstract class ApiResource extends JsonResource
{
  private $success;
  private $vars;
  private $errors;

  abstract protected function isSuccess();
  abstract protected function getVars();
  abstract protected function getErrors();

  private function setData()
  {
    $this->success = $this->isSuccess();
    if ($this->success !== true && $this->success !== false) {
      throw new Exception("ApiResource 'success' not set", 1);
    }

    $this->vars = $this->getVars();
    if (!is_array($this->vars)) {
      throw new Exception("ApiResource 'vars' not set", 1);
    }

    $this->errors = $this->getErrors();
    if (!is_array($this->errors)) {
      throw new Exception("ApiResource 'errors' not set", 1);
    }
  }

  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    $this->setData();
    return [
      'success' => $this->success,
      'errors' => $this->errors,
      'result' => array_combine(
        $this->vars,
        array_map(function ($v) {
          return $this[$v];
        }, $this->vars)
      )
    ];
  }
}
