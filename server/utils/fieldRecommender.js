const FIELD_RULES = [
  {
    patterns: ['phone', 'mobile', 'tel', 'telephone', '^手机$', '手机号', '电话号'],
    type: 'string',
    format: 'phone',
    label: '手机号',
    rule: { minLength: 11, maxLength: 11 },
    priority: 100
  },
  {
    patterns: ['email', 'mail', 'e-mail', '^邮箱$', '邮件', '电子邮箱'],
    type: 'string',
    format: 'email',
    label: '邮箱',
    rule: { minLength: 6, maxLength: 50 },
    priority: 100
  },
  {
    patterns: ['^name$', 'username', 'user_name', 'fullName', 'full_name', '^姓名$', '名字', '全称'],
    type: 'string',
    format: 'chineseName',
    label: '姓名',
    rule: { minLength: 2, maxLength: 10 },
    priority: 100
  },
  {
    patterns: ['firstName', 'first_name', 'lastName', 'last_name', 'englishName', '英文名'],
    type: 'string',
    format: 'englishName',
    label: '英文名',
    rule: { minLength: 3, maxLength: 30 },
    priority: 100
  },
  {
    patterns: ['idCard', 'id_card', 'idcard', 'id_number', 'idNumber', '身份证', '身份证号', '证件号'],
    type: 'string',
    format: 'idCard',
    label: '身份证号',
    rule: { minLength: 18, maxLength: 18 },
    priority: 100
  },
  {
    patterns: ['address', 'addr', 'location', '^地址$', '住址', '居住地', '所在地'],
    type: 'string',
    format: 'address',
    label: '地址',
    rule: { minLength: 10, maxLength: 100 },
    priority: 100
  },
  {
    patterns: ['company', 'corp', 'companyName', 'company_name', '^公司$', '企业', '单位'],
    type: 'string',
    format: 'company',
    label: '公司名',
    rule: { minLength: 5, maxLength: 50 },
    priority: 100
  },
  {
    patterns: ['title', 'position', 'jobTitle', 'job_title', '^职位$', '职务', '岗位'],
    type: 'string',
    format: 'title',
    label: '职位',
    rule: { minLength: 2, maxLength: 20 },
    priority: 100
  },
  {
    patterns: ['url', 'link', 'website', 'webUrl', 'web_url', '^网址$', '链接', '网页'],
    type: 'string',
    format: 'url',
    label: '网址',
    rule: { minLength: 10, maxLength: 100 },
    priority: 100
  },
  {
    patterns: ['ip', 'ipAddress', 'ip_address', 'IP', 'ipAddr', 'IP地址'],
    type: 'string',
    format: 'ip',
    label: 'IP地址',
    rule: { minLength: 7, maxLength: 15 },
    priority: 100
  },
  {
    patterns: ['uuid', 'guid', 'UUID', 'GUID'],
    type: 'string',
    format: 'uuid',
    label: 'UUID',
    rule: { minLength: 36, maxLength: 36 },
    priority: 100
  },
  {
    patterns: [
      'createTime', 'createdAt', 'created_at', 'create_time',
      'updateTime', 'updatedAt', 'updated_at', 'update_time',
      'deleteTime', 'deletedAt', 'deleted_at', 'delete_time',
      '时间', '创建时间', '更新时间', '修改时间', '删除时间', '生成时间'
    ],
    type: 'date',
    label: '时间',
    rule: {
      min: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19),
      max: new Date().toISOString().slice(0, 19),
      format: 'YYYY-MM-DD HH:mm:ss'
    },
    priority: 100
  },
  {
    patterns: ['birthday', 'birthDate', 'birth_date', 'birth', '^生日$', '出生日期', '出生年月'],
    type: 'date',
    label: '生日',
    rule: {
      min: '1950-01-01T00:00:00',
      max: new Date().toISOString().slice(0, 19),
      format: 'YYYY-MM-DD'
    },
    priority: 100
  },
  {
    patterns: [
      'entryDate', 'entry_date', 'joinDate', 'join_date',
      '入职日期', '入职时间', '加入时间'
    ],
    type: 'date',
    label: '入职日期',
    rule: {
      min: new Date(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19),
      max: new Date().toISOString().slice(0, 19),
      format: 'YYYY-MM-DD'
    },
    priority: 90
  },
  {
    patterns: ['^age$', '年龄', '岁数'],
    type: 'number',
    label: '年龄',
    rule: { min: 0, max: 120, decimal: 0, step: 1 },
    priority: 100
  },
  {
    patterns: ['price', 'amount', 'money', 'cost', '^价格$', '金额', '单价', '费用'],
    type: 'number',
    label: '价格',
    rule: { min: 0, max: 99999.99, decimal: 2, step: 0.01 },
    priority: 100
  },
  {
    patterns: [
      'count', 'num', 'number', 'total', 'quantity', 'qty',
      '^数量$', '总数', '个数', '件数'
    ],
    type: 'number',
    label: '数量',
    rule: { min: 0, max: 99999, decimal: 0, step: 1 },
    priority: 90
  },
  {
    patterns: ['salary', 'wage', 'income', '^工资$', '薪资', '月薪', '年收入'],
    type: 'number',
    label: '薪资',
    rule: { min: 1000, max: 100000, decimal: 2, step: 100 },
    priority: 100
  },
  {
    patterns: ['score', 'point', '^分数$', '积分', '得分'],
    type: 'number',
    label: '分数',
    rule: { min: 0, max: 100, decimal: 0, step: 1 },
    priority: 90
  },
  {
    patterns: [
      'status', 'state', 'isValid', 'is_valid', 'isActive', 'is_active',
      'enabled', 'isEnabled', 'is_enabled', 'flag', '^状态$', '是否有效', '是否启用'
    ],
    type: 'boolean',
    label: '状态',
    rule: { probability: 0.85 },
    priority: 80
  },
  {
    patterns: [
      'isDeleted', 'is_deleted', 'deleted', '^是否删除$', '删除标记',
      'isVip', 'is_vip', 'vip', '^是否VIP$', '是否会员'
    ],
    type: 'boolean',
    label: '标记',
    rule: { probability: 0.1 },
    priority: 90
  },
  {
    patterns: ['gender', 'sex', '^性别$'],
    type: 'enum',
    label: '性别',
    rule: {
      options: ['男', '女', '未知'],
      weights: [0.48, 0.48, 0.04]
    },
    priority: 100
  },
  {
    patterns: ['level', 'grade', '^等级$', '级别', '职级'],
    type: 'enum',
    label: '等级',
    rule: {
      options: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'],
      weights: []
    },
    priority: 80
  },
  {
    patterns: ['department', 'dept', '^部门$', '所属部门'],
    type: 'enum',
    label: '部门',
    rule: {
      options: ['技术部', '产品部', '设计部', '市场部', '销售部', '人力资源部', '财务部', '行政部', '运营部', '客服部'],
      weights: []
    },
    priority: 100
  },
  {
    patterns: ['province', '^省份$', '省'],
    type: 'string',
    label: '省份',
    rule: { minLength: 2, maxLength: 20 },
    priority: 90
  },
  {
    patterns: ['city', '^城市$', '市', '所在城市'],
    type: 'string',
    label: '城市',
    rule: { minLength: 2, maxLength: 20 },
    priority: 90
  },
  {
    patterns: ['district', '^区县$', '区', '县'],
    type: 'string',
    label: '区县',
    rule: { minLength: 2, maxLength: 20 },
    priority: 90
  },
  {
    patterns: ['street', '^街道$', '路', '街'],
    type: 'string',
    label: '街道',
    rule: { minLength: 2, maxLength: 30 },
    priority: 90
  },
  {
    patterns: ['postcode', 'zipCode', 'zip_code', '邮编', '邮政编码'],
    type: 'string',
    label: '邮编',
    rule: { pattern: '{6}d', minLength: 6, maxLength: 6 },
    priority: 90
  },
  {
    patterns: ['orderNo', 'order_no', 'orderId', 'order_id', 'orderSn', 'order_sn', '订单号', '订单编号'],
    type: 'string',
    label: '订单号',
    rule: { pattern: 'ORD{8}d', minLength: 11, maxLength: 11 },
    priority: 100
  },
  {
    patterns: ['userId', 'user_id', 'uid', 'memberId', 'member_id', '用户ID', '会员ID'],
    type: 'number',
    label: '用户ID',
    rule: { min: 1, max: 99999, decimal: 0, step: 1 },
    priority: 100
  },
  {
    patterns: ['productId', 'product_id', 'goodsId', 'goods_id', '商品ID'],
    type: 'number',
    label: '商品ID',
    rule: { min: 1000, max: 99999, decimal: 0, step: 1 },
    priority: 100
  },
  {
    patterns: ['^id$', 'ID'],
    type: 'number',
    label: 'ID',
    rule: { min: 1, max: 99999, decimal: 0, step: 1 },
    priority: 80
  },
  {
    patterns: ['description', 'desc', 'remark', 'comment', '^描述$', '备注', '说明', '简介'],
    type: 'string',
    format: 'sentence',
    label: '描述',
    rule: { minLength: 10, maxLength: 50 },
    priority: 90
  },
  {
    patterns: ['content', 'text', 'body', '^内容$', '正文', '详情'],
    type: 'string',
    format: 'paragraph',
    label: '内容',
    rule: { minLength: 30, maxLength: 200 },
    priority: 90
  },
  {
    patterns: ['category', 'type', 'kind', '^分类$', '类型', '类别'],
    type: 'enum',
    label: '分类',
    rule: {
      options: ['电子产品', '服装', '食品', '家居', '图书', '运动', '其他'],
      weights: []
    },
    priority: 80
  },
  {
    patterns: ['stock', 'inventory', '^库存$', '库存量'],
    type: 'number',
    label: '库存',
    rule: { min: 0, max: 1000, decimal: 0, step: 1 },
    priority: 90
  },
  {
    patterns: ['brand', '^品牌$', '商标'],
    type: 'string',
    label: '品牌',
    rule: { minLength: 2, maxLength: 20 },
    priority: 90
  },
  {
    patterns: ['weight', '^重量$', '体重'],
    type: 'number',
    label: '重量',
    rule: { min: 0, max: 1000, decimal: 2, step: 0.1 },
    priority: 80
  },
  {
    patterns: ['height', '^高度$', '身高'],
    type: 'number',
    label: '高度',
    rule: { min: 0, max: 300, decimal: 1, step: 1 },
    priority: 80
  },
  {
    patterns: ['password', 'pwd', '^密码$'],
    type: 'string',
    label: '密码',
    rule: { pattern: '{8}w', minLength: 8, maxLength: 16 },
    priority: 90
  },
  {
    patterns: ['code', 'no', 'number', '^编号$', '编码', '代号'],
    type: 'string',
    label: '编号',
    rule: { pattern: '{4}C{4}d', minLength: 8, maxLength: 8 },
    priority: 70
  }
];

