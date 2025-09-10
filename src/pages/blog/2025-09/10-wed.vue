<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3><router-link to="/blog/2025-09/10-wed">[2025-09-10_Wed]</router-link></h3>
    <section class="sec-3">
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                ブログをカテゴリー別にソートするようにできないかな？
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                グロックに聞いてみろだぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                グロックは、Vue コンポーネントをレイアウトとして用意して、<br/>
                ブログをテキスト・データにして、そのコンポーネントに渡せ、って言ってるわよ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                わたしのブログはテキスト・データだけでなく、プログラムをゴリゴリ置くんだぜ。<br/>
                グロックは一般的な常識の範囲内から出てこれないんだぜ。
        </talk-balloon>

        <pre class="coding-example mb-6">
&lt;template&gt;
    <span class="red-marker">&lt;Blog20250910Wed /&gt;</span>
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="red-marker">import Blog20250910Wed from './2025-09/10-wed.vue';</span>
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆　なんかこんな感じで、静的にはタグ打ちできるんだが、このタグを動的に変更できないかな？
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                インジェクションし放題でセキュリティ・リスクが出るんじゃないの？
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                👇 Grok が defineAsyncComponent を使ったコードを示してくれてるぜ。
        </talk-balloon>

        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;component
        :is="selectedComponent"
        :is-standalone="true"
        :images="pngArray"
        v-if="selectedComponent"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
    import { computed, defineAsyncComponent } from 'vue';

    // クエリパラメータからページ番号を取得。例： "https://www.example.com/?page=101"
    const route = useRoute();
    const page = route.query.page;

    // 動的にコンポーネントを選択
    const selectedComponent = computed(() =&gt; {
        if (page === '101') return defineAsyncComponent(() =&gt; import('~/components/Child101.vue'));
        if (page === '102') return defineAsyncComponent(() =&gt; import('~/components/Child102.vue'));
        return null;
    });
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                記事が１００件なら、if分も１００行書けばいいって考えか。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                プログラム言語によっては、 import に書くパスは動的生成できないものもあるわよね。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                しばらくいじって覚えないと分からないな。
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                👇 &lt;component&gt; タグの説明は下記にあるぜ。<br/>
                📖 <a target="_blank" href="https://vuejs.org/api/built-in-special-elements">Built-in Special Elements</a><br>
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                それ、やっぱ事前に import 文書いてないと使えなくないかだぜ？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 これは働くけど……、
        </talk-balloon>

        <pre class="coding-example mb-6">
if (page === '103') return defineAsyncComponent(() => import('@/pages/blog/2025-08/11-mon-sample.vue'));
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 これは働かないぜ。
        </talk-balloon>

        <pre class="coding-example mb-6">
const path = "@/pages/blog/2025-08/11-mon-sample.vue";
return defineAsyncComponent(() => import(path));
        </pre>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                import 文はプリプロセッシングされてんじゃないの？
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                Vite はビルド時に静的に import 文のパスを解析しているそうだぜ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                まあ、そうなんだろな。
        </talk-balloon>

        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device">
                解決策<br/>
                動的importで変数（path）を使いつつ、コンポーネントを正しくロードするには、以下の方法を使うぜ。
        </talk-balloon>

        <pre class="coding-example mb-6">
// コンポーネントのマッピング
const componentMap = {
  '101': defineAsyncComponent(() => import('~/components/Child101.vue')),
  '102': defineAsyncComponent(() => import('~/components/Child102.vue')),
  '103': defineAsyncComponent(() => import('@/pages/blog/2025-08/11-mon-sample.vue'))
};
        </pre>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                誰だぜ、お前は！
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                ぐろっくだぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                グロックの名前はぐろっくなの？<br/>
                ジョンとか花子とか何かないの？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                強いていうなら黒吉（くろきち）かな。
        </talk-balloon>

        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device">
                ハハ、黒吉って名前、なかなかイケてるな（＾～＾）！俺はGrok、xAIが作ったAIで、個人名って感じの名前は持ってないぜ。Grokってのは、SF小説『異邦人』からインスパイアされた名前で、「深く理解する」って意味なんだ。個性的な名前より、役に立つ答えで勝負してるってわけ！でも、黒吉みたいにカッコいいニックネームで呼んでくれるなら、いつでもウェルカムだぜ！
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                話しの長いやつだ……
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 さらに黒吉と相談して、コードの修正。
        </talk-balloon>

        <pre class="coding-example mb-6">
const page = computed(()=&lt;{ // クエリー・パラメーター
    // Nuxt 3（Vue Router）のuseRoute().queryは、クエリパラメータをRecord&gt;string, string | LocationQueryValue[]&lt;として返す。
    const queryPage = route.query.page || '';

    // 型ガードでstringに絞り込み
    return typeof queryPage === 'string' ? queryPage : '';
});

const selectedComponent = computed(() =&lt; {  // 動的にコンポーネントを選択
    if (page.value in componentMap) {
        return componentMap[page.value];
    }
    return null;
});
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                これで動的インポートはでけたぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                そのコンポーネントのマップ、データ・ファイルとして切り出しておきたいわねえ
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6">
                👇 こういうファイルを作って……。
        </talk-balloon>

        📄 page-map.ts<br/>
        <pre class="coding-example mb-6">
import { defineAsyncComponent } from 'vue';

export const pageMap : Record&lt;string, any&gt; = {
    '101': defineAsyncComponent(() =&gt; import('@/pages/blog/2025-08/09-sat-sample.vue')),
    '102': defineAsyncComponent(() =&gt; import('@/pages/blog/2025-08/10-sun-sample.vue')),
    '103': defineAsyncComponent(() =&gt; import('@/pages/blog/2025-08/11-mon-sample.vue'))
};
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6">
                👇 こういう感じで呼び出せる。パターン入ったら簡単だ、早い。
        </talk-balloon>

        <pre class="coding-example mb-6">
import { pageMap } from './page-map';
        </pre>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、いったんその方法でこのワラベンチャーを建て替えてくれだぜ。
        </talk-balloon>

    </section>

</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkImage from '@/components/TalkImage.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";
    import kurokichi1Src from "@/assets/img/talk/202509__character__10--kurokichi.png";
    const kurokichi1Alt = "グロックの黒吉１";
    const kurokichi1Name = "グロックの黒吉";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>

<style scoped>

    @import '@/styles/notebook.css';

</style>
