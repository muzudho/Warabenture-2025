// ##############
// # インポート #
// ##############

import { useRouter } from 'vue-router';


// ################
// # サブルーチン #
// ################

/**
 * 現在のリンクのハイライトスタイルを取得します。
 * @param expected 
 * @returns スタイルを返します。
 */
export function getLinkHighlight(expected:string) : Record<string, number | string> {

    let style : Record<string, number | string> = getCurrentLinkHighlight(expected);
    if (Object.keys(style).length !== 0) {
        return style;
    }

    style = getPreviousLinkHighlight(expected);
    if (Object.keys(style).length !== 0) {
        return style;
    }

    return style;
}

/**
 * 現在のリンクのハイライトスタイルを取得します。
 * @param expected 
 * @returns スタイルを返します。
 */
export function getCurrentLinkHighlight(expected:string) : Record<string, number | string> {
    const router = useRouter();

    if (expected === router.options.history.state.current) {   // 現在のページのパスと比較
        return {
            fontSize: 'x-large',
            color: 'white',
            backgroundColor: 'Royalblue',
        };
    }

    return {};
}

/**
 * 前のリンクのハイライトスタイルを取得します。
 * @param expected 
 * @returns スタイルを返します。
 */
export function getPreviousLinkHighlight(expected:string) : Record<string, number | string> {
    const router = useRouter();

    if (expected === router.options.history.state.back) {   // 前のページのパスと比較
        return {
            backgroundColor: 'lightgreen',
        };
    }

    return {};
}
