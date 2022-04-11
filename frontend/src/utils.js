export const getError = (error) => {
  return error.response && error.response
    ? error.response.data.message
    : error.message;
};