class FieldRecommender {
  constructor() {
    this.rules = FIELD_RULES;
  }

  matchPattern(fieldName, pattern) {
    const lowerName = fieldName.toLowerCase().trim();
    const lowerPattern = pattern.toLowerCase().trim();

    if (lowerPattern.startsWith('^') && lowerPattern.endsWith('$')) {
      const regex = new RegExp(lowerPattern, 'i');
      return { matched: regex.test(fieldName), score: 100 };
    }

    if (lowerPattern.startsWith('^')) {
      const regex = new RegExp(lowerPattern, 'i');
      return { matched: regex.test(fieldName), score: 90 };
    }

    if (lowerPattern.endsWith('$')) {
      const regex = new RegExp(lowerPattern, 'i');
      return { matched: regex.test(fieldName), score: 90 };
    }

    if (lowerPattern.includes('*') || lowerPattern.includes('?')) {
      const regexPattern = lowerPattern
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');
      const regex = new RegExp(`^${regexPattern}$`, 'i');
      return { matched: regex.test(fieldName), score: 85 };
    }

    if (lowerName === lowerPattern) {
      return { matched: true, score: 100 };
    }

    if (lowerName.startsWith(lowerPattern + '_') || lowerName.startsWith(lowerPattern)) {
      return { matched: true, score: 80 };
    }

    if (lowerName.endsWith('_' + lowerPattern) || lowerName.endsWith(lowerPattern)) {
      return { matched: true, score: 75 };
    }

    if (lowerName.includes('_' + lowerPattern + '_')) {
      return { matched: true, score: 70 };
    }

    if (lowerName.includes(lowerPattern) && lowerPattern.length >= 4) {
      return { matched: true, score: 60 };
    }

    return { matched: false, score: 0 };
  }

