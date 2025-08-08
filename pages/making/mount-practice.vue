<template>
    <h2>onMounted を使う練習だぜ！</h2>

    <section class="sec-2">
        <p>{{ textVM }}</p>

        <pre>
            &lt;script setup lang="ts"&gt;
                import { onMounted, ref } from 'vue';

                const textVM = ref&lt;string&gt;('読み込み中...');
                const errorMessage = ref&lt;string&gt;('');

                onMounted(async () =&gt; {
                    try {
                        textVM.value = "起動時に処理を行えるぜ（＾▽＾）！";
                            
                    } catch (error) {
                        errorMessage.value = `エラーだぜ: ${error}`; // エラーハンドリング
                    }
                });
            &lt;/script&gt;
        </pre>

    </section>

    <hr/>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <router-link to="/making">メイキングに戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ##############
    // # 共有データ #
    // ##############

    const textVM = ref<string>('読み込み中...');
    const errorMessage = ref<string>('');

    // ##############
    // # 起動時処理 #
    // ##############

    // コンポーネントがマウントされたときに実行
    onMounted(async () => {
        try {
            textVM.value = "起動時に処理を行えるぜ（＾▽＾）！";
                  
        } catch (error) {
            errorMessage.value = `エラーだぜ: ${error}`; // エラーハンドリング
        }
    });
</script>