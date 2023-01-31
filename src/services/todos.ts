import axios from "axios";
import { convertDataToTodo } from "../helpers";
import type { Todo } from "../types";

export const getTodo = async (searchTodo: string): Promise<Todo> => {
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
    data: {
      model: "command-xlarge-20221108",
      prompt: `Make a list of the steps to follow to ${searchTodo}`,
      max_tokens: 302,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    },
  };

  const response = await axios.request(options);
  const { data } = response;
  const todo = convertDataToTodo(data);
  return todo;
};
