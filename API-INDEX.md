# API 索引（自动生成）

> 由 `npm run index` 生成，请勿手工编辑。源码变更后运行该命令刷新。

本文档列出全部 API 的 **导出函数名 / URL / 源码路径**，供 AI 与开发者快速定位。
调用示例与业务逻辑说明见 [README.md](./README.md)；编写规范见 [AGENT.md](./AGENT.md)。

## sso（`src/sso`，6 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `sso.createSmsCaptcha` | `https://sso.ccw.site/web/auth/assistant/captcha/v2/create` | [`src/sso/web/auth/assistant/captcha/v2/create.ts`](./src/sso/web/auth/assistant/captcha/v2/create.ts) |
| `sso.loginByPassword` | `https://sso.ccw.site/web/auth/login-by-password` | [`src/sso/web/auth/login-by-password.ts`](./src/sso/web/auth/login-by-password.ts) |
| `sso.loginByPhone` | `https://sso.ccw.site/web/auth/v3/login/by_phone` | [`src/sso/web/auth/v3/login/by-phone.ts`](./src/sso/web/auth/v3/login/by-phone.ts) |
| `sso.logout` | `https://sso.ccw.site/web/auth/logout` | [`src/sso/web/auth/logout.ts`](./src/sso/web/auth/logout.ts) |
| `sso.logoutBySession` | `https://sso.ccw.site/web/auth/logout_by_session` | [`src/sso/web/auth/logout_by_session.ts`](./src/sso/web/auth/logout_by_session.ts) |
| `sso.touchSession` | `https://sso.ccw.site/internal/auth/touch-session` | [`src/sso/internal/auth/touch-session.ts`](./src/sso/internal/auth/touch-session.ts) |

