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
export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

/**
 * 阻止页面关闭或刷新 （未测试）
 * @param callback 传入的回调函数，可不传
 */
export const stopPageCloseOrRefresh = (callback: any = null) => {
  const handler = (e) => {
    if (callback()) {
      e.preventDefault();
      e.returnValue = "";
      return "";
    }
  };
  window.addEventListener("beforeunload", handler);
  return () => {
    window.removeEventListener("beforeunload", handler);
  };
};
