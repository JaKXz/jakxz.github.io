:::codeTabs(title="Package managers")

```sh [pnpm] nocopy
pnpm install
```

```sh [npm]
npm install
```

:::

::::codeWalkthrough(title="Move the main export", mode="click")

:::codeStep(title="Before")

The helper appears before the export.

```ts [profile.ts] caption="Start with the helper" :line-numbers line-jump="2:200"
const helper = () => 1;
export const Profile = () => helper(); // [!focus] [!callout =Profile | The main export is buried]
```

:::

:::codeStep(title="After")

The main export now comes first.

```ts [profile.ts] :line-numbers
export const Profile = () => helper(); // [!focus] [!callout =Profile | Start with the main export]
const helper = () => 1;
```

:::

::::

::::codeWalkthrough(title="Add a message", mode="scroll")

:::codeStep(title="First message")

Show the original message.

```js [message.js]
const message = "Hello"; // [!del]
```

:::

:::codeStep(title="Second message")

Now change the greeting.

```js [message.js]
const message = "Welcome"; // [!add]
```

:::

::::
