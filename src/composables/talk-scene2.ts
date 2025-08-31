// ##############
// # インポート #
// ##############

import { computed } from 'vue';

// ++++++++++++++
// + 互換性対応 +
// ++++++++++++++

import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

// ++++++++++++++++++
// + コンポーザブル +
// ++++++++++++++++++

import type { Device } from './compatible-device';


// ################
// # エクスポート #
// ################

/**
 * 画像の下に付けるキャプションのスタイル
 */
export const illustration1FaceStyle2 = computed<
    (device: Device) => CompatibleStyleValue
>(()=>{
    return (device: Device) => {
        if (device == 'Mobile') {
            return {
                width: '80px',
            } as CompatibleStyleValue;

        }
        
        // Pc, Unknown
        return {
            width: '96px',
        } as CompatibleStyleValue;
    };
});
