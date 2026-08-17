import { MongoDBId, CNameOssUrl } from "src/types/api";
import { ApprovalTag } from "src/types/approval";
import { AccountTypes } from "src/types/account";
import { ApprovalStatus } from "src/community-web/approval/list";

export interface BaseUser {
  avatar: CNameOssUrl;
  name: string;
  picUrl: CNameOssUrl;
  virtualValue: CNameOssUrl;
}

export interface StudentSimple extends BaseUser {
  bio: string;
  oid: MongoDBId;
}

export interface Student extends StudentSimple {
  approvedContent: null | string;
  approvedType: null | string;
  commentCount: number;
  creationCount: number;
  favoriteCount: number;
  followerCount: number;
  followingCount: number;
  followingStatus: "UNFOLLOWED" | "FOLLOWED";
  isSelf: boolean;
  likeCount: number;
  remixedCount: number;
  viewCount: number;
}

export interface StudentOverview {
  approvedContent: null | string;
  approvedType: null | string;
  avatar: CNameOssUrl;
  bio: string;
  commentCount: null | number;
  creationCount: null | number;
  favoriteCount: null | number;
  followerCount: null | number;
  followingCount: null | number;
  followingStatus: null | "UNFOLLOWED" | "FOLLOWED" | "BOTH_FOLLOWED" | string;
  isSelf: null | boolean;
  likeCount: null | number;
  name: string;
  oid: MongoDBId;
  picUrl: null | CNameOssUrl;
  remixedCount: null | number;
  viewCount: null | number;
  virtualValue: null | CNameOssUrl;
}

export interface OtherUser extends BaseUser {
  accountOid: MongoDBId;
  accountType: AccountTypes;
  approvalTagRelations: ApprovalStatus<number, string>[];
  createdAt: number;
  currentCreationPlaytime: null;
  ext: {};
  hideGender: boolean;
  id: number;
  status: "NORMAL";
  updatedAt: number;
  virtualValue: CNameOssUrl;
}

export type UserLabels = "POTENTIAL_CREATION";

export interface ProfileExtraInfo {
  hobbies: string;
  learnedProgrammingLanguages: string;
  programmingCapability: string;
  selfIntroduction: string;
}

export interface MemberArchive {
  accountOid: null | MongoDBId;
  defaultEditor: string;
  greatCreationOid: MongoDBId;
  homepageCover: CNameOssUrl;
}

export interface ReputationScore {
  rank: string;
  score: number;
  studentOid: MongoDBId;
}

export interface ProfileStatistics {
  badgesCount: null | number;
  homeworkCount: number;
  likeHomeworkCount: number;
}

export interface ReputationScoreLog {
  createdAt: number;
  description: string;
  id: number;
  score: number;
  studentOid: MongoDBId;
}

export interface StudentProfile extends BaseUser {
  bio: string;
  birthday: number;
  category: string;
  commentCount: number;
  extraInfo: ProfileExtraInfo;
  gender: string;
  hideGender: boolean;
  identityAuthRank: string;
  lastLoginAt: number;
  memberArchive: MemberArchive;
  regChannel: null | string;
  reputationScore: ReputationScore;
  statistics: ProfileStatistics;
  studentCreatedDays: number;
  studentNumber: string;
  studentOid: MongoDBId;
}

export interface ParentInfo {
  acceptedCashInviteOnce: null | boolean;
  alphaUser: null | boolean;
  altName: null | string;
  annualIncome: null | string;
  archive: null | boolean;
  authedTime: null | number;
  avatar: null | CNameOssUrl;
  bindPhone: string;
  birthday: null | number;
  cashInviteCreatedAt: null | number;
  cashInviteRestartAt: null | number;
  clazzDevice: null | string;
  company: null | string;
  countryCode: null | string;
  createdAt: null | number;
  degree: null | string;
  distinctId: string;
  divorced: null | boolean;
  email: null | string;
  ext: {};
  followTeachers: object[];
  fullName: null | string;
  gender: null | string;
  giftCardCampaign: null | string;
  guestOid: null | MongoDBId;
  idcard: null | string;
  industry: null | string;
  integer: null | number;
  inviterableId: null | string;
  inviterableType: null | string;
  isEmployee: null | boolean;
  jobPosition: null | string;
  lastSubscribeAt: null | number;
  mainContact: null | boolean;
  name: null | string;
  needSelectClazz: null | boolean;
  oid: MongoDBId;
  overseaExperience: null | boolean;
  phoneAddr: null | string;
  powerUser: null | boolean;
  realName: null | string;
  relationship: null | string;
  remarkName: null | string;
  rewardsCashesCount: null | number;
  source: null | string;
  sourceCategory: null | string;
  sourceInfo: null | string;
  status: null | string;
  student: null | object;
  studentOid: MongoDBId;
  subscribe: null | boolean;
  subscribeScene: null | string;
  tags: null | string[];
  telephone: string;
  university: null | string;
  updatedAt: null | number;
  userTags: string[];
  userType: null | string;
  wechatAccount: null | string;
  wechatCity: null | string;
  wechatCountry: null | string;
  wechatOpenid: null | string;
  wechatProvince: null | string;
  wechatUnionid: null | string;
  wehubWxid: null | string;
  wxid: null | string;
}

export interface CurrentParent {
  bindPhone: string;
  qqNickname: string;
  qqNum: null | string;
}

export interface InfoModifyDate {
  avatarModifiedAt: null | number;
  nameModifiedAt: null | number;
}

