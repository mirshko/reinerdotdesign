import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const records = new Array(100).fill("").map((_, i) => `Record${i}`);

  return {
    body: records,
  };
};
