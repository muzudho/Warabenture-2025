<template>
    <section
        :class="props.class"
    >
        <v-btn
            @click="closePane"
            v-tooltip="tooltipMessage"
        >❌</v-btn>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        class: string,
        direction: 'up' | 'down' | '',
        pagePath: string;
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    const router = useRouter();

    const tooltipMessage = ref('読込中...');

    if (props.direction == 'up') {
        tooltipMessage.value = '上のペーンを閉じる';
    } else if (props.direction == 'down') {
        tooltipMessage.value = '下のペーンを閉じる';
    } else {
        tooltipMessage.value = 'ペーンを閉じる';
    }


    // ################
    // # サブルーチン #
    // ################

    function closePane() : void {
        router.push(props.pagePath);
    }

</script>
