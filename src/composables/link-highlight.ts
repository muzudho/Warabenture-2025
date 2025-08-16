import { useRouter } from 'vue-router';

/**
 * 前のリンクのハイライトスタイルを取得します。
 * @param expected 
 * @returns スタイルを返します。
 */
export function getPreviousLinkHighlight(expected:string) {
    const router = useRouter();

    if (expected === router.options.history.state.back) {   // 前のページのパスと比較
        return {
            backgroundColor: `lightgreen`,
        };
    }

    return {};
}
