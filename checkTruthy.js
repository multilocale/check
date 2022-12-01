/* Copyright 2013 - 2022 Waiterio LLC */
import BadRequestError from './BadRequestError.js'

export default function checkTruthy(condition, error) {
  if (!condition) {
    if (!error || typeof error === 'string') {
      throw new BadRequestError(error)
    } else if (error.constructor === Error) {
      throw error
    } else if (error?.prototype?.name === 'Error') {
      const SomeError = error
      throw new SomeError()
    }
  }
}
