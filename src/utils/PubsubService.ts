/**
 * @description 发布订阅对象
 * publish 发布 subscribe 订阅 clearSubsByTopic 清除 clearAllSub 清除所有
 * 使用：
 * PubsubService.publish("eventName", { key: value })
 * PubsubService.subscribe("eventName", (params) => {
 *   console.log(params) // { key: value }
 * })
 * PubsubService.clearSubsByTopic("eventName")
 */
export const PubsubService = (function () {
  const topics: any = {};
  // 发布事件
  function publish(topic: string, data: any) {
    if (topics[topic]) {
      for (const fn of topics[topic]) {
        fn(data);
      }
    } else {
      topics[topic] = [];
    }
  }
  // 订阅事件
  function subscribe(topic: string, callback: (params?: any) => void) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    let exist = false;
    for (const fn of topics[topic]) {
      if (fn == callback) {
        exist = true;
      }
    }
    if (exist) return;
    topics[topic].push(callback);
    return function unsubscribe() {
      const index = topics[topic].indexOf(callback);
      topics[topic].splice(index, 1);
    };
  }
  // 清除某个事件
  function clearSubsByTopic(topic: string) {
    if (topics[topic]) {
      topics[topic] = [];
    }
  }
  // 清空所有订阅
  function clearAllSub() {
    for (const key in topics) {
      topics[key] = [];
    }
  }

  return {
    publish,
    subscribe,
    clearSubsByTopic,
    clearAllSub,
  };
})();
