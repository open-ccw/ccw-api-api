import { request } from "src/request";
import { ApiResponse, MongoDBId } from "src/types/api";

const url_ = "https://gandi-main.ccw.site/ai/hub/chat-with-game-assistant";

type AssistantHistory = {
  assistant: string;
  user: string;
};

type Req = {
  assistantRole: {
    name: string;
    persona: string;
    talkLike: string;
    task: string;
    traits: string;
  };
  extra: {
    lang: string;
  };
  gameWorld: {
    bg: string;
  };
  histories: AssistantHistory[];
  projectId: MongoDBId;
  text: string;
  userRole: {};
};

type Res = {
  text: string;
};

/**
 * 与ai hub GameAssistant交谈
 */
export async function chatWithGameAssistant(
  ts: number | string,
  key: string,
  req: Req,
): Promise<Res> {
  const url = new URL(url_);
  url.searchParams.set("ts", String(ts));
  url.searchParams.set("key", key);
  return await request
    .post<ApiResponse<Res>>(url.toString(), req)
    .then((res) => res.data.body);
}
