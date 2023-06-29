import React from "react";
import {
  Button as TamaguiButton,
  ButtonFrame as TamaguiButtonFrame,
  styled,
  withStaticProperties,
  Spinner,
  GetProps,
} from "tamagui";

const ButtonFrame = styled(TamaguiButtonFrame, {
  borderRadius: 100_000,
  bordered: false,
  variants: {
    unstyled: {
      false: {
        backgroundColor: "$primary",
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        height: "$5",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    loading: {
      true: {
        pointerEvents: "none",
      },
    },
  } as const,
});

const ButtonText = styled(TamaguiButton.Text, {
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        size: "$xl",
        color: "$white",
      },
    },
  } as const,
  defaultVariants: {
    unstyled: false,
  },
});

const ButtonComponent = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: TamaguiButton.Icon,
});

export function Button({
  loading,
  children,
  textProps,
  ...props
}: {
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  textProps: GetProps<typeof ButtonText>;
} & GetProps<typeof TamaguiButton>) {
  return (
    <ButtonComponent loading={loading} {...props}>
      {loading ? (
        <Spinner />
      ) : (
        <ButtonComponent.Text {...textProps}>{children}</ButtonComponent.Text>
      )}
    </ButtonComponent>
  );
}
