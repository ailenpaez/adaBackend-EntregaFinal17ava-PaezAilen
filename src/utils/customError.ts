class CustomError extends Error {
  public status: number; // esta propiedad guarda el nro de error HTTP

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  /* CustomError hereda/extiende de la clase ERROR, comporta como error normal + los datos agregados */
}

function customError(data: { message: string; status: number }) {
  throw new CustomError(data.message, data.status);
}

export { CustomError };
export default customError;
