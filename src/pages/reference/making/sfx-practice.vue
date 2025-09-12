<template>
    <the-app-header/>
    <button-to-close-pane
        class="sec-0"
        direction="down"
        pagePath="/reference"
    />

    <h1>効果音を鳴らす章だぜ！</h1>
    <section class="sec-1">
        <v-btn @click="onSfx1Play()">効果音１</v-btn>
        <v-btn @click="onSfx2Play()">効果音２</v-btn>
        <v-btn @click="onSfx3Play()">効果音３</v-btn><br/>
        {{ message }}
    </section>

    <br/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-close-pane
        class="sec-0"
        direction="up"
        pagePath="/reference"
    />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, onUnmounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../../components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToClosePane from '@/components/ButtonToClosePane.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ################
    // # 読込リソース #
    // ################

    // ++++++++++++++++++++++++++++
    // + 読込リソース　＞　効果音 +
    // ++++++++++++++++++++++++++++

    const sfxConfigVolume = 0.3;                        // 音量

    let sfxDeniedAudio: HTMLAudioElement;               // 拒否音
    let sfxDeniedIsPlaying: boolean = false;            // 拒否音の再生状態
    let sfxCameraShutterAudio: HTMLAudioElement;        // カメラで撮影したときの効果音
    let sfxCameraShutterIsPlaying: boolean = false;     //
    let sfxMissAudio: HTMLAudioElement;                 // ミス音
    let sfxMissIsPlaying: boolean = false;              //

    /**
     * 効果音をロードする（jsfxrで作った効果音）
     */
    function sfxLoad() : void {
        sfxDeniedAudio = new Audio('/wav/202508__sfx__17-0200-denied.wav'); // 拒否音
        sfxDeniedAudio.volume = sfxConfigVolume;
        sfxDeniedAudio.addEventListener('play', () => { sfxDeniedIsPlaying = true })
        sfxDeniedAudio.addEventListener('pause', () => { sfxDeniedIsPlaying = false })
        sfxDeniedAudio.addEventListener('ended', () => { sfxDeniedIsPlaying = false })

        sfxCameraShutterAudio = new Audio('/wav/202508__sfx__16-2117-cameraShutter.wav'); // カメラのシャッター音
        sfxCameraShutterAudio.volume = sfxConfigVolume;
        sfxCameraShutterAudio.addEventListener('play', () => { sfxCameraShutterIsPlaying = true })
        sfxCameraShutterAudio.addEventListener('pause', () => { sfxCameraShutterIsPlaying = false })
        sfxCameraShutterAudio.addEventListener('ended', () => { sfxCameraShutterIsPlaying = false })

        sfxMissAudio = new Audio('/wav/202508__sfx__16-2146-miss.wav'); // ミス音
        sfxMissAudio.volume = sfxConfigVolume;
        sfxMissAudio.addEventListener('play', () => { sfxMissIsPlaying = true })
        sfxMissAudio.addEventListener('pause', () => { sfxMissIsPlaying = false })
        sfxMissAudio.addEventListener('ended', () => { sfxMissIsPlaying = false })
    }


    // ################
    // # オブジェクト #
    // ################
    
    const message = ref<string>("");


    // ##############
    // # 起動時処理 #
    // ##############

    // コンポーネントがマウントされたときに実行
    onMounted(() => {
        sfxLoad();
    });

    
    onUnmounted(()=>{
        // 効果音のメモリ解放を真面目に行う場合
        if (sfxDeniedAudio) {
            sfxDeniedAudio.pause();
            sfxDeniedAudio.src = '';
            sfxDeniedAudio.load(); // バッファクリア
            // イベントリスナー解除（必要なら）
            // sfxDeniedAudio.removeEventListener('ended', handler);
        }

        if (sfxCameraShutterAudio) {
            sfxCameraShutterAudio.pause();
            sfxCameraShutterAudio.src = '';
            sfxCameraShutterAudio.load(); // バッファクリア
        }

        if (sfxMissAudio) {
            sfxMissAudio.pause();
            sfxMissAudio.src = '';
            sfxMissAudio.load(); // バッファクリア
        }
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * 効果音１を鳴らす
     */
    function onSfx1Play() : void {
        if (sfxDeniedIsPlaying) {
            message.value = "効果音１がまだ鳴っていたので、効果音１の再生をスキップしました。";
            return;
        }
        if (sfxCameraShutterIsPlaying) {
            message.value = "効果音２がまだ鳴っていたので、効果音１の再生をスキップしました。";
            return;
        }
        if (sfxMissIsPlaying) {
            message.value = "効果音３がまだ鳴っていたので、効果音１の再生をスキップしました。";
            return;
        }

        sfxDeniedAudio.play();
        message.value = "";
    }


    /**
     * 効果音２を鳴らす
     */
    function onSfx2Play() : void {
        if (sfxDeniedIsPlaying) {
            message.value = "効果音１がまだ鳴っていたので、効果音２の再生をスキップしました。";
            return;
        }
        if (sfxCameraShutterIsPlaying) {
            message.value = "効果音２がまだ鳴っていたので、効果音２の再生をスキップしました。";
            return;
        }
        if (sfxMissIsPlaying) {
            message.value = "効果音３がまだ鳴っていたので、効果音２の再生をスキップしました。";
            return;
        }

        sfxCameraShutterAudio.play();
        message.value = "";
    }


    /**
     * 効果音３を鳴らす
     */
    function onSfx3Play() : void {
        if (sfxDeniedIsPlaying) {
            message.value = "効果音１がまだ鳴っていたので、効果音３の再生をスキップしました。";
            return;
        }
        if (sfxCameraShutterIsPlaying) {
            message.value = "効果音２がまだ鳴っていたので、効果音３の再生をスキップしました。";
            return;
        }
        if (sfxMissIsPlaying) {
            message.value = "効果音３がまだ鳴っていたので、効果音３の再生をスキップしました。";
            return;
        }

        sfxMissAudio.play();
        message.value = "";
    }

</script>