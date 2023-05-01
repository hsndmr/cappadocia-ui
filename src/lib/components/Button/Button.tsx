import classNames from 'classnames';
import { forwardRef } from 'react';
import type { Color, Radius, Size } from '../../../types/theme.type';
import SpinnerComponent from '../Spinner/Spinner';

export type SizeClass = {
  spinner?: string;
  button?: string;
};

export type BorderType = 'default' | 'outline' | 'none';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonClassName?: string;
  color?: Color;
  size?: Size;
  spinner?: React.ReactNode;
  isProcessing?: boolean;
  spinnerClassName?: string;
  customSize?: SizeClass;
  radius?: Radius;
  borderType?: BorderType;
  customColor?: string;
  customRadius?: string;
  href?: string;
  to?: string;
  as?: React.ElementType;
}

const radiusVariants: Record<Radius, string> = {
  default: 'rounded-1.5xl',
  full: 'rounded-full',
  none: '',
};

const defaultColorVariants: Record<Color, string> = {
  dark: 'bg-gray-dark text-white hover:bg-gray-950 focus:bg-gray-950 dark:bg-gray-light dark:text-black dark:hover:bg-gray-50 dark:focus:bg-gray-800',
  light: 'bg-primary/20 text-primary hover:bg-primary/40 focus:bg-primary/40 dark:bg-primary/25 text-primary',
  primary: 'bg-primary text-white hover:bg-primary-800 focus:bg-primary-800',
  gray: 'bg-gray-light text-gray-dark hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-dark dark:text-white dark:hover:bg-gray-900 dark:focus:bg-gray-900',
};

const outlineColorVariants: Record<Color, string> = {
  dark: 'border-2 border-gray-dark text-gray-dark hover:bg-gray-dark hover:text-gray-light focus:bg-gray-dark focus:text-gray-light dark:border-gray-700 dark:text-gray-light dark:hover:bg-gray-light dark:hover:text-gray-dark dark:focus:bg-gray-light dark:focus:text-gray-dark',
  light: 'border-2 border-primary/20 text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white',
  primary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white',
  gray: 'border-2 border-gray-light text-gray-dark hover:bg-gray-light focus:bg-gray-light dark:text-white dark:hover:bg-gray-light dark:hover:text-black dark:focus:bg-gray-light dark:focus:text-gray-dark',
};

const noneColorVariants: Record<Color, string> = {
  dark: 'text-gray-dark hover:text-gray-950 active:text-gray-950 focus:text-gray-950 dark:text-gray-light dark:hover:text-gray-50 dark:active:text-gray-50 dark:focus:text-gray-50',
  light: 'text-primary/20 hover:text-primary-800 active:text-primary-800 focus:text-primary-800',
  primary: 'text-primary hover:text-primary-800 active:text-primary-800 focus:text-primary-800',
  gray: 'text-gray hover:text-gray-700 active:text-gray-700 focus:text-gray-700 dark:text-gray-light dark:hover:text-gray-200 dark:active:text-gray-200 dark:focus:text-gray-200',
};

const colorVariants: Record<BorderType, Record<Color, string>> = {
  default: defaultColorVariants,
  outline: outlineColorVariants,
  none: noneColorVariants,
};

const sizeVariants: Record<
  Size,
  {
    spinner: string;
    button: string;
  }
> = {
  xl: {
    spinner: 'h-5 w-5',
    button: 'px-5 py-3.5 text-xl',
  },
  lg: {
    spinner: 'h-4 w-4',
    button: 'px-5 py-3.5 text-0.5lg',
  },
  md: {
    spinner: 'h-3.5 w-3.5',
    button: 'px-4 py-2.5 text-base',
  },
  sm: {
    spinner: 'h-3 w-3',
    button: 'px-3 py-2 text-sm',
  },
  xs: {
    spinner: 'h-2.5 w-2.5',
    button: 'px-2 py-1.5 text-xs',
  },
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      buttonClassName,
      color = 'primary',
      size = 'lg',
      children,
      spinner: Spinner = <SpinnerComponent />,
      className,
      isProcessing,
      radius = 'default',
      customSize = {},
      borderType = 'default',
      customColor,
      customRadius,
      href,
      as,
      type,
      ...props
    },
    ref,
  ) => {
    const isButton = as === undefined;
    const Component = isButton ? 'button' : as;

    return (
      <Component
        ref={ref as never}
        className={classNames([
          buttonClassName ?? 'flex items-center transition ease-in-out disabled:opacity-75',
          customRadius ?? radiusVariants[radius],
          customColor ?? colorVariants[borderType][color],
          customSize?.button ?? sizeVariants[size].button,
          className,
        ])}
        href={href}
        type={isButton && !type ? 'button' : undefined}
        {...props}
      >
        {isProcessing && (
          <span className={classNames(['mr-1.5', customSize?.spinner ?? sizeVariants[size].spinner])}>{Spinner}</span>
        )}
        {children}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export default Button;
