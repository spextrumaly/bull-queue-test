import Queue from "bull";
export const TEST_QUEUE = "TEST_QUEUE";
export const queues = {
  [TEST_QUEUE]: new Queue(TEST_QUEUE, "0.0.0.0")
};

const data = {
  key: "testKey"
};

const options = {
  repeat: {
    limit: 10,
    every: 10000
  },
  attempts: 3
};
