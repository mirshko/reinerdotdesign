import type { RequestHandler } from "@sveltejs/kit";
import { getRecords } from "./_db";

export const get: RequestHandler = async () => {
  return {
    body: await getRecords(),
    headers: {
      "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
    },
  };
};
