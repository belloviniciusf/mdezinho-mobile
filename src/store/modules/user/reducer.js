import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  language: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.language = action.payload.user.language;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.language = null;
        break;
      }
      case '@user/SELECT_LANGUAGE': {
        draft.language = action.payload.language;
        break;
      }
      default:
    }
  });
}