## communityWeb（`src/community-web`，147 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `communityWeb.acceptAward` | `https://community-web.ccw.site/task/award` | [`src/community-web/task/award.ts`](./src/community-web/task/award.ts) |
| `communityWeb.bindStudentPhone` | `https://community-web.ccw.site/students/bind_phone` | [`src/community-web/students/bind-phone.ts`](./src/community-web/students/bind-phone.ts) |
| `communityWeb.changeStudentPassword` | `https://community-web.ccw.site/students/password/change` | [`src/community-web/students/password/change.ts`](./src/community-web/students/password/change.ts) |
| `communityWeb.createCloudVariable` | `https://community-web.ccw.site/study-community/cloud_variable/create` | [`src/community-web/study-community/cloud_variable/create.ts`](./src/community-web/study-community/cloud_variable/create.ts) |
| `communityWeb.createComment` | `https://community-web.ccw.site/comment/create` | [`src/community-web/comment/create.ts`](./src/community-web/comment/create.ts) |
| `communityWeb.createCreation` | `https://community-web.ccw.site/creation/create` | [`src/community-web/creation/create.ts`](./src/community-web/creation/create.ts) |
| `communityWeb.createReportLog` | `https://community-web.ccw.site/report_log/create` | [`src/community-web/report_log/create.ts`](./src/community-web/report_log/create.ts) |
| `communityWeb.createShortUrl` | `https://community-web.ccw.site/short_url/create` | [`src/community-web/short_url/create.ts`](./src/community-web/short_url/create.ts) |
| `communityWeb.createSmartContract` | `https://community-web.ccw.site/smart_contract/create` | [`src/community-web/smart_contract/create.ts`](./src/community-web/smart_contract/create.ts) |
| `communityWeb.createSmsCaptchaBySession` | `https://community-web.ccw.site/captcha/v2/create_by_session` | [`src/community-web/captcha/v2/create-by-session.ts`](./src/community-web/captcha/v2/create-by-session.ts) |
| `communityWeb.createSplitRule` | `https://community-web.ccw.site/creation/smart_contract/split_rule/create` | [`src/community-web/creation/smart_contract/split_rule/create.ts`](./src/community-web/creation/smart_contract/split_rule/create.ts) |
| `communityWeb.decompressShortUrl` | `https://community-web.ccw.site/short_url/decompress` | [`src/community-web/short_url/decompress.ts`](./src/community-web/short_url/decompress.ts) |
| `communityWeb.deleteComment` | `https://community-web.ccw.site/study-community/comment/delete` | [`src/community-web/study-community/comment/delete.ts`](./src/community-web/study-community/comment/delete.ts) |
| `communityWeb.donateTrade` | `https://community-web.ccw.site/study-trade/trade/donate` | [`src/community-web/study-trade/trade/donate.ts`](./src/community-web/study-trade/trade/donate.ts) |
| `communityWeb.encodeShortCode` | `https://community-web.ccw.site/api/v1/short_code/encode` | [`src/community-web/api/v1/short_code/encode.ts`](./src/community-web/api/v1/short_code/encode.ts) |
| `communityWeb.executeSmartContract` | `https://community-web.ccw.site/smart_contract/execute` | [`src/community-web/smart_contract/execute.ts`](./src/community-web/smart_contract/execute.ts) |
| `communityWeb.fetchMemberInviteToken` | `https://community-web.ccw.site/creation/team_member/invite_token/fetch` | [`src/community-web/creation/team_member/invite_token/fetch.ts`](./src/community-web/creation/team_member/invite_token/fetch.ts) |
| `communityWeb.fetchObserverInviteToken` | `https://community-web.ccw.site/creation/team_member/observer_invite_token/fetch` | [`src/community-web/creation/team_member/observer_invite_token/fetch.ts`](./src/community-web/creation/team_member/observer_invite_token/fetch.ts) |
| `communityWeb.foldComment` | `https://community-web.ccw.site/study-community/comment/fold` | [`src/community-web/study-community/comment/fold.ts`](./src/community-web/study-community/comment/fold.ts) |
| `communityWeb.followCreator` | `https://community-web.ccw.site/study-community/following/follow` | [`src/community-web/study-community/following/follow.ts`](./src/community-web/study-community/following/follow.ts) |
| `communityWeb.getAllEmojis` | `https://community-web.ccw.site/emoji/all` | [`src/community-web/emoji/all.ts`](./src/community-web/emoji/all.ts) |
| `communityWeb.getApprovalTags` | `https://community-web.ccw.site/approval/list` | [`src/community-web/approval/list.ts`](./src/community-web/approval/list.ts) |
| `communityWeb.getCampaignResources` | `https://community-web.ccw.site/campaign_resource/detail` | [`src/community-web/campaign_resource/detail.ts`](./src/community-web/campaign_resource/detail.ts) |
| `communityWeb.getCCWMainStatus` | `https://community-web.ccw.site/ccw-main/status` | [`src/community-web/ccw-main/status.ts`](./src/community-web/ccw-main/status.ts) |
| `communityWeb.getCheckInRecords` | `https://community-web.ccw.site/check_in_record/detail` | [`src/community-web/check_in_record/detail.ts`](./src/community-web/check_in_record/detail.ts) |
| `communityWeb.getCloudProjectDetail` | `https://community-web.ccw.site/study-cloud-database/cloud_project/detail` | [`src/community-web/study-cloud-database/cloud_project/detail.ts`](./src/community-web/study-cloud-database/cloud_project/detail.ts) |
| `communityWeb.getCodeProfilingDetail` | `https://community-web.ccw.site/creation_release/code_profiling/detail` | [`src/community-web/creation_release/code_profiling/detail.ts`](./src/community-web/creation_release/code_profiling/detail.ts) |
| `communityWeb.getCommentContext` | `https://community-web.ccw.site/comment/context` | [`src/community-web/comment/context.ts`](./src/community-web/comment/context.ts) |
| `communityWeb.getCommentReplies` | `https://community-web.ccw.site/comment/page` | [`src/community-web/comment/page.ts`](./src/community-web/comment/page.ts) |
| `communityWeb.getCommentsByTopic` | `https://community-web.ccw.site/comment/page_by_topic` | [`src/community-web/comment/page_by_topic.ts`](./src/community-web/comment/page_by_topic.ts) |
| `communityWeb.getConfigDetail` | `https://community-web.ccw.site/config/detail` | [`src/community-web/config/detail.ts`](./src/community-web/config/detail.ts) |
| `communityWeb.getConnectCommunityCreationLikeStatus` | `https://community-web.ccw.site/extensions/creation-like/detail` | [`src/community-web/extensions/creation-like/detail.ts`](./src/community-web/extensions/creation-like/detail.ts) |
| `communityWeb.getConnectCommunityFollowingStatus` | `https://community-web.ccw.site/extensions/following/status` | [`src/community-web/extensions/following/status.ts`](./src/community-web/extensions/following/status.ts) |
| `communityWeb.getCreationActivityStatsList` | `https://community-web.ccw.site/creation_activity_stats/list` | [`src/community-web/creation_activity_stats/list.ts`](./src/community-web/creation_activity_stats/list.ts) |
| `communityWeb.getCreationAttributeDetail` | `https://community-web.ccw.site/creation_attribute/detail` | [`src/community-web/creation_attribute/detail.ts`](./src/community-web/creation_attribute/detail.ts) |
| `communityWeb.getCreationDashboardMetrics` | `https://community-web.ccw.site/dashboard/creation/metrics` | [`src/community-web/dashboard/creation/metrics.ts`](./src/community-web/dashboard/creation/metrics.ts) |
| `communityWeb.getCreationDashboardMetricsDistribution` | `https://community-web.ccw.site/dashboard/creation/metrics/distribution` | [`src/community-web/dashboard/creation/metrics/distribution.ts`](./src/community-web/dashboard/creation/metrics/distribution.ts) |
| `communityWeb.getCreationDashboardOverview` | `https://community-web.ccw.site/dashboard/creation/overview` | [`src/community-web/dashboard/creation/overview.ts`](./src/community-web/dashboard/creation/overview.ts) |
| `communityWeb.getCreationDetail` | `https://community-web.ccw.site/creation/detail` | [`src/community-web/creation/detail.ts`](./src/community-web/creation/detail.ts) |
| `communityWeb.getCreationFavoriteDetail` | `https://community-web.ccw.site/creation_favorite/detail` | [`src/community-web/creation_favorite/detail.ts`](./src/community-web/creation_favorite/detail.ts) |
| `communityWeb.getCreationIntroduction` | `https://community-web.ccw.site/creation/introduction/detail` | [`src/community-web/creation/introduction/detail.ts`](./src/community-web/creation/introduction/detail.ts) |
| `communityWeb.getCreationRecommendPositionList` | `https://community-web.ccw.site/creation_recommend_position/list` | [`src/community-web/creation_recommend_position/list.ts`](./src/community-web/creation_recommend_position/list.ts) |
| `communityWeb.getCreationRelease` | `https://community-web.ccw.site/creation_release/page` | [`src/community-web/creation_release/page.ts`](./src/community-web/creation_release/page.ts) |
| `communityWeb.getCreationsByStudent` | `https://community-web.ccw.site/creation/page_by_student` | [`src/community-web/creation/page_by_student.ts`](./src/community-web/creation/page_by_student.ts) |
| `communityWeb.getCreationScreenshot` | `https://community-web.ccw.site/creation_screenshot/page` | [`src/community-web/creation_screenshot/page.ts`](./src/community-web/creation_screenshot/page.ts) |
| `communityWeb.getCreationStudentDetail` | `https://community-web.ccw.site/creation/student/detail` | [`src/community-web/creation/student/detail.ts`](./src/community-web/creation/student/detail.ts) |
| `communityWeb.getCreationTags` | `https://community-web.ccw.site/creation/tag/list` | [`src/community-web/creation/tag/list.ts`](./src/community-web/creation/tag/list.ts) |
| `communityWeb.getCreatorScore` | `https://community-web.ccw.site/students/creator_score` | [`src/community-web/students/creator_score.ts`](./src/community-web/students/creator_score.ts) |
| `communityWeb.getDistrictList` | `https://community-web.ccw.site/study-main/districts/list` | [`src/community-web/study-main/districts/list.ts`](./src/community-web/study-main/districts/list.ts) |
| `communityWeb.getDonatedRecordRanking` | `https://community-web.ccw.site/creation_donated_record/ranking_list` | [`src/community-web/creation_donated_record/ranking_list.ts`](./src/community-web/creation_donated_record/ranking_list.ts) |
| `communityWeb.getEmoji` | `https://community-web.ccw.site/emoji/page` | [`src/community-web/emoji/page.ts`](./src/community-web/emoji/page.ts) |
| `communityWeb.getEmojiCategoryList` | `https://community-web.ccw.site/emoji/category/list` | [`src/community-web/emoji/category/list.ts`](./src/community-web/emoji/category/list.ts) |
| `communityWeb.getExcellentCreations` | `https://community-web.ccw.site/creation/excellent/list` | [`src/community-web/creation/excellent/list.ts`](./src/community-web/creation/excellent/list.ts) |
| `communityWeb.getHashTagDetail` | `https://community-web.ccw.site/hash_tag/detail` | [`src/community-web/hash_tag/detail.ts`](./src/community-web/hash_tag/detail.ts) |
| `communityWeb.getHashTagFavoriteDetail` | `https://community-web.ccw.site/hash_tag_favorite/detail` | [`src/community-web/hash_tag_favorite/detail.ts`](./src/community-web/hash_tag_favorite/detail.ts) |
| `communityWeb.getHealthCheck` | `https://community-web.ccw.site/health/check` | [`src/community-web/health/check.ts`](./src/community-web/health/check.ts) |
| `communityWeb.getHistoricalTeamMember` | `https://community-web.ccw.site/historical_team_member/page` | [`src/community-web/historical_team_member/page.ts`](./src/community-web/historical_team_member/page.ts) |
| `communityWeb.getLeafletsItemList` | `https://community-web.ccw.site/leaflets/item/list` | [`src/community-web/leaflets/item/list.ts`](./src/community-web/leaflets/item/list.ts) |
| `communityWeb.getLikeDetail` | `https://community-web.ccw.site/creation/like/detail` | [`src/community-web/creation/like/detail.ts`](./src/community-web/creation/like/detail.ts) |
| `communityWeb.getLoadingTips` | `https://community-web.ccw.site/creation/loading/tips` | [`src/community-web/creation/loading/tips.ts`](./src/community-web/creation/loading/tips.ts) |
| `communityWeb.getLockedUserDetail` | `https://community-web.ccw.site/locked_user/detail` | [`src/community-web/locked_user/detail.ts`](./src/community-web/locked_user/detail.ts) |
| `communityWeb.getManagedHashTags` | `https://community-web.ccw.site/hash_tag/managed/list` | [`src/community-web/hash_tag/managed/list.ts`](./src/community-web/hash_tag/managed/list.ts) |
| `communityWeb.getMutedUserDetail` | `https://community-web.ccw.site/muted_user/detail` | [`src/community-web/muted_user/detail.ts`](./src/community-web/muted_user/detail.ts) |
| `communityWeb.getMyHashTagCreations` | `https://community-web.ccw.site/hash_tag_creation/mine` | [`src/community-web/hash_tag_creation/mine.ts`](./src/community-web/hash_tag_creation/mine.ts) |
| `communityWeb.getMyTasks` | `https://community-web.ccw.site/task/mine` | [`src/community-web/task/mine.ts`](./src/community-web/task/mine.ts) |
| `communityWeb.getNotification` | `https://community-web.ccw.site/notification/page` | [`src/community-web/notification/page.ts`](./src/community-web/notification/page.ts) |
| `communityWeb.getNotificationStats` | `https://community-web.ccw.site/notification/stats/v2` | [`src/community-web/notification/stats/v2.ts`](./src/community-web/notification/stats/v2.ts) |
| `communityWeb.getNotificationV3Page` | `https://community-web.ccw.site/notification/v3/page` | [`src/community-web/notification/v3/page.ts`](./src/community-web/notification/v3/page.ts) |
| `communityWeb.getNotificationV3Summary` | `https://community-web.ccw.site/notification/v3/summary` | [`src/community-web/notification/v3/summary.ts`](./src/community-web/notification/v3/summary.ts) |
| `communityWeb.getNotifyDeleteReasons` | `https://community-web.ccw.site/notify_message/show` | [`src/community-web/notify_message/show.ts`](./src/community-web/notify_message/show.ts) |
| `communityWeb.getOwnCreation` | `https://community-web.ccw.site/creation/own/page` | [`src/community-web/creation/own/page.ts`](./src/community-web/creation/own/page.ts) |
| `communityWeb.getPersonalCurrencyAccount` | `https://community-web.ccw.site/currency/account/personal` | [`src/community-web/currency/account/personal.ts`](./src/community-web/currency/account/personal.ts) |
| `communityWeb.getPlanetsOfCreation` | `https://community-web.ccw.site/hash_tag_creation/list_relation` | [`src/community-web/hash_tag_creation/list_relation.ts`](./src/community-web/hash_tag_creation/list_relation.ts) |
| `communityWeb.getPostDetail` | `https://community-web.ccw.site/post/detail` | [`src/community-web/post/detail.ts`](./src/community-web/post/detail.ts) |
| `communityWeb.getPotentialCreations` | `https://community-web.ccw.site/creation/potential/list` | [`src/community-web/creation/potential/list.ts`](./src/community-web/creation/potential/list.ts) |
| `communityWeb.getRecommendCreations` | `https://community-web.ccw.site/creation/recommend` | [`src/community-web/creation/recommend.ts`](./src/community-web/creation/recommend.ts) |
| `communityWeb.getRecommendCreators` | `https://community-web.ccw.site/recommend_creator/list` | [`src/community-web/recommend_creator/list.ts`](./src/community-web/recommend_creator/list.ts) |
| `communityWeb.getRecommendHashTags` | `https://community-web.ccw.site/hash_tag/recommend/list` | [`src/community-web/hash_tag/recommend/list.ts`](./src/community-web/hash_tag/recommend/list.ts) |
| `communityWeb.getRemixedCreation` | `https://community-web.ccw.site/creation/page` | [`src/community-web/creation/page.ts`](./src/community-web/creation/page.ts) |
| `communityWeb.getReputationScoreLog` | `https://community-web.ccw.site/students/reputation_score_log/page` | [`src/community-web/students/reputation_score_log/page.ts`](./src/community-web/students/reputation_score_log/page.ts) |
| `communityWeb.getSchoolList` | `https://community-web.ccw.site/study-main/schools/list` | [`src/community-web/study-main/schools/list.ts`](./src/community-web/study-main/schools/list.ts) |
| `communityWeb.getSearchHotWords` | `https://community-web.ccw.site/search/hot_words` | [`src/community-web/search/hot_words.ts`](./src/community-web/search/hot_words.ts) |
| `communityWeb.getSmartContractAccount` | `https://community-web.ccw.site/smart_contract/account` | [`src/community-web/smart_contract/account.ts`](./src/community-web/smart_contract/account.ts) |
| `communityWeb.getSmartContractDetail` | `https://community-web.ccw.site/smart_contract/detail` | [`src/community-web/smart_contract/detail.ts`](./src/community-web/smart_contract/detail.ts) |
| `communityWeb.getSmartContractEarnings` | `https://community-web.ccw.site/smart_contract/earnings/page` | [`src/community-web/smart_contract/earnings/page.ts`](./src/community-web/smart_contract/earnings/page.ts) |
| `communityWeb.getSmartContractList` | `https://community-web.ccw.site/smart_contract/list` | [`src/community-web/smart_contract/list.ts`](./src/community-web/smart_contract/list.ts) |
| `communityWeb.getSmartContractTypeList` | `https://community-web.ccw.site/smart_contract/type/list` | [`src/community-web/smart_contract/type/list.ts`](./src/community-web/smart_contract/type/list.ts) |
| `communityWeb.getSplitRuleDetail` | `https://community-web.ccw.site/creation/smart_contract/split_rule/detail` | [`src/community-web/creation/smart_contract/split_rule/detail.ts`](./src/community-web/creation/smart_contract/split_rule/detail.ts) |
| `communityWeb.getSpreadFeedUnreadCount` | `https://community-web.ccw.site/study-community/spread_feed/unread/count` | [`src/community-web/study-community/spread_feed/unread/count.ts`](./src/community-web/study-community/spread_feed/unread/count.ts) |
| `communityWeb.getStoragePostPolicy` | `https://community-web.ccw.site/storage/post-policy` | [`src/community-web/storage/post-policy.ts`](./src/community-web/storage/post-policy.ts) |
| `communityWeb.getStudentBlockRecordDetail` | `https://community-web.ccw.site/student/block_record/detail` | [`src/community-web/student/block_record/detail.ts`](./src/community-web/student/block_record/detail.ts) |
| `communityWeb.getStudentBlockRecordList` | `https://community-web.ccw.site/student/block_record/list` | [`src/community-web/student/block_record/list.ts`](./src/community-web/student/block_record/list.ts) |
| `communityWeb.getStudentBlockStatus` | `https://community-web.ccw.site/student/block_record/status` | [`src/community-web/student/block_record/status.ts`](./src/community-web/student/block_record/status.ts) |
| `communityWeb.getStudentFollowing` | `https://community-web.ccw.site/student/following/page` | [`src/community-web/student/following/page.ts`](./src/community-web/student/following/page.ts) |
| `communityWeb.getStudentLastActiveAt` | `https://community-web.ccw.site/students/last_active_at` | [`src/community-web/students/last_active_at.ts`](./src/community-web/students/last_active_at.ts) |
| `communityWeb.getStudentProfile` | `https://community-web.ccw.site/students/profile` | [`src/community-web/students/profile.ts`](./src/community-web/students/profile.ts) |
| `communityWeb.getStudentSelfDetail` | `https://community-web.ccw.site/students/self/detail` | [`src/community-web/students/self/detail.ts`](./src/community-web/students/self/detail.ts) |
| `communityWeb.getStudentSessions` | `https://community-web.ccw.site/students/list_sessions` | [`src/community-web/students/list_sessions.ts`](./src/community-web/students/list_sessions.ts) |
| `communityWeb.getStudentsList` | `https://community-web.ccw.site/students/list` | [`src/community-web/students/list.ts`](./src/community-web/students/list.ts) |
| `communityWeb.getStudentStats` | `https://community-web.ccw.site/students/stats` | [`src/community-web/students/stats.ts`](./src/community-web/students/stats.ts) |
| `communityWeb.getStudyCommunityMemberDetail` | `https://community-web.ccw.site/study-community/member/detail` | [`src/community-web/study-community/member/detail.ts`](./src/community-web/study-community/member/detail.ts) |
| `communityWeb.getSubjectArea` | `https://community-web.ccw.site/subject_area/page` | [`src/community-web/subject_area/page.ts`](./src/community-web/subject_area/page.ts) |
| `communityWeb.getSubjectAreaPageByChannel` | `https://community-web.ccw.site/subject_area/page_by_channel` | [`src/community-web/subject_area/page_by_channel.ts`](./src/community-web/subject_area/page_by_channel.ts) |
| `communityWeb.getTeamMemberList` | `https://community-web.ccw.site/creation/team_member/list` | [`src/community-web/creation/team_member/list.ts`](./src/community-web/creation/team_member/list.ts) |
| `communityWeb.getTeamworkLog` | `https://community-web.ccw.site/creation/teamwork_log/page` | [`src/community-web/creation/teamwork_log/page.ts`](./src/community-web/creation/teamwork_log/page.ts) |
| `communityWeb.getTime` | `https://community-web.ccw.site/base/dateTime` | [`src/community-web/base/dateTime.ts`](./src/community-web/base/dateTime.ts) |
| `communityWeb.getTypicalProject` | `https://community-web.ccw.site/typical_project/page` | [`src/community-web/typical_project/page.ts`](./src/community-web/typical_project/page.ts) |
| `communityWeb.getTypicalProjectUnreadCount` | `https://community-web.ccw.site/typical_project/student/unread_count` | [`src/community-web/typical_project/student/unread_count.ts`](./src/community-web/typical_project/student/unread_count.ts) |
| `communityWeb.getUserAssetStorageSize` | `https://community-web.ccw.site/cloud_asset/user/privacy` | [`src/community-web/cloud_asset/user/privacy.ts`](./src/community-web/cloud_asset/user/privacy.ts) |
| `communityWeb.getUserCardDetail` | `https://community-web.ccw.site/user-card/detail` | [`src/community-web/user-card/detail.ts`](./src/community-web/user-card/detail.ts) |
| `communityWeb.getUserDashboardMetrics` | `https://community-web.ccw.site/dashboard/user/metrics` | [`src/community-web/dashboard/user/metrics.ts`](./src/community-web/dashboard/user/metrics.ts) |
| `communityWeb.getUserDashboardMetricsDetail` | `https://community-web.ccw.site/dashboard/user/metrics/detail` | [`src/community-web/dashboard/user/metrics/detail.ts`](./src/community-web/dashboard/user/metrics/detail.ts) |
| `communityWeb.getUserDashboardOverview` | `https://community-web.ccw.site/dashboard/user/overview` | [`src/community-web/dashboard/user/overview.ts`](./src/community-web/dashboard/user/overview.ts) |
| `communityWeb.getUserLabelList` | `https://community-web.ccw.site/user_label/list` | [`src/community-web/user_label/list.ts`](./src/community-web/user_label/list.ts) |
| `communityWeb.getUserProducts` | `https://community-web.ccw.site/user_package/user_product` | [`src/community-web/user_package/user_product.ts`](./src/community-web/user_package/user_product.ts) |
| `communityWeb.insertCheckInRecord` | `https://community-web.ccw.site/check_in_record/insert` | [`src/community-web/check_in_record/insert.ts`](./src/community-web/check_in_record/insert.ts) |
| `communityWeb.investSmartContract` | `https://community-web.ccw.site/smart_contract/invest` | [`src/community-web/smart_contract/invest.ts`](./src/community-web/smart_contract/invest.ts) |
| `communityWeb.likeComment` | `https://community-web.ccw.site/comment/like_record/create` | [`src/community-web/comment/like_record/create.ts`](./src/community-web/comment/like_record/create.ts) |
| `communityWeb.markNotificationV3Read` | `https://community-web.ccw.site/notification/v3/mark_read` | [`src/community-web/notification/v3/mark_read.ts`](./src/community-web/notification/v3/mark_read.ts) |
| `communityWeb.produceTeamMemberTicket` | `https://community-web.ccw.site/creation/team_member/produce_ticket` | [`src/community-web/creation/team_member/produce_ticket.ts`](./src/community-web/creation/team_member/produce_ticket.ts) |
| `communityWeb.queryMallProducts` | `https://community-web.ccw.site/ccw-mall/ccw/product/fe/query` | [`src/community-web/ccw-mall/ccw/product/fe/query.ts`](./src/community-web/ccw-mall/ccw/product/fe/query.ts) |
| `communityWeb.recommendUser` | `https://community-web.ccw.site/notification/user_recommend` | [`src/community-web/notification/user_recommend.ts`](./src/community-web/notification/user_recommend.ts) |
| `communityWeb.replyComment` | `https://community-web.ccw.site/comment/reply` | [`src/community-web/comment/reply.ts`](./src/community-web/comment/reply.ts) |
| `communityWeb.resetCommentWeight` | `https://community-web.ccw.site/study-community/comment/reset_weight` | [`src/community-web/study-community/comment/reset_weight.ts`](./src/community-web/study-community/comment/reset_weight.ts) |
| `communityWeb.resolveExternalIp` | `https://community-web.ccw.site/study-main/external/ip/resolve` | [`src/community-web/study-main/external/ip/resolve.ts`](./src/community-web/study-main/external/ip/resolve.ts) |
| `communityWeb.saveCloudProject` | `https://community-web.ccw.site/study-cloud-database/cloud_project/save` | [`src/community-web/study-cloud-database/cloud_project/save.ts`](./src/community-web/study-cloud-database/cloud_project/save.ts) |
| `communityWeb.searchAll` | `https://community-web.ccw.site/search/all` | [`src/community-web/search/all.ts`](./src/community-web/search/all.ts) |
| `communityWeb.searchCloudAssets` | `https://community-web.ccw.site/cloud_asset/search` | [`src/community-web/cloud_asset/search.ts`](./src/community-web/cloud_asset/search.ts) |
| `communityWeb.searchCreationsByTag` | `https://community-web.ccw.site/creation/search/page` | [`src/community-web/creation/search/page.ts`](./src/community-web/creation/search/page.ts) |
| `communityWeb.searchHashTags` | `https://community-web.ccw.site/hash_tag/search/v2` | [`src/community-web/hash_tag/search/v2.ts`](./src/community-web/hash_tag/search/v2.ts) |
| `communityWeb.searchPosts` | `https://community-web.ccw.site/post/search` | [`src/community-web/post/search.ts`](./src/community-web/post/search.ts) |
| `communityWeb.searchStudents` | `https://community-web.ccw.site/es_student/search` | [`src/community-web/es_student/search.ts`](./src/community-web/es_student/search.ts) |
| `communityWeb.sendEvent` | `https://community-web.ccw.site/event` | [`src/community-web/event.ts`](./src/community-web/event.ts) |
| `communityWeb.setUserProductStatus` | `https://community-web.ccw.site/user_package/status` | [`src/community-web/user_package/status.ts`](./src/community-web/user_package/status.ts) |
| `communityWeb.shareCreation` | `https://community-web.ccw.site/feed/creation_share` | [`src/community-web/feed/creation_share.ts`](./src/community-web/feed/creation_share.ts) |
| `communityWeb.shareCreationToFriend` | `https://community-web.ccw.site/notification/creation_share` | [`src/community-web/notification/creation_share.ts`](./src/community-web/notification/creation_share.ts) |
| `communityWeb.shareFriendInvite` | `https://community-web.ccw.site/feed/friend_invite` | [`src/community-web/feed/friend_invite.ts`](./src/community-web/feed/friend_invite.ts) |
| `communityWeb.submitCreation` | `https://community-web.ccw.site/creation/submit` | [`src/community-web/creation/submit.ts`](./src/community-web/creation/submit.ts) |
| `communityWeb.topComment` | `https://community-web.ccw.site/study-community/comment/top` | [`src/community-web/study-community/comment/top.ts`](./src/community-web/study-community/comment/top.ts) |
| `communityWeb.translate` | `https://community-web.ccw.site/ccw-main/external/mt/translate` | [`src/community-web/ccw-main/external/translate.ts`](./src/community-web/ccw-main/external/translate.ts) |
| `communityWeb.unfollowCreator` | `https://community-web.ccw.site/study-community/following/unfollow` | [`src/community-web/study-community/following/unfollow.ts`](./src/community-web/study-community/following/unfollow.ts) |
| `communityWeb.unlikeComment` | `https://community-web.ccw.site/comment/like_record/delete` | [`src/community-web/comment/like_record/delete.ts`](./src/community-web/comment/like_record/delete.ts) |
| `communityWeb.updateApproval` | `https://community-web.ccw.site/approval/update` | [`src/community-web/approval/update.ts`](./src/community-web/approval/update.ts) |
| `communityWeb.updateCreation` | `https://community-web.ccw.site/creation/update` | [`src/community-web/creation/update.ts`](./src/community-web/creation/update.ts) |
| `communityWeb.updateGreatCreation` | `https://community-web.ccw.site/great_creation/update` | [`src/community-web/great_creation/update.ts`](./src/community-web/great_creation/update.ts) |
| `communityWeb.updateStudent` | `https://community-web.ccw.site/students/update` | [`src/community-web/students/update.ts`](./src/community-web/students/update.ts) |
| `communityWeb.viewCreationStats` | `https://community-web.ccw.site/creation_stats/view` | [`src/community-web/creation_stats/view.ts`](./src/community-web/creation_stats/view.ts) |

