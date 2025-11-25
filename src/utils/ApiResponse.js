class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    // info
    /*
            There are certain range in statusCodes:- 
            100-199 - Informational responses
            200-299 - Successful responses
            300-399 - Redirection messages
            400-499 - Client error responses
            500-599 - Server error responses
        */
    this.success = statusCode < 400;
  }
}
export { ApiResponse };
