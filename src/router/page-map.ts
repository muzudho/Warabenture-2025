/**
 * TODO: 手入力は大変なので、自動生成するデータ・ファイルにしたい。
 * NOTE: 動的インポートを使ったら、サーバーサイドのプリレンダリングでエラーになるということがあった。そこで、静的インポートを使うことにする。
 */

import Blog20250524Sat from '@/pages/blog/2025-05/24-sat.vue';
import Blog20250601Sun from '@/pages/blog/2025-06/01-sun.vue';
import Blog20250602Mon from '@/pages/blog/2025-06/02-mon.vue';    
import Blog20250603Tue from '@/pages/blog/2025-06/03-tue.vue';
import Blog20250604Wed from '@/pages/blog/2025-06/04-wed.vue';
import Blog20250605Thu from '@/pages/blog/2025-06/05-thu.vue';
import Blog20250612Thu from '@/pages/blog/2025-06/12-thu.vue';
import Blog20250615Sun from '@/pages/blog/2025-06/15-sun.vue';
import Blog20250619Thu from '@/pages/blog/2025-06/19-thu.vue';
import Blog20250712Sat from '@/pages/blog/2025-07/12-sat.vue';
import Blog20250725Fri from '@/pages/blog/2025-07/25-fri.vue';
import Blog20250811Mon from '@/pages/blog/2025-08/11-mon.vue';
import Blog20250910Wed from '@/pages/blog/2025-09/10-wed.vue';
import Blog20250911Thu from '@/pages/blog/2025-09/11-thu.vue';
import Blog20250912Fri from '@/pages/blog/2025-09/12-fri.vue';

export const pageMap : Readonly<Record<string, any>> = {
    '2025-05/24-sat': Blog20250524Sat,
    '2025-06/01-sun': Blog20250601Sun,
    '2025-06/02-mon': Blog20250602Mon,
    '2025-06/03-tue': Blog20250603Tue,
    '2025-06/04-wed': Blog20250604Wed,
    '2025-06/05-thu': Blog20250605Thu,
    '2025-06/12-thu': Blog20250612Thu,
    '2025-06/15-sun': Blog20250615Sun,
    '2025-06/19-thu': Blog20250619Thu,
    '2025-07/12-sat': Blog20250712Sat,
    '2025-07/25-fri': Blog20250725Fri,
    '2025-08/11-mon': Blog20250811Mon,
    '2025-09/10-wed': Blog20250910Wed,
    '2025-09/11-thu': Blog20250911Thu,
    '2025-09/12-fri': Blog20250912Fri,
};
