/* Copyright 2013 - 2022 Waiterio LLC */
import checkTruthy from './checkTruthy.js'

export default function checkStringNotEmpty(string, error) {

  checkTruthy(
    string !== null &&
    typeof string === 'string' &&
    string.trim().length > 0,
    error,
  )

  return string

}
