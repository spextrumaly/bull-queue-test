import url from "url";

import express from "express";
import Arena from "bull-arena";

import { TEST_QUEUE } from "./queues";

const app = express();

app.use(
  "/",
  Arena(
    {
      queues: [
        {
          name: TEST_QUEUE,
          hostId: "Tester",
          redis: {
            host: "0.0.0.0",
            port: 6379
          }
        }
      ]
    },
    {
      basePath: "/arena",
      disableListen: true
    }
  )
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
