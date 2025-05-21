import OpenAI from 'openai';
import { baseURL } from '../constants/constants';

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_DEEPSEEK_KEY,
  baseURL: baseURL,
  dangerouslyAllowBrowser: true,
});
export class Assistant {
  #model;
  constructor(model = 'deepseek-chat') {
    this.#model = model;
  }

  async chat(content, history = []) {
    const response = await openai.chat.completions.create({
      model: this.#model,
      messages: [...history, { role: 'user', content }],
    });
    return response.choices[0].message.content;
  }
}
