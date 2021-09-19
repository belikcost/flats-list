import { takeEvery, call, put } from 'redux-saga/effects';

import { GET_FLATS_REQUEST } from "../constants";
import { getFlatsSuccess } from "../redux/actions";


function* getFlats() {
    const result = yield call(getFlatsFetch);
    yield put(getFlatsSuccess(result));
}

const getFlatsFetch = () => {
    return fetch('https://61477efc65467e0017384b84.mockapi.io/flats').then(result => result.json());
}

export default function* getFlatsWatcher() {
    yield takeEvery(GET_FLATS_REQUEST, getFlats);
}