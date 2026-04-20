import type { Service, NewsItem } from './types';

export const COMPANY_INFO = {
  name: '株式会社アイズリンク',
  enName: 'Is Link Co., Ltd.',
  address: '〒183-0005 東京都府中市若松町1-2-7 森下ビル1階',
  ceo: '佐々木 雄生也',
  established: '2012年11月22日',
  capital: '7,000千円',
  license: '東京都知事許可 第139608号',
  constructionLicense: '東京都知事許可（般 - 4）第139608号（建築一式/土木一式/解体一式 他）',
  securityLicense: '東京都公安委員会 第30004921号',
  realEstateLicense: '東京都知事（1）第106674号',
  services:
    'ビルメンテナンス業、再生可能エネルギーOM事業、一般建築業、地質調査・地盤改良事業、モータースポーツ事業',
  employees: '120名 (2024年10月現在)',
  phone: '042-306-9082',
  email: 'info@islink.co.jp',
};

export const SERVICES: Service[] = [
  {
    id: 'building-maintenance',
    path: '/business/building-maintenance',
    heroImage:
      'https://i.ibb.co/tMWBc2p1/2716958-m.jpg',
    title: 'ビルメンテナンス業',
    content: `建物の資産価値を長期にわたって維持・向上させることを目的とした総合的な管理サービスを提供しています。あらゆる種類の建物に対応し、お客様が安心して施設を利用できる環境を創造します。

日常清掃や定期清掃といった衛生管理から、空調設備、給排水設備、電気設備などの設備管理、さらには建物の老朽化を防ぐための大規模修繕計画の立案・実行まで多岐にわたります。また、LCC（ライフサイクルコスト）の最適化を視点に入れたコンサルティングを行い、オーナー様の収益最大化をサポートします。`,
  },
  {
    id: 'renewable-energy',
    path: '/business/renewable-energy',
    heroImage:
      'https://i.ibb.co/j9gm6v7w/2026-04-17-0-15-46.png',
    title: '再生可能エネルギーOM事業',
    content: `太陽光発電所や風力発電所などのパフォーマンスを最大化し、安定した発電を保証するためのサービスです。大規模なメガソーラー施設を中心に、設備の設計寿命を通じて最大の収益を生み出すための包括的な運用・保守管理サービスを提供しています。

改正再エネ法への適合確認から、稼働状況のチェック、定期的な法定点検、さらにはパネルの洗浄や敷地内の除草作業といった物理的なメンテナンスまでを一貫して引き受けます。故障の兆候を早期に発見する「予防保全」に注力することで、ダウンタイムを最小限に抑え、発電ロスを徹底的に排除します。`,
  },
  {
    id: 'construction',
    path: '/business/construction',
    heroImage:
      'https://i.ibb.co/rKLfcRFj/27726987-s.jpg',
    title: '一般建築業',
    content: `「安全第一主義」を基本とし、新築からリノベーション、電力インフラ整備、そして建物の寿命を終えた際の解体工事まで、全ての設計・施工管理を一貫して手掛ける総合的なサービスです。`,
  },
  {
    id: 'geotechnical',
    path: '/business/geotechnical',
    heroImage:
      'https://i.ibb.co/NdkVVRSP/4615028-s.jpg',
    title: '地質調査・地盤改良事業',
    content: `建設プロジェクトの土台となる「地盤の安全性」と「適応性」を科学的に評価し、必要に応じて強化する専門性の高いサービスです. 詳細なデータを取得するため、ボーリング調査、SWS試験、各種サンプリングといった多角的な地質調査を実施します

地層の構成や地下水位、過去の被災履歴などを総合的に分析し、液状化リスクや土壌汚染の可能性まで含めた詳細なリスク診断を行います. その結果に基づき、最適な地盤改良工法（鋼管杭、柱状改良、表層改良など）を提案・施工することで、不動産価値の守護者として、建物の不等沈下や地震時の被害を未然に防ぎます.`,
  },
  {
    id: 'motorsports',
    path: '/business/motorsports',
    heroImage:
      'https://i.ibb.co/qM6p1TVY/2026-04-16-23-58-54.png',
    title: 'モータースポーツ事業',
    content: `一般社団法人モトライダースサポート（MRS）をはじめ様々な企業・団体との連携やレーシングチーム「I’s RACING」の運営を通じて、業界の発展と人材育成に貢献しています. サーキット走行会の運営やレンタルバイク事業、各種イベントなどを展開し、モータースポーツが持つ無限の可能性を社会全体の活力へと変えていきます。また並行して、二輪による各地域の社会貢献活動も行なっています。`,
    links: [
      {
        label: '一般社団法人MRSモトライダースサポート 公式サイト',
        url: 'https://www.mrs.or.jp/',
      },
      {
        label: 'I’s Racing',
        url: 'https://is-racing.staticrun.app/',
      },
      {
        label: 'Polariss',
        url: 'https://www.thingsline.co.jp/',
      },
      {
        label: '一般社団法人Peacemaker',
        url: 'https://www.peace-maker.org/',
      },
      {
        label: 'レースサポート',
        url: '/business/motorsports/race-support',
      },
    ],
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    date: '2024.11.01',
    category: 'リリース',
    title:
      '再生可能エネルギーOM事業において、遠隔監視システムを最新バージョンに更新しました。',
  },
  {
    date: '2024.10.15',
    category: '採用情報',
    title:
      '地質調査部門の技術者採用を開始しました。詳細は採用ページをご覧ください。',
  },
  {
    date: '2024.09.20',
    category: 'イベント',
    title:
      'モータースポーツチーム「I’s Racing」が次期レースへの参戦を発表しました。',
  },
];
