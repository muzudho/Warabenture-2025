# トラブルシューティング

## フォルダーを移動したことによる、ディレクトリー・パスの更新忘れミス１

```
[nuxi 3:17:17 PM]  ERROR  Nuxt Build Error: [vite:load-fallback] Could not load /home/ubuntu/warabenture-2025/src//pages/team-mirai-supporter/the-contents.vue (imported by src/pages/reference_warabenture/team-mirai-supporter/index.vue?vue&type=script&setup=true&lang.ts): ENOENT: no such file or directory, open '/home/ubuntu/warabenture-2025/src//pages/team-mirai-supporter/the-contents.vue'
```

👆 フォルダーを移動したことによる、ディレクトリー・パスの更新忘れミス。  


## フォルダーを移動したことによる、ディレクトリー・パスの更新忘れミス２

```
 ERROR  Nuxt Build Error: Could not resolve "../the-app-header.vue" from "src/pages/reference_warabenture/team-mirai-supporter/heat-map.vue?vue&type=script&setup=true&lang.ts"                   nuxi 3:31:46 PM
file: /home/ubuntu/warabenture-2025/src/pages/reference_warabenture/team-mirai-supporter/heat-map.vue?vue&type=script&setup=true&lang.ts
```

`import TheAppHeader from '../the-app-header.vue';` を  
`import TheAppHeader from '../../the-app-header.vue';` に修正。  


## Hydration エラー１

```
Hydration completed but contains mismatches.
```

動的に生成されるコンポーネントを置くと、このエラーになる？  


## Hydration エラー２ on ブラウザー

```
Hydration completed but contains mismatches.
```

v-for に対応する `:key=""` が付いていないときなど。  
