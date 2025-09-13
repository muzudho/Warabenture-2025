<template>
    <v-row>
        <v-col cols="2" class="talk-novel-name">{{ props.name }}</v-col>
        <v-col cols="1" class="talk-novel-quot-open">「</v-col>
        <v-col class="talk-body-novel">
            <slot></slot>」<br/>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import type { Device } from '../composables/compatible-device';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        name: string,
        device: Device | undefined;
    }
    const props = defineProps<Props>();

</script>