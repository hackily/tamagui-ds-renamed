import {
  Input as TamaguiInput,
  SizableText,
  YGroup,
  YStack,
  styled,
  Label,
  GetProps,
} from "tamagui";
import React from "react";

const InputFrame = styled(YGroup, {
  variants: {
    unstyled: {
      false: {
        paddingHorizontal: "$2",
        paddingVertical: "$3",
        borderColor: "$black",
        borderWidth: "$0.5",
        backgroundColor: "$white",
        disablePassBorderRadius: true,
      },
    },
    error: {
      true: {
        borderColor: "$feedbackError",
      },
    },
  } as const,
  defaultVariants: {
    unstyled: false,
  },
});

export const Input = React.forwardRef(
  (
    {
      id,
      label,
      name,
      onBlur,
      onFocus,
      rootProps,
      validator,
      value,
      ...props
    }: {
      disabled?: boolean;
      label?: string;
      name?: string;
      rootProps?: GetProps<typeof YGroup>;
      validator?: (a: unknown) => string | undefined;
    } & GetProps<typeof TamaguiInput>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const lastFocusedRef = React.useRef(false);
    const [errorText, setErrorText] = React.useState<string | void>();
    return (
      <YStack {...rootProps}>
        <InputFrame error={Boolean(errorText)} marginBottom="$1.5">
          {typeof label === "string" && Boolean(value) && (
            <Label
              htmlFor={id || name}
              size="$sm"
              fontWeight="500"
              lineHeight="$xs"
              marginBottom="$1.5"
              padding="$0"
            >
              {label}
            </Label>
          )}
          <TamaguiInput
            id={id || name}
            accessibilityLabel={name}
            accessibilityHint={props?.accessibilityHint || name}
            ref={ref}
            placeholderTextColor="$gray400"
            size="$lg"
            paddingVertical="$0" // Android has some default padding that needs to be overridden
            unstyled
            value={value}
            focusStyle={{
              outlineStyle: "none",
            }}
            onFocus={(e) => {
              if (onFocus) {
                onFocus(e);
              }
              lastFocusedRef.current = true;
              setErrorText(undefined);
            }}
            onBlur={(e) => {
              if (onBlur) {
                onBlur(e);
              }
              if (validator && !props.disabled) {
                setErrorText(validator(value));
              }
              lastFocusedRef.current = false;
            }}
            {...props}
          />
        </InputFrame>
        {errorText && (
          <SizableText size="$md" color="$feedbackError" marginLeft="$2">
            {errorText}
          </SizableText>
        )}
      </YStack>
    );
  }
);
