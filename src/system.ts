export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo"
}

export const message = `Powered by OpenAI Vercel
- 由日月星辰基于 [chatgpt-vercel](https://github.com/ourongxing/chatgpt-vercel) 部署，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
