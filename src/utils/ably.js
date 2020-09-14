import * as Ably from "ably";
import env from "@/utils/env";

export const AblyClient = new Ably.Realtime(env.VUE_APP_ABLY_KEY);
