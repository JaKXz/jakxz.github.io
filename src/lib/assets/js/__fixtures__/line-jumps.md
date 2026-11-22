```ts [app.ts] :line-numbers=10 line-jump="3:200" {3}#target
const previous = 1; // [!del]
// [!focus +1]
const next = 2; // [!add]

console.log(next);
const markup = '<span class="l" data-line-number="999">';
```

```ts :line-numbers=10
const ordinary = 1;
```
