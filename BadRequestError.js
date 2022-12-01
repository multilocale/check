/* Copyright 2013 - 2022 Waiterio LLC */
function BadRequestError(error = '') {

  this.message = error?.message || error
  this.status = 400
  this.name = 'BadRequestError'

}

BadRequestError.prototype = Error.prototype
BadRequestError.prototype.toString = function () {

  return this.message

}

export default BadRequestError
