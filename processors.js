import redis from "redis";
export const client = redis.createClient(); // this creates a new client By default redis.createClient() will use 127.0.0.1 and port 6379.
export const processorTest = async job => {
  client.on("connect", function() {
    console.log("Redis client connected");
  });
  client.on("error", function(err) {
    console.log("Something went wrong " + err);
  });
  job.progress(100);
  return await executeRedisCommand(client, job);
};

const executeRedisCommand = (client, job) =>
  new Promise((resolve, reject) => {
    client.INCR(`${job.data.key}`, (error, result) => {
      resolve(result);
    });
  });
