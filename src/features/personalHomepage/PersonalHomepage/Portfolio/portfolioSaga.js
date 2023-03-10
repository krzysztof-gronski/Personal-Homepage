import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./portfolioAPI";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./portfolioSlice";

function* fetchRepositoriesWorker({ payload: username }) {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesWorker);
}
