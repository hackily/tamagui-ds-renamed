# tamagui

This is the in-house design system built on top of tamagui components. The components exported from this repo extend and override the default tamagui components. For more information, visit https://tamagui.dev/

## Running Locally

```
yarn
yarn storybook
```

# Developing

## Styles

All [view style props](https://reactnative.dev/docs/view-style-props) from React Native can be applied as top level props to any component. For example, to apply a `backgroundColor` to a `Button`, we can do the following:

```tsx
<Button backgroundColor="$primary">Click me</Button>
```

The same applies for [text style props](https://reactnative.dev/docs/text-style-props) for `Text` components.

```tsx
<Text fontWeight="500">I am a bold text</Text>
```

## Creating components

Prefer pulling in components directly from `tamagui` when possible. Extend and override existing vanilla tamagui component styles and variants with `styled()`. The Tamagui compiler will handle the overhead of merging styles at build time.

```tsx
const MyImage = styled(Image, {
  backgroundColor: "red",
});
```

Only in very rare instances should we pull in an element directly from `react-native`, but when we do, we can wrap the element in `setupReactNative()` to pull in Tamagui style props.

```tsx
import { Image } from "react-native";
import { setupReactNative } from "tamagui";

setupReactNative({ Image });
```

## Variants

## Testing

All methods from `@testing-library/react` and `@testing-library/user-event` are exported from [test-utils](./tests/testUtils.tsx). A custom render method overrides the render method from `@testing-library/react` that includes global context providers - in this case, `TamaguiProvider`. This allows us to render components without having to include this provider every time.

Please ensure that for each component, there are tests and stories. Stories are used to document the component and provide a playground for testing. Tests are used to ensure that the component is working as expected.

Interaction tests can be used to simulate user behavior, and to get a component to a desired state. For more information, see [here](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
