<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>スワップ・メモリー、アベイラブル・メモリーを増やそうぜ！</h1>
    <section class="sec-1 pt-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            pnpm generate コマンド打鍵したら、サーバーサイドのプリレンダー中に処理が止まってしまう……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            Nuxt のサーバーサイドのプリレンダーに苦しめられてるの、わらう。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            CPUの負荷が高いのかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            推奨アクション<br/>
            1. CPU/メモリ確認:<br/>
            `lscpu`と`free -h`でスペックとメモリ状況をチェック。結果を共有してくれると具体的なアドバイスできる！
        </talk-balloon>


        <pre class="terminal-paper mb-6">
lscpu
        </pre>


        <pre class="coding-paper mb-6">
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          46 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   4
  On-line CPU(s) list:    0-3
Vendor ID:                GenuineIntel
  Model name:             Intel Xeon Processor (Cascadelake)
    CPU family:           6
    Model:                85
    Thread(s) per core:   1
    Core(s) per socket:   1
    Socket(s):            4
    Stepping:             5
    BogoMIPS:             4199.99
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx pdpe1gb rdtscp lm constant_tsc rep_goo
                          d nopl cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hyperv
                          isor lahf_lm abm 3dnowprefetch pti ssbd ibrs ibpb fsgsbase bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap clflushopt
                           clwb avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 pku ospke avx512_vnni
