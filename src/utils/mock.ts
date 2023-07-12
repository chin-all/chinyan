export interface IDataInfo {
  show?: boolean
  key: string | number
  image?: string
  name?: string
  phone?: string
  job?: string
  company?: string
  email?: string
  address?: string
}
export const testData = (count: number): IDataInfo[] => {
  const arr = new Array(count).fill('')
  const dataSource = arr.map((item, index) => {
    const randomNum = Math.floor(Math.random() * 100)
    const uuid = generateUUID()
    return {
      key: uuid,
      image: `https://randomuser.me/api/portraits/thumb/men/${randomNum}.jpg`,
      name: generateRandomChineseName(),
      phone: generatePhoneNumber(),
      job: generateRandomJobTitle(),
      company: generateRandomCompanyLtdName(),
      email: generateRandomEmail(),
      address: generateRandomAddress()
    }
  })
  return dataSource
}
// 随机生成唯一标识
export const generateUUID = (): string => {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}
// 随机生成电话号码
export const generatePhoneNumber = (): string => {
  const areaCode = Math.floor(Math.random() * 900) + 100 // 3位区号
  const prefix = Math.floor(Math.random() * 9000) + 1000 // 4位前缀
  const lineNumber = Math.floor(Math.random() * 9000) + 1000 // 4位线路号
  return `${areaCode}-${prefix}-${lineNumber}`
}

