import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSaga";
import { themeSaga } from "../common/themeSaga";

export default function* rootSaga() {
  yield all([personalHomepageSaga(), themeSaga()]);
}
