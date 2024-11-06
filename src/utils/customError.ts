class CustomError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

function customError(message: string, status: number) {
  throw new CustomError(message, status);
}

export { CustomError };
export default customError;