// 随机生成姓
export const generateRandomChineseName = (): string => {
  const surnames = [
    '赵',
    '钱',
    '孙',
    '李',
    '周',
    '吴',
    '郑',
    '王',
    '冯',
    '陈',
    '褚',
    '卫',
    '蒋',
    '沈',
    '韩',
    '杨',
    '朱',
    '秦',
    '尤',
    '许',
    '何',
    '吕',
    '施',
    '张',
    '孔',
    '曹',
    '严',
    '华',
    '金',
    '魏',
    '陶',
    '姜',
    '戚',
    '谢',
    '邹',
    '喻',
    '柏',
    '水',
    '窦',
    '章',
    '云',
    '苏',
    '潘',
    '葛',
    '奚',
    '范',
    '彭',
    '郎',
    '鲁',
    '韦',
    '昌',
    '马',
    '苗',
    '凤',
    '花',
    '方',
    '俞',
    '任',
    '袁',
    '柳',
    '酆',
    '鲍',
    '史',
    '唐',
    '费',
    '廉',
    '岑',
    '薛',
    '雷',
    '贺',
    '倪',
    '汤',
    '滕',
    '殷',
    '罗',
    '毕',
    '郝',
    '邬',
    '安',
    '常',
    '乐',
    '于',
    '时',
    '傅',
    '皮',
    '卞',
    '齐',
    '康',
    '伍',
    '余',
    '元',
    '卜',
    '顾',
    '孟',
    '平',
    '黄',
    '和',
    '穆',
    '萧',
    '尹',
    '姚',
    '邵',
    '湛',
    '汪',
    '祁',
    '毛',
    '禹',
    '狄',
    '米',
    '贝',
    '明',
    '臧',
    '计',
    '伏',
    '成',
    '戴',
    '谈',
    '宋',
    '茅',
    '庞',
    '熊',
    '纪',
    '舒',
    '屈',
    '项',
    '祝',
    '董',
    '梁'
  ]
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)]
  const randomFirstName = getRandomChineseFirstName()
  return randomSurname + randomFirstName
}
// 随机生成名
export const getRandomChineseFirstName = (): string => {
  const firstName = [
    '伟',
    '芳',
    '娜',
    '秀英',
    '敏',
    '静',
    '儿',
    '强',
    '磊',
    '洋',
    '艳',
    '勇',
    '杰',
    '娟',
    '涛',
    '明',
    '超',
    '秀兰',
    '霞',
    '平',
    '刚',
    '桂英',
    '博',
    '秀珍',
    '凯',
    '桂芳',
    '英',
    '华',
    '国强',
    '秀英',
    '建华',
    '文',
    '军',
    '玉兰',
    '红',
    '玲',
    '建国',
    '兰英',
    '玉梅',
    '金',
    '文华',
    '丹',
    '丽娟',
    '立',
    '红梅',
    '欣',
    '晶',
    '晓华',
    '曼',
    '淑珍',
    '成',
    '晓燕',
    '伟',
    '文',
    '丽华',
    '亮',
    '露',
    '敏华',
    '晶晶',
    '涛',
    '静静',
    '东',
    '琴',
    '健',
    '宇',
    '红霞',
    '云',
    '欢',
    '雷',
    '亚男',
    '亚军',
    '亚兰',
    '秀华',
    '亚华',
    '亚娟',
    '亚军',
    '伟男',
    '兰芳',
    '亚萍',
    '亚丽',
    '亚秀',
    '亚洁',
    '亚平',
    '亚伟',
    '亚超',
    '亚杰',
    '亚芳',
    '亚莉',
    '亚勇',
    '亚杰',
    '伟华',
    '淑婷',
    '亚洲',
    '淑琴',
    '淑勤',
    '淑刚',
    '淑美',
    '淑辉',
    '淑丹',
    '淑云',
    '淑文',
    '淑冰',
    '淑琳',
    '淑娜',
    '淑慧',
    '淑宇',
    '淑磊',
    '淑霞',
    '淑平',
    '淑涛',
    '淑兵',
    '亚桂',
    '亚艳',
    '亚明',
    '亚凯',
    '秀超',
    '秀峰',
    '秀玲',
    '秀勤',
    '秀平',
    '秀倩',
    '秀建',
    '秀琼',
    '秀艳',
    '秀燕',
    '秀松',
    '秀文',
    '秀伟',
    '秀波',
    '秀婷',
    '秀明',
    '秀刚',
    '秀秀',
    '秀芬',
    '丽杰',
    '丽刚',
    '丽琴',
    '丽平',
    '丽辉',
    '丽瑞',
    '丽霞',
    '丽云',
    '丽文',
    '丽玲',
    '丽美',
    '丽辉',
    '丽娟',
    '丽燕',
    '丽杰',
    '丽敏',
    '丽冰',
    '丽萍',
    '楚慧',
    '楚红',
    '楚辉',
    '楚莉',
    '楚萍',
    '楚婷',
    '楚芳',
    '楚丽',
    '楚莉',
    '楚洁',
    '楚平',
    '楚伟',
    '楚超',
    '楚杰',
    '亚芳',
    '亚莉',
    '楚勇',
    '楚杰'
  ]
  return firstName[Math.floor(Math.random() * firstName.length)]
}
// 随机生成职务
export const generateRandomJobTitle = (): string => {
  const jobTitles = [
    '软件工程师',
    '数据分析师',
    '产品经理',
    'UI设计师',
    '市场营销经理',
    '销售代表',
    '财务分析师',
    '人力资源专员',
    '运营经理',
    '项目经理',
    '客户服务代表',
    '电商运营专员'
  ]
  const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)]
  return randomJobTitle
}
// 随机生成公司
export const generateRandomCompanyLtdName = (): string => {
  const prefixes = ['ABC', 'XYZ', 'Acme', 'Global', 'Super', 'Tech', 'Digital', 'Elite', 'Innovative']
  const suffixes = [
    '股份有限公司',
    '集团有限公司',
    '控股有限公司',
    '科技股份有限公司',
    '实业股份有限公司',
    '工程有限公司',
    '金融控股有限公司',
    '资本集团有限公司'
  ]
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]
  return `${randomPrefix}${randomSuffix}`
}
// 随机生成email
export const generateRandomEmail = (): string => {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com', 'test.com', 'domain.com']
  const randomString = Math.random().toString(36).substring(2, 8) // 随机生成一个字符串作为用户名
  const randomDomain = domains[Math.floor(Math.random() * domains.length)] // 随机选择一个域名
  return `${randomString}@${randomDomain}`
}
// 随机生成居住地址
export const generateRandomAddress = (): string => {
  const provinces = [
    '北京市',
    '上海市',
    '天津市',
    '重庆市',
    '广东省',
    '江苏省',
    '浙江省',
    '山东省',
    '河南省',
    '河北省',
    '湖南省',
    '湖北省',
    '陕西省',
    '福建省',
    '四川省',
    '安徽省',
    '云南省',
    '广西壮族自治区',
    '江西省',
    '黑龙江省',
    '辽宁省',
    '山西省',
    '贵州省',
    '吉林省',
    '新疆维吾尔自治区',
    '甘肃省',
    '海南省',
    '宁夏回族自治区',
    '青海省',
    '西藏自治区',
    '香港特别行政区',
    '澳门特别行政区',
    '台湾省'
  ]
  const cities = [
    '北京市',
    '上海市',
    '天津市',
    '重庆市',
    '广州市',
    '深圳市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市',
    '西安市',
    '福州市',
    '厦门市',
    '长沙市',
    '郑州市',
    '石家庄市',
    '长春市',
    '沈阳市',
    '太原市',
    '贵阳市',
    '南宁市',
    '南昌市',
    '哈尔滨市',
    '济南市',
    '青岛市',
    '大连市',
    '宁波市',
    '苏州市',
    '无锡市',
    '昆明市',
    '兰州市'
  ]
  const districts = [
    '东城区',
    '西城区',
    '朝阳区',
    '海淀区',
    '丰台区',
    '石景山区',
    '通州区',
    '顺义区',
    '房山区',
    '大兴区',
    '昌平区',
    '怀柔区',
    '平谷区',
    '密云区',
    '延庆区'
  ]
  const randomProvince = provinces[Math.floor(Math.random() * provinces.length)]
  const randomCity = cities[Math.floor(Math.random() * cities.length)]
  const randomDistrict = districts[Math.floor(Math.random() * districts.length)]
  const randomStreet = Math.floor(Math.random() * 100) + 1 // 随机生成1到100之间的数字作为街道号

  return `${randomProvince}${randomCity}${randomDistrict}${randomStreet}号`
}
