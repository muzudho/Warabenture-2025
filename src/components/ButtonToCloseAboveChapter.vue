<template>
    <section class="sec-2 mt-6">
        <v-btn @click="closeChapter" v-tooltip="'上の章を閉じる'">❌</v-btn>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { useRouter } from 'vue-router';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        pagePath: string;
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ############
    // # ルーチン #
    // ############

    const router = useRouter();

    function closeChapter() : void {
        router.push(props.pagePath);
    }
</script>
