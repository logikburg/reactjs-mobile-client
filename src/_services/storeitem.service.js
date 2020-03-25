import { authHeader } from '../_helpers';

import {userService} from './user.service';

export const storeitemService = {
    getStoreItems,
    getPrefSetting,
    getStoreItemDetail
};

function getPrefSetting(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    var _id = id == "" ? "0" : id;

    return fetch(`/setting/${_id}`, requestOptions).then(handleResponse);
}

function getStoreItems(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/storeitems`, requestOptions).then(handleResponse);
}

function getStoreItemDetail(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/storeitem/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                userService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