## gandiMain（`src/gandi-main`，5 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `gandiMain.getBulletinDetail` | `https://gandi-main.ccw.site/bulletins` | [`src/gandi-main/bulletins/detail.ts`](./src/gandi-main/bulletins/detail.ts) |
| `gandiMain.getBulletinsPage` | `https://gandi-main.ccw.site/bulletins` | [`src/gandi-main/bulletins/page.ts`](./src/gandi-main/bulletins/page.ts) |
| `gandiMain.getCurrentTimestamp` | `https://gandi-main.ccw.site/timestamp/current` | [`src/gandi-main/timestamp/current.ts`](./src/gandi-main/timestamp/current.ts) |
| `gandiMain.getLeaderboardRecords` | `https://gandi-main.ccw.site/creation/leaderboards` | [`src/gandi-main/creation/leaderboards/{oid}/records.ts`](./src/gandi-main/creation/leaderboards/{oid}/records.ts) |
| `gandiMain.submitLeaderboardRecord` | `https://gandi-main.ccw.site/creation/leaderboards` | [`src/gandi-main/creation/leaderboards/{oid}/records.ts`](./src/gandi-main/creation/leaderboards/{oid}/records.ts) |

## bfsWeb（`src/bfs-web`，2 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `bfsWeb.donateExtension` | `https://bfs-web.ccw.site/extensions` | [`src/bfs-web/extensions/{eid}/donate.ts`](./src/bfs-web/extensions/{eid}/donate.ts) |
| `bfsWeb.getUserExtensions` | `https://bfs-web.ccw.site/users` | [`src/bfs-web/users/{oid}/extensions.ts`](./src/bfs-web/users/{oid}/extensions.ts) |