  recommend(fieldName) {
    if (!fieldName || !fieldName.trim()) {
      return null;
    }

    const matches = [];

    for (const rule of this.rules) {
      let bestMatchResult = null;
      for (const pattern of rule.patterns) {
        const matchResult = this.matchPattern(fieldName, pattern);
        if (matchResult.matched) {
          if (!bestMatchResult || matchResult.score > bestMatchResult.score) {
            bestMatchResult = matchResult;
          }
        }
      }
      if (bestMatchResult) {
        const totalScore = (rule.priority || 50) + bestMatchResult.score;
        matches.push({
          ...rule,
          matchScore: totalScore,
          patternScore: bestMatchResult.score,
          matchedPattern: rule.patterns[0]
        });
      }
    }

    if (matches.length === 0) {
      return {
        type: 'string',
        label: fieldName,
        rule: {
          format: null,
          pattern: null,
          minLength: 1,
          maxLength: 20,
          options: [],
          prefix: '',
          suffix: ''
        },
        isDefault: true
      };
    }

    matches.sort((a, b) => b.matchScore - a.matchScore);

    const bestMatch = matches[0];
    const result = {
      type: bestMatch.type,
      format: bestMatch.format || null,
      label: bestMatch.label || fieldName,
      rule: this.getDefaultRuleByType(bestMatch.type),
      suggestions: matches.slice(0, 3).map(m => ({
        type: m.type,
        format: m.format || null,
        label: m.label,
        matchScore: m.matchScore
      }))
    };

    if (bestMatch.format) {
      result.rule.format = bestMatch.format;
    }

    if (bestMatch.rule) {
      result.rule = { ...result.rule, ...bestMatch.rule };
    }

    return result;
  }

  getDefaultRuleByType(type) {
    switch (type) {
      case 'string':
        return {
          format: null,
          pattern: null,
          minLength: 1,
          maxLength: 20,
          options: [],
          prefix: '',
          suffix: ''
        };
      case 'number':
        return {
          min: 0,
          max: 100,
          decimal: 0,
          step: 1
        };
      case 'boolean':
        return {
          probability: 0.5
        };
      case 'date':
        return {
          min: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 19),
          max: new Date().toISOString().slice(0, 19),
          format: 'YYYY-MM-DD HH:mm:ss'
        };
      case 'enum':
        return {
          options: [],
          weights: []
        };
      default:
        return {};
    }
  }

  getAllRules() {
    return this.rules;
  }
}

module.exports = FieldRecommender;
