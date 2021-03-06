import httpStatus from 'http-status';

class SequelizeValidationError extends Error {
  constructor(invalidFields) {
    super();
    this.type = 'validation_error';
    this.invalidFields = invalidFields;
    this.statusCode = httpStatus.BAD_REQUEST;
    this.status = httpStatus['400_NAME'];
  }
}

export const handleSequelizeValidationError = (err, res) => {
  const invalidFields = err.errors.map(error => {
    console.log(`[${new Date()}][Validation Error]: ${error.message}`);
    
    return { field: error.path, reason: error.message };
  });

  return res.status(httpStatus.BAD_REQUEST)
    .json(new SequelizeValidationError(invalidFields));
};

export default SequelizeValidationError;