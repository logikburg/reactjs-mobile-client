import { storeitemConstants, settingConstants } from '../_constants';
import { storeitemService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const storeitemsActions = {
    getPrefSetting,
    getStoreItems,
    getStoreItemDetail
};

function getPrefSetting(user) {
    return dispatch => {
        dispatch(request());

        storeitemService.getPrefSetting(user != undefined ? user.id : "")
            .then(
                setting => dispatch(success(setting)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: settingConstants.PREF_SETTING_REQUEST } }
    function success(setting) { return { type: settingConstants.PREF_SETTING_SUCCESS, setting } }
    function failure(error) { return { type: settingConstants.PREF_SETTING_FAILURE, error } }
}

function getStoreItems(userId) {
    return dispatch => {
        dispatch(request());

        storeitemService.getStoreItems(userId)
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: storeitemConstants.GET_STORE_ITEMS_REQUEST } }
    function success(users) { return { type: storeitemConstants.GET_STORE_ITEMS_SUCCESS, users } }
    function failure(error) { return { type: storeitemConstants.GET_STORE_ITEMS_FAILURE, error } }
}

function getStoreItemDetail(itemId) {
    return dispatch => {
        dispatch(request());

        storeitemService.getAppItemDetail(itemId)
            .then(
                itemdetail => dispatch(success(itemdetail)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: storeitemConstants.STOREITEM_DETAIL_REQUEST } }
    function success(users) { return { type: storeitemConstants.STOREITEM_DETAIL_SUCCESS, users } }
    function failure(error) { return { type: storeitemConstants.STOREITEM_DETAIL_FAILURE, error } }
}
