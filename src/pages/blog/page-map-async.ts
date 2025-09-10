/**
 * FIXME: この .ts ファイルを置いているだけで、プリレンダリングでエラーになるようだ。プリレンダリング・エラー不具合調査中。
 */

// ##############
// # インポート #
// ##############

import { defineAsyncComponent } from 'vue';


// ################
// # オブジェクト #
// ################

// ++++++++++++++++++++++++++++++++++++
// + オブジェクト　＞　ページ・マップ +
// ++++++++++++++++++++++++++++++++++++
//
// import 文のパスは Vite が静的解析するので変数は使えない。そこでマップ形式で予め持っておく。
//
export function getPageComponentByKeyAsync(key: string) : any | null {
    if (key in pageMapAsync) {
        return pageMapAsync[key];
    }

    return null;
}

const pageMapAsync : Record<string, any> = {
    '2025-05/24-sat': defineAsyncComponent(() => import('@/pages/blog/2025-05/24-sat.vue')),
    '2025-06/01-sun': defineAsyncComponent(() => import('@/pages/blog/2025-06/01-sun.vue')),
    '2025-06/02-mon': defineAsyncComponent(() => import('@/pages/blog/2025-06/02-mon.vue')),
    '2025-06/03-tue': defineAsyncComponent(() => import('@/pages/blog/2025-06/03-tue.vue')),
    '2025-06/04-wed': defineAsyncComponent(() => import('@/pages/blog/2025-06/04-wed.vue')),
    '2025-06/05-thu': defineAsyncComponent(() => import('@/pages/blog/2025-06/05-thu.vue')),
    '2025-06/12-thu': defineAsyncComponent(() => import('@/pages/blog/2025-06/12-thu.vue')),
    '2025-06/15-sun': defineAsyncComponent(() => import('@/pages/blog/2025-06/15-sun.vue')),
    '2025-06/19-thu': defineAsyncComponent(() => import('@/pages/blog/2025-06/19-thu.vue')),
    '2025-07/12-sat': defineAsyncComponent(() => import('@/pages/blog/2025-07/12-sat.vue')),
    '2025-07/25-fri': defineAsyncComponent(() => import('@/pages/blog/2025-07/25-fri.vue')),
    '2025-08/11-mon': defineAsyncComponent(() => import('@/pages/blog/2025-08/11-mon.vue')),
    '2025-09/10-wed': defineAsyncComponent(() => import('@/pages/blog/2025-09/10-wed.vue')),
};