export type StudentSelfDetailFields =
  | "abGroup"
  | "accountNumber"
  | "address"
  | "age"
  | "avatar"
  | "bio"
  | "birthday"
  | "city"
  | "commentCount"
  | "countryCode"
  | "createdAt"
  | "currentParent"
  | "email"
  | "extraInfo"
  | "fullName"
  | "gender"
  | "grade"
  | "hideGender"
  | "host"
  | "identity"
  | "identityAuthRank"
  | "identityType"
  | "informationModifyDate"
  | "lastLoginAt"
  | "name"
  | "oid"
  | "parents"
  | "picUrl"
  | "province"
  | "qq"
  | "reputationScore"
  | "school"
  | "studentNumber"
  | "updatedAt"
  | "virtualValue";

export interface StudentSelfDetail {
  abGroup: null | string;
  accountNumber: string;
  address: null | string;
  addressCode: null | string;
  age: number;
  archive: null | boolean;
  avatar: CNameOssUrl;
  bio: string;
  birthYear: null | number;
  birthday: number;
  category: null | string;
  city: null | string;
  commentCount: number;
  contactPhone: null | string;
  countryCode: null | string;
  createdAt: number;
  currentMajorClazzOid: null | MongoDBId;
  currentParent: CurrentParent;
  distinctId: null | string;
  district: null | string;
  email: null | string;
  energy: null | number;
  energyRegain: null | number;
  examScore: null | number;
  extraInfo: ProfileExtraInfo;
  firstTime: null | boolean;
  followingStatus: null | string;
  fullName: string;
  gender: string;
  grade: number;
  group: null | string;
  guest: null | boolean;
  guestNumber: null | string;
  hideGender: boolean;
  host: string;
  identity: string;
  identityAuthRank: string;
  identityType: string;
  informationModifyDate: InfoModifyDate;
  keywords: string[];
  lastLoginAt: null | number;
  lastStudyAt: null | number;
  lowAge: null | boolean;
  midexamScore: null | number;
  miniprojectFreeNum: null | number;
  mpClicked: null | boolean;
  mpShowedModal: null | boolean;
  mpTutorial: null | string;
  name: string;
  newWorkbenchTutorial: null | boolean;
  oid: MongoDBId;
  orgId: null | string;
  parents: ParentInfo[];
  passwordDigest: null | string;
  photo: null | string;
  picUrl: CNameOssUrl;
  province: null | string;
  qq: string;
  receiver: null | string;
  regChannel: null | string;
  remarkName: null | string;
  reputationScore: ReputationScore;
  role: null | string;
  school: string;
  showServiceTerm: null | boolean;
  showTaskList: null | boolean;
  stats: null | object;
  studentNumber: string;
  task: null | object;
  teacherUnreadedMessages: null | number;
  tutorialSteps: null | string;
  updatedAt: number;
  validateSchool: null | boolean;
  virtualValue: CNameOssUrl;
  watchedMiniProjectTutorailVideo: null | boolean;
  xiguaStudentNo: null | string;
}

export interface StudentListItem {
  abGroup: null | string;
  accountNumber: null | string;
  address: null | string;
  addressCode: null | string;
  age: null | number;
  archive: null | boolean;
  avatar: CNameOssUrl;
  bio: null | string;
  birthYear: null | number;
  birthday: null | number;
  category: null | string;
  city: null | string;
  commentCount: null | number;
  contactPhone: null | string;
  countryCode: null | string;
  createdAt: null | number;
  currentMajorClazzOid: null | MongoDBId;
  currentParent: null | object;
  distinctId: null | string;
  district: null | string;
  email: null | string;
  energy: null | number;
  energyRegain: null | number;
  examScore: null | number;
  extraInfo: null | object;
  firstTime: null | boolean;
  followingStatus: null | string;
  fullName: null | string;
  gender: null | string;
  grade: null | number;
  group: null | string;
  guest: null | boolean;
  guestNumber: null | string;
  hideGender: null | boolean;
  host: null | string;
  identity: null | string;
  identityAuthRank: null | string;
  identityType: null | string;
  informationModifyDate: null | object;
  keywords: string[];
  lastLoginAt: null | number;
  lastStudyAt: null | number;
  lowAge: null | boolean;
  midexamScore: null | number;
  miniprojectFreeNum: null | number;
  mpClicked: null | boolean;
  mpShowedModal: null | boolean;
  mpTutorial: null | string;
  name: string;
  newWorkbenchTutorial: null | boolean;
  oid: MongoDBId;
  orgId: null | string;
  parents: object[];
  passwordDigest: null | string;
  photo: null | string;
  picUrl: CNameOssUrl;
  province: null | string;
  qq: null | string;
  receiver: null | string;
  regChannel: null | string;
  remarkName: null | string;
  reputationScore: null | number;
  role: null | string;
  school: null | string;
  showServiceTerm: null | boolean;
  showTaskList: null | boolean;
  stats: null | object;
  studentNumber: string;
  task: null | object;
  teacherUnreadedMessages: null | number;
  tutorialSteps: null | string;
  updatedAt: null | number;
  validateSchool: null | boolean;
  virtualValue: CNameOssUrl;
  watchedMiniProjectTutorailVideo: null | boolean;
  xiguaStudentNo: null | string;
}

export interface CreatorScore {
  rank: "ORDINARY" | "HACKER" | "ADVANCED";
  rankRetentionDate: null;
  score: number;
  studentOid: MongoDBId;
}

export interface StudentFollowerStats {
  followerCount: number;
  followingCount: number;
}

export type StudentUpdateReq = Partial<{
  avatar: string;
  birthday: number;
  fullName: string;
  gender: string;
  hideGender: boolean;
  hobbies: string;
  learnedProgrammingLanguages: string;
  programmingCapability: string;
  qq: string;
  school: string;
}>;
