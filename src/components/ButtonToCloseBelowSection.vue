<template>
    <section class="sec-3 mt-b">
        <v-btn @click="closeSection" v-tooltip="'下の節を閉じる'">❌</v-btn>
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

    function closeSection() : void {
        router.push(props.pagePath);
    }

</script>
