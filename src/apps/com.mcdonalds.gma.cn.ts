import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: 'McDonalds China v7',
  groups: [
    {
      key: 0,
      name: '应用不必要权限-设备信息',
      desc: '点击[不允许]',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity', // v6 LaunchActivity -> v7 MainActivity
          matches: '[text$="获取您的设备信息"] + * > [text="不允许"]',
          exampleUrls: 'https://e.gkd.li/61e5285d-3593-4059-a04b-b1eb9531b0c9',
          snapshotUrls: 'https://i.gkd.li/i/18967611',
        },
      ],
    },
  ],
});
