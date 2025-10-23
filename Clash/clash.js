function main(config) {
  const proxies = config.proxies || [];

  // === 1. 创建策略组 ===
  const proxyGroups = [
    {
      name: "节点选择",
      type: "select",
      proxies: [
        "自动选择",
        "负载均衡",
        "DIRECT",
        ...proxies.map(p => p.name), // 添加所有节点
      ],
    },
    {
      name: "自动选择",
      type: "url-test",
      "include-all": true,
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
      tolerance: 50,
    },
    {
      name: "故障转移",
      type: "fallback",
      "include-all": true,
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
      tolerance: 50,
    },
  ];

  // === 2. 定义规则集 ===
  const ruleProviders = {
    LocalAreaNetwork: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list",
      path: "./ruleset/LocalAreaNetwork.list",
    },
    UnBan: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list",
      path: "./ruleset/UnBan.list",
    },
    GoogleCN: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list",
      path: "./ruleset/GoogleCN.list",
    },
    SteamCN: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/SteamCN.list",
      path: "./ruleset/SteamCN.list",
    },
    ChinaDomain: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list",
      path: "./ruleset/ChinaDomain.list",
    },
    ChinaCompanyIp: {
      type: "http",
      behavior: "ipcidr",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list",
      path: "./ruleset/ChinaCompanyIp.list",
    },
    Telegram: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list",
      path: "./ruleset/Telegram.list",
    },
    ProxyMedia: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list",
      path: "./ruleset/ProxyMedia.list",
    },
    ProxyLite: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyLite.list",
      path: "./ruleset/ProxyLite.list",
    },
    YouTube: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list",
      path: "./ruleset/YouTube.list",
    },
    Netflix: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list",
      path: "./ruleset/Netflix.list",
    },
    DisneyPlus: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/DisneyPlus.list",
      path: "./ruleset/DisneyPlus.list",
    },
    TikTok: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/TikTok.list",
      path: "./ruleset/TikTok.list",
    },
    Spotify: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Spotify.list",
      path: "./ruleset/Spotify.list",
    },
    Instagram: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Instagram.list",
      path: "./ruleset/Instagram.list",
    },
    Facebook: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Facebook.list",
      path: "./ruleset/Facebook.list",
    },
    Twitter: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Twitter.list",
      path: "./ruleset/Twitter.list",
    },
    OpenAI: {
      type: "http",
      behavior: "classical",
      format: "text",
      interval: 86400,
      url: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAI.list",
      path: "./ruleset/OpenAI.list",
    },
  };

  // === 3. 定义规则顺序 ===
  const rules = [
    "RULE-SET,LocalAreaNetwork,DIRECT",
    "RULE-SET,UnBan,DIRECT",
    "RULE-SET,GoogleCN,DIRECT",
    "RULE-SET,SteamCN,DIRECT",
    "RULE-SET,ChinaDomain,DIRECT",
    "RULE-SET,ChinaCompanyIp,DIRECT",
    "RULE-SET,Telegram,节点选择",
    "RULE-SET,ProxyMedia,节点选择",
    "RULE-SET,ProxyLite,节点选择",
    "RULE-SET,YouTube,节点选择",
    "RULE-SET,Netflix,节点选择",
    "RULE-SET,DisneyPlus,节点选择",
    "RULE-SET,TikTok,节点选择",
    "RULE-SET,Spotify,节点选择",
    "RULE-SET,Instagram,节点选择",
    "RULE-SET,Facebook,节点选择",
    "RULE-SET,Twitter,节点选择",
    "RULE-SET,OpenAI,节点选择",
    "GEOIP,CN,DIRECT",
    "MATCH,节点选择",
  ];

  // === 4. 应用修改 ===
  config["proxy-groups"] = proxyGroups;
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  config.proxies = proxies;

  return config;
}

