export const SET_USER_DATA = 'SET_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_LOGIN = 'SET_LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const setUserData = (data) =>{
  return {
    type: SET_USER_DATA,
    user: data
  }
}

export const getUserData = () => {
  return {
    type: GET_USER_DATA
  }
}

export const setLogin = (dataLogin) => {
  return {
    type: SET_LOGIN,
    data: dataLogin
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const erroLogin = (error) => {
  return {
    type: ERROR_LOGIN,
    message: error
  }
}
