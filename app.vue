<template>
    <div>
        <NuxtPage />
    </div>
</template>

<style>
    @import '@/styles/warabenture.css';

    /** スクリーンショットの引用 */
    img.scr-shot {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    div.talk{
        display: flex;
        align-items: center;
        margin-top: 1px;
        margin-bottom: 1px;
    }

    div.face-container{
        width:100px;
    }

    div.baloon{
        padding-left:16px;
        padding-top: 12px;
        padding-bottom:16px;
        padding-right:16px;
        background-color: #F8F8F8;
        border-radius: 16px;
    }

    /**
    *       | 0%   100%
    *   ----+----------
    *     0%|         2
    *    50%|  1
    *   100%|         3
    */
    div.baloon-tail {
        width: 20px;
        height: 15px;
        background-color: #F8F8F8; /* 白い背景 */
        clip-path: polygon(0% 50%, 100% 0%, 100% 100%); /* 上頂点、下底の三角形 */
    }

    div.code-b, pre.code-b {
        display:inline-block;
        background-color: #222222;
        color:#DDD;
        margin-top: 12px;
        margin-bottom: 12px;
        padding-left: 20px;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 20px;
        border: 1px solid;
        border-color: #888888 #DDDDDD #DDDDDD #888888;
        box-shadow: inset 1px 1px 0px #111111, inset -1px -1px 0px #DDDDDD;
    }

    span.code-b {
        background-color: #111111;
        color:#EEEEEE;
        margin-left: 6px;
        margin-right: 6px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 1px 1px 4px rgba(255,255,255,1.0);
    }

    div.code-w {
        background-color: #EEEEEE;
        color:#111111;
        border-radius: 8px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
    }

    span.code-w {
        background-color: #EEEEEE;
        color:#111111;
        border-radius: 8px;
        margin-left: 6px;
        margin-right: 6px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
    }

    span.font-x2 {
        font-size: 200%;
    }
</style>