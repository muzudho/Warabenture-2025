// ##############
// # インポート #
// ##############

import { useRouter } from 'vue-router';


// ################
// # サブルーチン #
// ################

/**
 * 現在のリンクのハイライトを表すCSSのスタイル名を取得します。
 * @param expected 
 * @returns CSSのクラス名を返します。該当がなければ空文字列。
 */
export function getLinkHighlight(expected:string) : string {
    const router = useRouter();

    // ［現在のページのリンクの強調］より、［前のページのリンクの強調］の方がよく使うと思われるので、先に判定する
    if (expected === router.options.history.state.back) {   // 前のページのパスと比較
        return 'link-highlight-previous';
    }

    if (expected === router.options.history.state.current) {   // 現在のページのパスと比較
        return 'link-highlight-current';
    }

    return '';
}
