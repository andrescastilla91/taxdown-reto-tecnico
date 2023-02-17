export const POST_PERSON_TAXES = 'POST_PERSON_TAXES';
export const GET_PERSON_TAXES = 'GET_PERSON_TAXES';
export const SET_STORE_PERSON_TAXES = 'SET_STORE_PERSON_TAXES';
export const ERROR_SUBMISSIONS = 'ERROR_SUBMISSIONS';
export const SUCCESS_SUBMISSIONS = 'SUCCESS_SUBMISSIONS';
export const SET_DEFAULT_SUBMISSION = 'SET_DEFAULT_SUBMISSION';

export const postSubmissionsPersonTax = (data) => {
  return {
    type: POST_PERSON_TAXES,
    data
  }
}

export const getSubmissionsPersonTax = (data) => {
  return {
    type: GET_PERSON_TAXES,
    data
  }
}

export const setStoreSubmissionsPersonTax = (data) => {
  return {
    type: SET_STORE_PERSON_TAXES,
    data
  }
}

export const errorSubmissions = (message) => {
  return {
    type: ERROR_SUBMISSIONS,
    message
  }
}

export const successSubmissions = (message) => {
  return {
    type: SUCCESS_SUBMISSIONS,
    message
  }
}

export const setDefaultSubmission = () => {
  return {
    type: SET_DEFAULT_SUBMISSION
  }
}