type ICallback = Function | null;

/**
 * 防止xss注入的方法
 * .htmlEncode 转码 .htmlDecode 解码
 * @param str 传入的需转码解码内容
 */
export const preventXSS = {
  htmlEncode: (str: string): string => {
    let s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
  },
  htmlDecode: (str: string): string => {
    let s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "'");
    s = s.replace(/&quot;/g, '"');
    return s;
  },
};

/**
 * 判断字符串是否为json格式
 * @param str 传入的需检测的内容
 */
export const isJsonString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

/**
 * 阻止页面关闭或刷新
 * @param callback 传入的回调函数，可不传
 * 注：确认对话框不可以显示自定义字符串
 */
export const setUnloadHandler = (callback?: ICallback) => {
  // 为避免重复注册，在注册前移除之前的
  window.removeEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
    return "";
  });
  // 进行注册
  window.addEventListener("beforeunload", (e) => {
    callback?.();
    e.preventDefault();
    e.returnValue = "";
    return "";
  });
};

/**
 * 判断页面是否是初次加载
 * @return true 首次加载 false 重新加载
 */
export const isFirstLoadPage = () => {
  if (sessionStorage.getItem("pageLoaded") === "pageLoaded") {
    return false;
  } else {
    sessionStorage.setItem("pageLoaded", "pageLoaded");
    return true;
  }
};

/**
 * 计算字符串所占字节
 * @param str 传入的字符串
 */
export const getStringByte = (str: string) => {
  let count = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    count += str.charCodeAt(i) <= 128 ? 1 : 2;
  }
  return count;
};

/**
 * 随机生成颜色
 * @param type 类型 可不填 rgba表示随机透明度，或传数字，范围（0,1）
 * @return 返回随机颜色
 */
export const getRandomColor = (type?: "rgba" | number) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const transparency = Math.random().toFixed(2);
  if (type || type === 0) {
    const opeacity = typeof type === "number" ? type : transparency;
    return `rgba(${r},${g},${b},${opeacity})`;
  }
  return `rgb(${r},${g},${b})`;
};

/**
 * 生成唯一标识
 * @return 返回唯一标识
 */
export const getUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .replace(/\-/g, "");
};

/**
 * 获取url中的参数
 * @param search 要查找的参数，字符串数组或字符串
 * @return 返回查找的参数，或返回键值对
 */
export const GetUrlParameter = (search: Array<string> | string) => {
  const url = window.location.search;
  const needUrl = decodeURIComponent(url);
  const vars = needUrl.substr(1).split("&");
  const valueKey: any = {};
  vars.forEach((item, i) => {
    const pair = item.split("=");
    valueKey[pair[0]] = pair[1];
  });
  if (typeof search === "string") {
    return valueKey[search] || null;
  } else {
    const result: any = {};
    search.forEach((item) => {
      if (valueKey[item]) {
        result[item] = valueKey[item];
      } else {
        result[item] = null;
      }
    });
    return result;
  }
};
