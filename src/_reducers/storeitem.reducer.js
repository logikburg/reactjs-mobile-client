import { storeitemConstants } from '../_constants';

export function storeitem(state = {}, action) {
  switch (action.type) {
    //for store items
    case storeitemConstants.GET_STORE_ITEMS_REQUEST:
      return {};
    case storeitemConstants.GET_STORE_ITEMS_SUCCESS:
      return {};
    case storeitemConstants.GET_STORE_ITEMS_FAILURE:
      return {};

    //for store item detail
    case storeitemConstants.GET_STORE_ITEM_DETAIL_REQUEST:
        return {};
    case storeitemConstants.GET_STORE_ITEM_DETAIL_SUCCESS:
        return {};
    case storeitemConstants.GET_STORE_ITEM_DETAIL_FAILURE:
        return {};
    default:
      return state
  }
}
