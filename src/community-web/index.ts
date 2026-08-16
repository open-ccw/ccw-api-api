import { encodeShortCode } from "./api/v1/short_code/encode";
import { getApprovalTags } from "./approval/list";
import { getTime } from "./base/dateTime";
import { getCampaignResources } from "./campaign_resource/detail";
import { getCheckInRecords } from "./check_in_record/detail";
import { insertCheckInRecord } from "./check_in_record/insert";
import { getUserAssetStorageSize } from "./cloud_asset/user/privacy";
import { searchCloudAssets } from "./cloud_asset/search";
import { getCommentReplies } from "./comment/page";
import { getCommentsByTopic } from "./comment/page_by_topic";
import { getConfigDetail } from "./config/detail";
import { queryMallProducts } from "./ccw-mall/ccw/product/fe/query";
import { createCreation } from "./creation/create";
import { getCreationDetail } from "./creation/detail";
import { getExcellentCreations } from "./creation/excellent/list";
import { getCreationIntroduction } from "./creation/introduction/detail";
import { getLikeDetail } from "./creation/like/detail";
import { getLoadingTips } from "./creation/loading/tips";
import { getRemixedCreationPage } from "./creation/page";
import { getCreationsByStudent } from "./creation/page_by_student";
import { getPotentialCreations } from "./creation/potential/list";
import { getRecommendCreations } from "./creation/recommend";
import { getRecommendCreators } from "./recommend_creator/list";
import { searchCreationsByTag } from "./creation/search/page";
import { getCreationStudentDetail } from "./creation/student/detail";
import { getCreationTags } from "./creation/tag/list";
import { createShortUrl } from "./short_url/create";
import { getPlanetsOfCreation } from "./hash_tag_creation/list_relation";
import { getMyHashTagCreations } from "./hash_tag_creation/mine";
import { getHashTagDetail } from "./hash_tag/detail";
import { getManagedHashTags } from "./hash_tag/managed/list";
import { getHashTagFavoriteDetail } from "./hash_tag_favorite/detail";
import { getDonatedRecordRanking } from "./creation_donated_record/ranking_list";
import { getCreationFavoriteDetail } from "./creation_favorite/detail";
import { getCreationRecommendPositionList } from "./creation_recommend_position/list";
import { getCreationScreenshotPage } from "./creation_screenshot/page";
import { viewCreationStats } from "./creation_stats/view";
import { getNotifyDeleteReasons } from "./notify_message/show";
import { getPostDetail } from "./post/detail";
import { getSearchHotWords } from "./search/hot_words";
import { searchAll } from "./search/all";
import { getStudentBlockRecordDetail } from "./student/block_record/detail";
import { getStudentBlockRecordList } from "./student/block_record/list";
import { getStudentBlockStatus } from "./student/block_record/status";
import { getCreatorScore } from "./students/creator_score";
import { getStudentLastActiveAt } from "./students/last_active_at";
import { getStudentsList } from "./students/list";
import { getStudentSessions } from "./students/list_sessions";
import { getStudentProfile } from "./students/profile";
import { getReputationScoreLog } from "./students/reputation_score_log/page";
import { getStudentSelfDetail } from "./students/self/detail";
import { getStudentStats } from "./students/stats";
import { updateStudent } from "./students/update";
import { getStudyCommunityMemberDetail } from "./study-community/member/detail";
import { getSpreadFeedUnreadCount } from "./study-community/spread_feed/unread/count";
import { getSubjectAreaPage } from "./subject_area/page";
import { getSubjectAreaPageByChannel } from "./subject_area/page_by_channel";
import { acceptAward } from "./task/award";
import { getMyTasks } from "./task/mine";
import { getUserCardDetail } from "./user-card/detail";
import { getUserLabelList } from "./user_label/list";
import { getPersonalCurrencyAccount } from "./currency/account/personal";
import { getAllEmojis } from "./emoji/all";
import { getEmojiCategoryList } from "./emoji/category/list";
import { getEmojiPage } from "./emoji/page";
import { resolveExternalIp } from "./study-main/external/ip/resolve";
import { getDistrictList } from "./study-main/districts/list";
import { getSchoolList } from "./study-main/schools/list";
import { shareCreation } from "./feed/creation_share";
import { shareFriendInvite } from "./feed/friend_invite";
import { sendEvent } from "./event";
import { getHealthCheck } from "./health/check";
import { getLeafletsItemList } from "./leaflets/item/list";
import { getLockedUserDetail } from "./locked_user/detail";
import { getMutedUserDetail } from "./muted_user/detail";
import { shareCreationToFriend } from "./notification/creation_share";
import { recommendUser } from "./notification/user_recommend";
import { getNotificationPage } from "./notification/page";
import { getNotificationStats } from "./notification/stats/v2";
import { getTypicalProjectPage } from "./typical_project/page";
import { getTypicalProjectUnreadCount } from "./typical_project/student/unread_count";
import { getOwnCreationPage } from "./creation/own/page";
import { fetchObserverInviteToken } from "./creation/team_member/observer_invite_token/fetch";
import { fetchMemberInviteToken } from "./creation/team_member/invite_token/fetch";
import { produceTeamMemberTicket } from "./creation/team_member/produce_ticket";
import { getTeamMemberList } from "./creation/team_member/list";
import { getTeamworkLogPage } from "./creation/teamwork_log/page";
import { updateCreation } from "./creation/update";
import { submitCreation } from "./creation/submit";
import { getSplitRuleDetail } from "./creation/smart_contract/split_rule/detail";
import { bindStudentPhone } from "./students/bind-phone";
import { changeStudentPassword } from "./students/password/change";
import { createSmsCaptchaBySession } from "./captcha/v2/create-by-session";
import { createSplitRule } from "./creation/smart_contract/split_rule/create";
import { getCreationAttributeDetail } from "./creation_attribute/detail";
import { getCreationActivityStatsList } from "./creation_activity_stats/list";
import { getCreationReleasePage } from "./creation_release/page";
import { getCodeProfilingDetail } from "./creation_release/code_profiling/detail";
import { getHistoricalTeamMemberPage } from "./historical_team_member/page";
import { decompressShortUrl } from "./short_url/decompress";
import { getRecommendHashTags } from "./hash_tag/recommend/list";
import { getCCWMainStatus } from "./ccw-main/status";
import { translate } from "./ccw-main/external/translate";
import { tts } from "./ccw-main/external/speech/tts";
import { createCloudVariable } from "./study-community/cloud_variable/create";
import { topComment } from "./study-community/comment/top";
import { foldComment } from "./study-community/comment/fold";
import { resetCommentWeight } from "./study-community/comment/reset_weight";
import { deleteComment } from "./study-community/comment/delete";
import { createComment } from "./comment/create";
import { likeComment } from "./comment/like_record/create";
import { getStudentFollowingPage } from "./student/following/page";
import { donateTrade } from "./study-trade/trade/donate";
import { getUserProductsPage } from "./user_package/user_product";
import { setUserProductStatus } from "./user_package/status";
import { updateGreatCreation } from "./great_creation/update";
import { executeSmartContract } from "./smart_contract/execute";
import { getSmartContractAccount } from "./smart_contract/account";
import { getSmartContractDetail } from "./smart_contract/detail";
import { getSmartContractList } from "./smart_contract/list";
import { getConnectCommunityFollowingStatus } from "./extensions/following/status";
import { getConnectCommunityCreationLikeStatus } from "./extensions/creation-like/detail";
import { followCreator } from "./study-community/following/follow";
import { unfollowCreator } from "./study-community/following/unfollow";
import { updateApproval } from "./approval/update";
import { createSmartContract } from "./smart_contract/create";
import { investSmartContract } from "./smart_contract/invest";
import { getSmartContractTypeList } from "./smart_contract/type/list";
import { getSmartContractEarningsPage } from "./smart_contract/earnings/page";
import { getCreationDashboardOverview } from "./dashboard/creation/overview";
import { getCreationDashboardMetrics } from "./dashboard/creation/metrics";
import { getCreationDashboardMetricsDistribution } from "./dashboard/creation/metrics/distribution";
import { getUserDashboardOverview } from "./dashboard/user/overview";
import { getUserDashboardMetrics } from "./dashboard/user/metrics";
import { getUserDashboardMetricsDetail } from "./dashboard/user/metrics/detail";
import { searchStudents } from "./es_student/search";
import { searchHashTags } from "./hash_tag/search/v2";
import { searchPosts } from "./post/search";

