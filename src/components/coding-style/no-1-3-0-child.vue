<template>
<div style="background-color: skyblue;">
        名前：　すっぽん<br/>
        <slot name="hp" :hit-point="100"></slot><br/>
        <slot name="mp" :magic-power="50"></slot><br/>
    </div>
</template>

<script setup lang="ts">

    // ############
    // # スロット #
    // ############

    const slots = defineSlots<{
        default(): any;
        hp(props: { hitPoint: number }): any;
        mp(props: { magicPower: number }): any;
    }>();

</script>
