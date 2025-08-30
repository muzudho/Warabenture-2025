// ##############
// # インポート #
// ##############

import type { Ref } from 'vue';

// ++++++++++++++
// + 互換性対応 +
// ++++++++++++++

import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

// ++++++++++++++++++++++++++++++++++
// + コンポーネント　＞　互換性対応 +
// ++++++++++++++++++++++++++++++++++

//import CompatibleRuntimeEnvironment from '../components/CompatibleRuntimeEnvironment.vue';

/**
 * 画像の下に付けるキャプションのスタイル
 */
export const illustration1FaceStyle = computed<
    (isMobileMaybe: boolean | null) => CompatibleStyleValue
>(()=>{
    return (isMobileMaybeOption: boolean | null) => {
        const isMobileMaybe: boolean = isMobileMaybeOption != null ? isMobileMaybeOption : false;   // null なら false
        return {
            width: isMobileMaybe ? '80px' : '96px',
        } as CompatibleStyleValue;
    };
});
