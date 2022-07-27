const messages = {
  languages_zh: '简体中文',
  languages_en: 'English',
  slogan: '无处不在的 P2P 兑换网络，100% 永续运行和 0% 抢跑损失',
  coming_soon: '敬请期待',
  white_paper: '白皮书',
  advantage_1_title: '抗审查点对点网络',
  advantage_1_desc: '完全分布式的 P2P 网络，任何人都可以部署 Router 和 LP 节点，具备抗审查的能力，无法被中断和关闭。',
  advantage_2_title: '无限的扩展能力',
  advantage_2_desc: '每个 Router 都可连接上百个 LP 节点 ，为上万的用户提供兑换服务。网络中可以部署无数个 Router，提供分布式价格计算和订单生成。',
  advantage_3_title: '灵活的配置',
  advantage_3_desc: '网络协议可以支持多种类型的 AMM 做市曲线，LP 节点可以根据自己的需求选择做市曲线。',
  advantage_4_title: '无MEV',
  advantage_4_desc: '用户签署确定性 bundle 的订单，明确每一笔收入和支出，机器人无法进行 MEV 攻击，无法盗用用户资产进行套利。',
  advantage_5_title: '资产自托管',
  advantage_5_desc: '密钥和资产保存在 LP 自己手中，攻击向量分散，资产安全性极高。无需担心复杂的智能合约代码实现风险，LP 节点仅按照最简单的数学公式进行报价和签署，简单易于安全审计。',
  milestone: '里程碑',
  milestone_1_1: '去信任化的节点网络',
  milestone_1_2: '有限的 LP 节点（需持有 NFT）',
  milestone_1_3: 'LP 成员获得更多 PSN 奖励',
  milestone_1_4: 'PSN 不流通',
  milestone_2_1: '去准入的节点网络',
  milestone_2_2: '更多的 LP 节点（需质押 PSN）',
  milestone_2_3: '进行 PSN 空投',
  milestone_2_4: 'PSN 开始流通',
  milestone_3_1: '完全分布式的网络',
  milestone_3_2: '更多的 Router 节点（需持有 NFT）',
  milestone_3_3: '更强大的网络性能',
  milestone_3_4: 'Router 之间共享 LP 信息',
  milestone_4_1: '无处不在的 Permaswap 网络',
  milestone_4_2: '无限的 Router 节点（需质押大量的 PSN）',
  milestone_4_3: '无穷无尽的分布式计算能力',
  milestone_4_4: '完全通过 PSN 进行治理',
  roadmap: '路线图',
  roadmap_1_1: '发布 Permaswap Precursor 网络',
  roadmap_1_2: '开启首批 NFT 流动性挖矿',
  roadmap_1_3: '将跨链支持 AR、ETH、PST、ERC20 等多种代币',
  roadmap_2_1: '多链资产接入',
  roadmap_2_2: '创建 PermaDAO 通过 DAO 进行社区治理',
  roadmap_3_1: '启动 Forerunner 网络',
  roadmap_3_2: '开启 PSN Staking 流动性挖矿',
  roadmap_3_3: 'PSN 正式开始流通',
  roadmap_4_1: '启动 Prophet 网络，开启多 Routers 时代',
  roadmap_5_1: '启动 Flood 网络，完成 Permaswap Network 完全去中心化治理和运营',
  nft: {
    certified_nft: '认证的 NFT',
    certified_nft_desc: 'everPay NFT 持有者可参与 Permaswap 先驱者挖矿',
    discover_nft: '探索并收集认证的 NFTs',
    discover_nft_desc: '收藏认证 NFTs（在 everPay 拍卖中首发的 NFTs）, 可参与 Permaswap 挖矿！',
    discover_now: '探索',
    auction: '拍卖',
    hot_nfts: '热门 NFTs',
    view_more: '更多',
    price: '价格',
    owned_by: '拥有者',
    items: '项目数',
    tab_items: '项目',
    tab_explore: '探索',
    owners: '持有者',
    floor_price: '地板价',
    nft_on_sale: '在售的 NFT',
    price_low_to_high: '价格：从低到高',
    price_high_to_low: '价格：从高到低',
    sort_by: '价格排序',
    reset: '重置',
    nft_name: 'NFT 名称',
    state: '状态',
    holder: '持有者地址',
    state_on_sale: '在售中',
    state_bidding: '去出价',
    state_under_bid: '出价中',
    collect: '收起',
    click_to_see_more: '点击查看系列下每个NFT状态'
  },
  make_offer: '去出价',
  load_more: '加载更多',
  no_more: '到底了',
  search: '查询...',
  searching: '搜索中...',
  no_results: '查无结果',
  network_err: '网络不稳定，请稍后重试',
  price_high_low: '价格降序',
  price_low_high: '价格升序',
  recently_listed: '最近上市',
  all_status: '所有状态',
  buy_now: '去购买',
  on_auction: '去拍卖',
  back: '返回',
  nft_info: {
    'confi-city-everpay': 'Conflux 是一条 Layer1 公链，跨越国界和协议连接去中心化的经济，采用 PoW/PoS 混合运行的机制。它采用独特的 "树状图 "共识机制--动态区块结构，在不牺牲去中心化和安全性的前提下，促进 3000-6000 TPS 的处理。作为中国唯一符合监管的，无需许可的公链，Conflux 为在亚洲本地或希望进入亚洲市场的项目提供支持。Conflux 的目标是连接去中心化经济体，以加强全球 DeFi 生态系统发展。',
    'ardrive-everpay': '这次拍卖是由 everPay 与 ArDrive 联合推出。ArDrive 是建立在 Arweave 区块链上的去中心化永久存储应用。得益于 Arweave 所提供的足以改变行业规则的技术， 让任何类型的数据可以保存至少 200 年，甚至更久。一旦你最重要的文件通过 ArDrive 上传，它们将成为你永久的记忆。 来自 ArDrive 社区的 =XaviZedd  为此次拍卖创作了龙龟 NFTs。',
    'inner-motion': '数字艺术品牌「异星艺想」，是为满足艺术家意志能够自由表达的需要而诞生的。其所有艺术作品的创作灵感来源于将生活、色彩、声音与神圣几何概念之间的结合。 几何存在于我们周围的一切事物中，从最小的物体或生物到最大的天文力量，在形状、比例和对称性之间总是存在着平衡，运用几何图形的各种结构来为艺术品寻找内在的平衡即是「异星艺想」的创作理念。「异星艺想」在创办以来，与来自中国和欧洲各地的 DJ 以及音乐节合作，通过社交媒体、艺术展览和音乐品牌来分享其艺术作品。“享受生活，分享与关爱” 是「异星艺想」的创作哲学。',
    'nueps-microplants': 'Noelia Puig（1995年，西班牙）是一名数字内容创作者，使用笔名 nueps 进行艺术创作。对荒谬、如梦和超现实艺术作品的兴趣，使她走上了创作的道路。nueps 擅长使用荧光色和数字处理把自然世界的事物转化为高度抽象的版本。她创造了一个神奇的宇宙，从科幻的生物到最日常、平凡物体的重塑。',
    'year-of-the-tiger-nfts': 'BitKeep and everPay\'s new collection is ready to go! Someone born in a tiger year is kind, adventurous and enthusiastic. Happy year of the Tiger to you all!',
    breakdaonbdeverpay: '💥 BREAKING all the Boundaries & Getting entirely FREEDOM! 💥🐼 Breaking Panda is a Web 3 trendy art Ip, dynamic combination of 🎨 「cryto art」, 「visual & physical trendy art fashion brand」,🎮 「 immersive social AR experience」, 🎸 「generative music」, 「urban sculptures」 and 「community driven」🎋 . We grant Breaking Panda fans CC0 license and open intellectual property rights, you could do everything you want, such as nft recreation, physical commodity production.',
    oldgodsremastered: '',
    'winston-family': 'Winston is arweaves mascot and the smallest unit of the arweave token. everPay designers present the second batch of NFTs for Arweave Winston Family.',
    'winston-ever': 'Winston is arweaves mascot and the smallest unit of the arweave token. everPay designers present the first NFT for Arweave Winston.',
    'wonderland-and-the-funny-fellows': 'They once lived happily on the planet Wonderland. Now the doomsday is coming, will they survive?',
    'everpay-other': ''
  }
}

export default messages
