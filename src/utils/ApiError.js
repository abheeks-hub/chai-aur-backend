class ApiError extends Error {
  constructor(statusCode, message = "Something went wrrong", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.errors = errors;

    // Optional Block
    // if (stack) {
    //     this.stack = stack
    // }else{
    //     Error.captureStackTrace(this, this.constructor);
    // }
  }
}
export { ApiError };
