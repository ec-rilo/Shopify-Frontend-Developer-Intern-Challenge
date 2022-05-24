import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const requestOpenAI = (engineId, textRequest) => {
  const requestObj = {
    prompt: textRequest
  }

  const axiosConfig = {
    method: 'post',
    url: `https://api.openai.com/v1/engines/${engineId}/completions`,
    headers: {'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`},
    data: {
      prompt: textRequest,
    }
  }

  return new Promise((resolve, reject) => {
    axios(axiosConfig)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { openai, requestOpenAI };
