import { all, call } from 'redux-saga/effects'

import getFlatsWatcher from "./getFlats";


export default function* mainSaga() {
    yield all([
        call(getFlatsWatcher),
    ]);
}