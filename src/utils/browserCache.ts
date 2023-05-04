type ECacheType = "sessionStorage" | "localStorage";
const storageType = ["sessionstorage", "localstorage"];
/**
 * 设置缓存的方法，可将数据存储在浏览器的 sessionStorage 或 localStorage 中
 * 共有 get、set 、remove 和 clear 四个方法用于操作缓存
 * @param type      设置的缓存类型
 * @param key       要存储或获取的键名
 * @param target    设置的内容，{ key: value }
 * 例:
 *      DataCacheService.set("localStorage", { "test-save": "12345678" });
 *      const test = DataCacheService.get("localStorage", "test-save");
 *      console.log(test);
 */
export const DataCacheService = {
  get(type: ECacheType, key: string | string[]): any {
    const lowerType = type.toLocaleLowerCase();
    let result: any = {};
    // 获取sessionStorage或locationStorage的缓存数据
    if (storageType.includes(lowerType)) {
      const targetGetter =
        lowerType === "sessionstorage" ? sessionStorage : localStorage;
      if (typeof key === "string") {
        result = targetGetter.getItem(key);
      } else {
        result = {};
        key.forEach((item) => {
          result[item] = targetGetter.getItem(item);
        });
      }
      return result;
    }
  },
  set(type: ECacheType, target: object): void {
    const lowerType = type.toLocaleLowerCase();
    // 设置sessionStorage或locationStorage的缓存数据
    if (storageType.includes(lowerType)) {
      const targetGetter =
        lowerType === "sessionstorage" ? sessionStorage : localStorage;
      Object.keys(target).forEach((key) => {
        targetGetter.setItem(key, target[key]);
      });
    }
  },
  remove(type: ECacheType, key: string | string[]): void {
    const lowerType = type.toLocaleLowerCase();
    // 删除sessionStorage或locationStorage的缓存数据
    if (storageType.includes(lowerType)) {
      const targetGetter =
        lowerType === "sessionstorage" ? sessionStorage : localStorage;
      if (typeof key === "string") {
        targetGetter.removeItem(key);
      } else {
        key.forEach((item) => {
          targetGetter.removeItem(item);
        });
      }
    }
  },
  clear(type: ECacheType): void {
    const lowerType = type.toLocaleLowerCase();
    // 清除sessionStorage或locationStorage的缓存数据
    if (storageType.includes(lowerType)) {
      const targetGetter =
        lowerType === "sessionstorage" ? sessionStorage : localStorage;
      targetGetter.clear();
    }
  },
};
