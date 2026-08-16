const url = "https://community-web.ccw.site/ccw-main/external/speech/tts";

type Req = {
  gender: "female";
  language: string;
  text: string;
};

/**
 * @param req tts配置
 * @returns {Promise<Response>} 需要用户自行处理的音频mp3
 */
export async function tts(req: Req) {
  const code =
    `${(Math.random() * 10).toString().replaceAll(".", "")}${(Math.random() * 10).toString().replaceAll(".", "")}`.substring(
      1,
      16,
    );
  return await fetch(url, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "xg-access-code": code,
    },
    body: JSON.stringify(req),
    method: "POST",
  });
}
