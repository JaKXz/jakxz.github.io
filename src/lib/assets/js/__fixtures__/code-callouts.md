```ts [callouts.ts] :line-numbers line-jump="3:200" caption="Notes stay beside their code"
// [!callout The first value]
const name = "Ada";
export const message = name + name; // [!callout =name | Use the name twice] [!focus]
const literal = "[!callout leave this string alone]";
const escaped = 1; // [!callout <b>{value}</b> & "quotes" array\]]
```

```js [ordinary.js]
const name = "No note here";
```

```css [styles.css]
body {
  color: red; /* [!callout =red | A CSS target] */
}
```

```sh [install.sh]
pnpm install # [!callout Install packages]
```
