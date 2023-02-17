export const GET_TAX_LIST = 'GET_TAX_LIST';
export const ERROR_TAX_LIST = 'ERROR_TAX_LIST';
export const SET_TAX_LIST = 'SET_TAX_LIST';

export const getTaxList = () => {
  return {
    type: GET_TAX_LIST
  }
}

export const setTaxList = (data) => {
  return {
    type: SET_TAX_LIST,
    data
  }
}

export const erroTaxList = (error) => {
  return {
    type: ERROR_TAX_LIST,
    message: error
  }
}