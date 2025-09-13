<template>
    <!-- ナビゲーション -->
    <nav>
        <!--
            pages/ フォルダー下のページのファイル名は、
            Nuxt 公式では kebab-case、
                📖 https://nuxt.com/docs/3.x/guide/directory-structure/pages
            Tauri では PascalCase が習慣的に使われています。異なるので注意。
        -->
        <router-link to="/" :class="getLinkHighlight('/')">ホーム</router-link> |
        <router-link to="/about" :class="getLinkHighlight('/about')">このサイトについて</router-link> |

        <router-link to="/blog" :class="getLinkHighlight('/blog')">ブログ</router-link> |
        <router-link to="/quiz" :class="getLinkHighlight('/quiz')">クイズ</router-link> |
        <router-link to="/minigames" :class="getLinkHighlight('/minigames')">ミニゲーム</router-link> |
        <router-link to="/reference" :class="getLinkHighlight('/reference')">リファレンス</router-link>

        <!--
         | <router-link to="/team-mirai-supporter" :style="getLinkHighlight('/team-mirai-supporter')">チームみらいサポーター活動</router-link>
         | <router-link to="/wara-city/map" :style="getLinkHighlight('/wara-city/map')">わらシティ</router-link>
        -->
    </nav>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    import { getLinkHighlight } from '../composables/link-highlight';

</script>

