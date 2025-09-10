<template>
    <!-- ナビゲーション -->
    <nav>
        <!--
            pages/ フォルダー下のページのファイル名は、
            Nuxt 公式では kebab-case、
                📖 https://nuxt.com/docs/3.x/guide/directory-structure/pages
            Tauri では PascalCase が習慣的に使われています。異なるので注意。
        -->
        <router-link to="/">ホーム</router-link> |
        <router-link to="/about">このサイトについて</router-link> |
        <router-link to="/blog">ブログ</router-link> |
        <router-link to="/quiz">クイズ</router-link> |
        <router-link to="/minigames">ミニゲーム</router-link> |
        <router-link to="/making">メイキング</router-link> |
        <router-link to="/coding-style">コーディング・スタイル</router-link>
        <!--
        <router-link to="/team-mirai-supporter">チームみらいサポーター活動</router-link>
        <router-link to="/wara-city/map">わらシティ</router-link>
        -->
    </nav>

    <h1>ワラベンチャー</h1>
</template>
