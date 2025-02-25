import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 4698,
  name: 'PYY - Personal Rules',
  version: 1,
  author: 'Patrick Young',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/kmahyyg/gkd-rules-personal',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
