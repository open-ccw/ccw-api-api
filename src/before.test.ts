import { setRequestUtils } from "./request";
import { requestUtils, setToken } from "@ccw-api/request";

setRequestUtils(requestUtils);

// 从环境变量注入 token，供有真实 token 的测试运行使用
if (process.env.TOKEN) {
  setToken(process.env.TOKEN);
}
