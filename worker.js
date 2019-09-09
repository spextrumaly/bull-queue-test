import { processorTest } from "./processors";
import { queues } from "./queues";

const data = {
  key: "bullTestRepeat"
};

const options = {
  repeat: {
    limit: 10,
    every: 10000
  },
  attempts: 3
};

queues.TEST_QUEUE.add("test", data, options);
queues.TEST_QUEUE.process("test", processorTest);

queues.TEST_QUEUE.on("completed", (job, result) => {
  console.log("result::", result);
});
