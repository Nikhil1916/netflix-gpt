import OpenAI from 'openai';
import { openAiGptKey } from './constants';

export const openai = new OpenAI({
  apiKey: openAiGptKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});