export const communityWeb = {
  acceptAward,
  bindStudentPhone,
  changeStudentPassword,
  createCreation,
  createSmartContract,
  donateTrade,
  encodeShortCode,
  executeSmartContract,
  fetchMemberInviteToken,
  fetchObserverInviteToken,
  createCloudVariable,
  createComment,
  createShortUrl,
  createSmsCaptchaBySession,
  createSplitRule,
  decompressShortUrl,
  deleteComment,
  foldComment,
  followCreator,
  unfollowCreator,
  getApprovalTags,
  getCampaignResources,
  getCcwMainStatus: getCCWMainStatus,
  translate,
  tts,
  getCheckInRecords,
  getCodeProfilingDetail,
  getCommentReplies,
  getCommentsByTopic,
  getConfigDetail,
  getCreationActivityStatsList,
  getCreationAttributeDetail,
  getCreationDetail,
  getCreationDashboardMetrics,
  getCreationDashboardMetricsDistribution,
  getCreationDashboardOverview,
  getCreationFavoriteDetail,
  getCreationIntroduction,
  getConnectCommunityCreationLikeStatus,
  getCreationRecommendPositionList,
  getCreationReleasePage,
  getCreationScreenshotPage,
  getCreationStudentDetail,
  getCreationTags,
  getDistrictList,
  getSchoolList,
  getCreatorScore,
  getDonatedRecordRanking,
  getExcellentCreations,
  getConnectCommunityFollowingStatus,
  getEmojiCategoryList,
  getEmojiPage,
  getAllEmojis,
  getHashTagDetail,
  getHashTagFavoriteDetail,
  getHistoricalTeamMemberPage,
  getManagedHashTags,
  getHealthCheck,
  getLeafletsItemList,
  getLikeDetail,
  getLoadingTips,
  getLockedUserDetail,
  getMutedUserDetail,
  getMyHashTagCreations,
  getMyTasks,
  getNotifyDeleteReasons,
  getNotificationPage,
  getNotificationStats,
  getOwnCreationPage,
  getPersonalCurrencyAccount,
  getPlanetsOfCreation,
  getPostDetail,
  getPotentialCreations,
  getRecommendCreations,
  getRecommendCreators,
  getRecommendHashTags,
  getRemixedCreationPage,
  getReputationScoreLogPage: getReputationScoreLog,
  getSearchHotWords,
  getSmartContractAccount,
  getSmartContractDetail,
  getSmartContractEarningsPage,
  getSmartContractList,
  getSmartContractTypeList,
  getSplitRuleDetail,
  getSpreadFeedUnreadCount,
  getStudentBlockRecordDetail,
  getStudentBlockRecordList,
  getStudentBlockStatus,
  getStudentFollowingPage,
  getStudentLastActiveAt,
  getStudentProfile,
  getStudentSelfDetail,
  getStudentSessions,
  getStudentsList,
  getStudentStats,
  getStudyCommunityMemberDetail,
  getSubjectAreaPage,
  getSubjectAreaPageByChannel,
  getTeamMemberList,
  getTeamworkLogPage,
  getTime,
  getTypicalProjectPage,
  getTypicalProjectUnreadCount,
  getUserAssetStorageSize,
  getUserCardDetail,
  getUserDashboardMetrics,
  getUserDashboardMetricsDetail,
  getUserDashboardOverview,
  getUserLabelList,
  getUserProductsPage,
  queryMallProducts,
  recommendUser,
  getCreationsByStudent,
  insertCheckInRecord,
  investSmartContract,
  likeComment,
  produceTeamMemberTicket,
  resetCommentWeight,
  resolveExternalIp,
  searchCloudAssets,
  searchCreationsByTag,
  searchHashTags,
  searchPosts,
  searchStudents,
  searchAll,
  sendEvent,
  setUserProductStatus,
  shareCreation,
  shareCreationToFriend,
  shareFriendInvite,
  submitCreation,
  topComment,
  updateCreation,
  updateGreatCreation,
  updateStudent,
  updateApproval,
  viewCreationStats,
};