## communityWebCloudDatabase（`src/community-web-cloud-database`，3 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `communityWebCloudDatabase.getCloudVariableDetailV2` | `https://community-web-cloud-database.ccw.site/cloud_variable/detail/v2` | [`src/community-web-cloud-database/cloud_variable/detail/v2.ts`](./src/community-web-cloud-database/cloud_variable/detail/v2.ts) |
| `communityWebCloudDatabase.saveProjectCloudVariable` | `https://community-web-cloud-database.ccw.site/cloud_variable/save` | [`src/community-web-cloud-database/cloud_variable/save.ts`](./src/community-web-cloud-database/cloud_variable/save.ts) |
| `communityWebCloudDatabase.saveUserCloudVariable` | `https://community-web-cloud-database.ccw.site/cloud_variable/save` | [`src/community-web-cloud-database/cloud_variable/save.ts`](./src/community-web-cloud-database/cloud_variable/save.ts) |

## opParentApi（`src/op-parent-api`，2 个）

| 调用方式 | URL | 源码 |
| --- | --- | --- |
| `opParentApi.checkCaptcha` | `https://op-parent-api.xiguacity.cn/captcha/check` | [`src/op-parent-api/captcha/check.ts`](./src/op-parent-api/captcha/check.ts) |
| `opParentApi.createCaptcha` | `https://op-parent-api.xiguacity.cn/captcha/create` | [`src/op-parent-api/captcha/create.ts`](./src/op-parent-api/captcha/create.ts) |

## 统计

共 165 个 API 函数。
