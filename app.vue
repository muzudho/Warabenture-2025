<template>
    <div>
        <NuxtPage />
    </div>
</template>

<style>
body{
    background-color: hotpink;  /*ショッキングピンク*/
    /*background-color: pink;*/  /*ピンク*/
    /* background-color: #DDDDDD; */  /*白っぽいグレー*/
}

h1 {
    background-color: darkmagenta;
    color: khaki;
}

/* スマホ向けスタイル (画面幅が768px以下) */
@media screen and (max-width: 768px) {
    h2 {
        background-color: darkorchid;
        color: skyblue;
        margin-left: 20px;
        padding-left: 4px;
    }

    h3 {
        background-color: darkorchid;
        color: skyblue;
        margin-left: 40px;
        padding-left: 4px;
    }

    div.div1 {
        color: midnightblue;
        margin-left: 20px;
    }

    div.div2 {
        color: midnightblue;
        margin-left: 30px;
    }

    div.div3 {
        color: midnightblue;
        margin-left: 40px;
    }

    .div2 img {
        max-width: 300px;
        max-height: 300px;
        object-fit: contain; /* 画像が枠に収まるように調整 */
    }
}

/* パソコン向けスタイル (画面幅が769px以上) */
@media screen and (min-width: 769px) {
    h2 {
        background-color: darkorchid;
        color: skyblue;
        margin-left: 60px;
        padding-left: 4px;
    }

    h3 {
        background-color: darkorchid;
        color: skyblue;
        margin-left: 120px;
        padding-left: 4px;
    }

    div.div1 {
        color: midnightblue;
        margin-left: 60px;
    }

    div.div2 {
        color: midnightblue;
        margin-left: 120px;
    }

    div.div3 {
        color: midnightblue;
        margin-left: 180px;
    }
}

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

div.code-b {
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