Virtualization features:  
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    128 KiB (4 instances)
  L1i:                    128 KiB (4 instances)
  L2:                     16 MiB (4 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-3
Vulnerabilities:          
  Gather data sampling:   Unknown: Dependent on hypervisor status
  Itlb multihit:          KVM: Mitigation: VMX unsupported
  L1tf:                   Mitigation; PTE Inversion
  Mds:                    Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
  Meltdown:               Mitigation; PTI
  Mmio stale data:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
  Reg file data sampling: Not affected
  Retbleed:               Mitigation; IBRS
  Spec rstack overflow:   Not affected
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Syscall hardening, KVM SW loop
  Srbds:                  Not affected
  Tsx async abort:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
        </pre>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            おお、素晴らしい！`lscpu`の出力ありがとう！これでさくらのVPSのCPU性能が十分か、ちゃんと分析できるぜ（＾～＾）。<br/>
            `pnpm generate`がプリレンダリングでハングしてる問題と合わせて、CPUがボトルネックかどうかを判断してみるよ。
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            結論:<br/>
            4コア、2.1～2.5GHzのXeonは、`pnpm generate`のような静的サイト生成には**十分な性能**のはず。<br/>
            110%負荷（1コア強をフル稼働）は高いけど、4コアなら分散できるはずなので、CPU単体が原因でハングするのは少し不自然。<br/>
            <br/>
            可能性:<br/>
            CPU以外のボトルネック（メモリ、ディスクI/O、Nitroの設定）が絡んでる可能性が高い。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            CPU のアベレージは 1.1、つまり１コア分チョイしか使ってない。<br/>
            <br/>
            さくらのVPSのページで CPU の使用率のグラフを見ても、ほとんど０％でガラガラで空いてるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ CPU は問題無いか……。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            PC には 入力、出力、演算装置、制御、記憶装置　の５大装置しかないのだから、<br/>
            CPU（演算装置）に問題無いんだったら、メモリ（記憶装置）に問題があるんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            4. 次のステップ：ボトルネック特定と対策<br/>
            CPUが十分そうなので、他のリソースや設定をチェックしてハングの原因を潰していこう。以下のコマンドと対策を試してみて！<br/>
            <br/>
            (1) メモリとSwapの確認<br/>
            メモリ不足でSwapに依存すると、ディスクI/Oが詰まってハングするよ：
        </talk-balloon>


        <pre class="terminal-paper mb-6">
free -h
        </pre>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            確認ポイント:<br/>
            `available`が50MB以下、またはSwapの`used`が`total`に近いならメモリ不足。<br/>
            2Gプラン（RAM 2GB）だと、Swapがデフォルト512MBだと足りないかも。
        </talk-balloon>


        <pre class="coding-paper mb-6">
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       3.0Gi       350Mi       1.0Mi       777Mi       874Mi
Swap:             0B          0B          0B
        </pre>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            おっと、`free -h`の出力ありがとう！これでメモリ状況がバッチリわかるぜ（＾～＾）。<br/>
            `pnpm generate`がプリレンダリングでハングしてる問題と合わせて、メモリが足りてるかどうかを分析して、対策を提案するよ！
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            分析<br/>
            <br/>
            メモリ容量: 4GBは`pnpm generate`（Nuxtの静的生成）にはそこそこ十分なはず。ただし、プリレンダリングはページ数やコンテンツの複雑さでメモリをガッツリ食う。<br/>
            <br/>
            利用可能メモリ (available): 874MiB（約0.9GB）は、ビルドタスクにはちょっと心許ない。NuxtのNitroプリレンダリングは1GB以上の空きを推奨されることが多い。<br/>
            <br/>
            Swapゼロ: Swapが0B（無効）なのは大問題！メモリが足りなくなると、Swapがないとプロセスがクラッシュしたりハングしたりする。特に4GBでSwapなしは、`pnpm generate`のようなメモリヘビーなタスクで危険。<br/>
            <br/>
            buff/cache: 777MiBはキャッシュに使われてるが、`available`にはカウントされてるので、必要なら解放可能。
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            結論: メモリは足りてるか？<br/>
            <br/>
            足りてない可能性大: 4GBのRAMは悪くないけど、`available`が874MiBしかない上にSwapがないので、プリレンダリングのピーク時にメモリ不足でハングしてる可能性が高い。<br/>
            <br/>
            ハングの原因: 前のログで「Prerendering 3 initial routes with crawler」で止まってるから、特定のルートがメモリを食いすぎて、Swapがないせいでプロセスが止まってるっぽい。
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            3. 対策：メモリ不足を解消<br/>
            メモリ不足を解消して`pnpm generate`のハングを防ぐ具体的な手順を提案するよ！<br/>
            <br/>
            (1) Swapを有効化<br/>
            Swapがないのは致命的なので、すぐに設定しよう。4GB RAMなら1～2GBのSwapで十分。
        </talk-balloon>


        <pre class="terminal-paper mb-6">
# 1GBのSwapファイルを作成
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# 永続化（再起動後も有効）
sudo nano /etc/fstab
# 末尾に以下を追加
/swapfile none swap sw 0 0

# 確認
free -h
        </pre>


        <pre class="coding-paper mb-6">
期待出力:

               total        used        free      shared  buff/cache   available
  Mem:         3.8Gi       3.0Gi       350Mi       1.0Mi       777Mi       874Mi
  Swap:        1.0Gi         0B        1.0Gi

効果: Swapがあれば、メモリ不足時にディスクに退避してハングを回避。HDDでも遅いけど効果的。
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            はいはい、打鍵すりゃいいんだろ。<br/>
        </talk-balloon>


        <pre class="terminal-paper mb-6">
free -h
        </pre>


        <pre class="coding-paper mb-6">
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       3.0Gi       350Mi       1.0Mi       777Mi       874Mi
Swap:          1.0Gi        86Mi       937Mi
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            おっ、スワップ・メモリが増えた。
        </talk-balloon>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            (2) メモリキャッシュを解放<br/>
            buff/cacheの777MiBを解放して、availableを増やす：
        </talk-balloon>


        <pre class="terminal-paper mb-6">
sudo sync; echo 3 | sudo tee /proc/sys/vm/drop_caches
free -h  # 確認
        </pre>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            これで`available`が1.5GBくらいになれば、ビルドが安定する可能性アップ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            （カタカタカタカタ……）<br/>
        </talk-balloon>


        <pre class="coding-paper mb-6">
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       1.4Gi       2.2Gi       220Ki       566Mi       2.5Gi
Swap:          1.0Gi        86Mi       937Mi
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            アベイラブル・メモリも増えた。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            これでメモリに余裕がでけたな。
        </talk-balloon>


    </section>

    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-back-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from "vue";

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import SourceLink from '@/components/SourceLink.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    import assetsVueLogoSvg from '@/assets/img/vue.svg';
    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";
    import kurokichi1Src from "@/assets/img/talk/202509__character__10--kurokichi.png";
    const kurokichi1Alt = "グロックの黒吉１";
    const kurokichi1Name = "グロックの黒吉";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　長方形 +
    // ++++++++++++++++++++++++++++

    const apple: number = 250;


    function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: '100px',
            backgroundColor: 'skyblue',
            border: 'solid 4px blue',
        }
    }


    const getRectangle5 = computed<
        any
    >(() => {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
        };
    });


    const getRectangle6 = computed<
        (banana: number) => any
    >(() => {
        return (banana: number)=>{
            return {
                width: `${apple}px`,
                height: `${banana}px`,
                backgroundColor: "blue",
            }
        };
    });

</script>

<style scoped>

    @import '@/styles/notebook.css';

    div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }

    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: v-bind(apple)px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }
</style>
