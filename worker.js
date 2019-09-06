import { processorTest } from "./processors";
import { queues } from "./queues";
queues.TEST_QUEUE.add(data, options);
queues.TEST_QUEUE.process(processorTest);

queues.TEST_QUEUE.on("completed", (job, result) => {
  console.log("result::", result);
});
