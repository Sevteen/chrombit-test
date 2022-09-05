import { selector } from "recoil";
import { UserDataAtom } from "./atoms";
import _isEmpty from "lodash/isEmpty";

export const isLoggedInSelector = selector({
   key: "IsLoggedInSelector",
   get: function get({ get: _get }) {
      var userData = _get(UserDataAtom);

      return !_isEmpty(userData);
   },
});
