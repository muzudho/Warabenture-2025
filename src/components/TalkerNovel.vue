<template>
    <v-row>
        <v-col cols="2" class="talk-name-novel">勇者キフワラニャン</v-col>
        <v-col cols="1" class="talk-quot-open-novel">「</v-col>
        <v-col class="talk-body-novel">
            <slot></slot>」<br/>
        </v-col>
        <v-col cols="1" class="talk-quot-close-novel">」</v-col>
    </v-row>
</template>
