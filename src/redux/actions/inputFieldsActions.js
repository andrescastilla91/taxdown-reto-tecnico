export const GET_INPUT_FIELD = 'GET_INPUT_FIELD';
export const ERROR_IMPUT_FIELD = 'ERROR_IMPUT_FIELD';
export const SET_INPUT_FIELD = 'SET_INPUT_FIELD';

export const getInputFields = () => {
  return {
    type: GET_INPUT_FIELD
  }
}

export const setInputFields = (data) => {
  return {
    type: SET_INPUT_FIELD,
    data
  }
}

export const erroInputFields = (error) => {
  return {
    type: ERROR_IMPUT_FIELD,
    message: error
  }
}

