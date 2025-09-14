<template>
    <!-- ナビゲーション -->
    <nav>
        <!--
            pages/ フォルダー下のページのファイル名は、
            Nuxt 公式では kebab-case、
                📖 https://nuxt.com/docs/3.x/guide/directory-structure/pages
            Tauri では PascalCase が習慣的に使われています。異なるので注意。
        -->
        <router-link to="/" :class="home1Class">ホーム</router-link> |
        <router-link to="/about" :class="about1Class">このサイトについて</router-link> |

        <router-link to="/blog" :class="blog1Class">ブログ</router-link> |
        <router-link to="/quiz" :class="quiz1Class">クイズ</router-link> |
        <router-link to="/minigames" :class="minigames1Class">ミニゲーム</router-link> |
        <router-link to="/reference" :class="reference1Class">リファレンス</router-link>

        <!--
         | <router-link to="/reference-warabenture/team-mirai-supporter" :style="getLinkHighlight('/reference-warabenture/team-mirai-supporter')">チームみらいサポーター活動</router-link>
         | <router-link to="/reference-warabenture/wara-city/map" :style="getLinkHighlight('/reference-warabenture/wara-city/map')">わらシティ</router-link>
        -->
    </nav>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    import { getLinkHighlight } from '../composables/link-highlight';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　リンクのハイライト +
    // ++++++++++++++++++++++++++++++++++++++++

    const home1Class = ref('');
    const about1Class = ref('');
    const blog1Class = ref('');
    const quiz1Class = ref('');
    const minigames1Class = ref('');
    const reference1Class = ref('');


    // ###############
    // # 開始 / 終了 #
    // ###############

    onMounted(()=>{
        // `:class="getLinkHighlight('/')"` のようにインラインに埋め込むと、ハイドレーション・エラーを引き起こしてしまう。 onMounted() を利用して回避する
        home1Class.value = getLinkHighlight('/');
        about1Class.value = getLinkHighlight('/about');
        blog1Class.value = getLinkHighlight('/blog');
        quiz1Class.value = getLinkHighlight('/quiz');
        minigames1Class.value = getLinkHighlight('/minigames');
        reference1Class.value = getLinkHighlight('/reference');
    });
</script>

