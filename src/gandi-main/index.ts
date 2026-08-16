import { getCurrentTimestamp } from "./timestamp/current";
import { getBulletinsPage } from "./bulletins/page";
import { getBulletinDetail } from "./bulletins/detail";
import {
  getLeaderboardRecords,
  submitLeaderboardRecord,
} from "./creation/leaderboards/{oid}/records";
import { chatWithGameAssistant } from "./ai/hub/chat-with-game-assistant";

export const gandiMain = {
  getCurrentTimestamp,
  getBulletinsPage,
  getBulletinDetail,
  submitLeaderboardRecord,
  getLeaderboardRecords,
  chatWithGameAssistant,
};
