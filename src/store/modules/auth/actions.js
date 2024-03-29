export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signInSucess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
      user,
    },
  };
}

export function signUpRequest(name, email, password, type, language) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
      type,
      language,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
