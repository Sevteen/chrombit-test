import { useRecoilState } from "recoil";
import { UserDataAtom } from "../atoms";

var useUserData = function useUserData() {
   return useRecoilState(UserDataAtom);
};

export { useUserData };
