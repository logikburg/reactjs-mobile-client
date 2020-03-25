import { settingConstants } from '../_constants';

export function setting(state = {}, action) {
  switch (action.type) {
    //for setting pref
    case settingConstants.PREF_SETTING_REQUEST:
      return {};
    case settingConstants.PREF_SETTING_SUCCESS:
      return {
        setting: true,
        pref: action.setting
      };
    case settingConstants.PREF_SETTING_FAILURE:
      return {};

    default:
      return state
  }
}
