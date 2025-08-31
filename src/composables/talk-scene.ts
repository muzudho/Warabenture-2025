// ##############
// # インポート #
// ##############

import { computed } from 'vue';

// ++++++++++++++
// + 互換性対応 +
// ++++++++++++++

import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';


// ################
// # エクスポート #
// ################

/**
 * 画像の下に付けるキャプションのスタイル
 */
export const illustration1FaceStyle = computed<
    (isMobileMaybeOption: boolean | null) => CompatibleStyleValue
>(()=>{
    return (isMobileMaybeOption: boolean | null) => {
        const isMobileMaybe: boolean = (isMobileMaybeOption == null) ? false : isMobileMaybeOption;
        return {
            width: isMobileMaybe ? '80px' : '96px',
        } as CompatibleStyleValue;
    };
});
