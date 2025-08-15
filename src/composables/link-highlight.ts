import { useRouter } from 'vue-router';

/**
 * スタイルを返します。
 * @param expected 
 * @returns 
 */
export function getLinkHighlight(expected:string) {
    const router = useRouter();

    if (expected === router.options.history.state.back) {   // 前のページのパスと比較
        return {
            backgroundColor: `lightgreen`,
        };
    }

    return {};
}
