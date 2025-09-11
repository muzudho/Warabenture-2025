<template>
    <the-app-header/>
    <button-to-close-below-part/>

    <h2>リファレンスの部だぜ！</h2>
    <button-to-close-below-chapter
        pagePath="/reference"
    />

    <h3>メイキングの章だぜ！</h3>
    <button-to-close-below-section
        pagePath="/reference/making"
    />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import ButtonToCloseBelowChapter from '../../../components/ButtonToCloseBelowChapter.vue';
    import ButtonToCloseBelowPart from '../../../components/ButtonToCloseBelowPart.vue';
    import ButtonToCloseBelowSection from '../../../components/ButtonToCloseBelowSection.vue';
    import TheAppHeader from '../../the-app-header.vue';

</script>
