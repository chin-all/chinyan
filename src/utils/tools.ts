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
