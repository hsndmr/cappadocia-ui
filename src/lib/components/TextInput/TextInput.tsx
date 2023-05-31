import type { ChangeEvent, FocusEvent } from 'react';

import { clsx } from 'clsx';
import { forwardRef, useId, useState } from 'react';
import type { Size } from '../../../types/theme.type';
import useForwardRef from '../../hooks/useForwardRef/useForwardRef';

export type TextInputColor = 'default' | 'warning' | 'error' | 'success';

type BaseTextInputProps = React.ComponentPropsWithoutRef<'input'> & Partial<Record<Size, boolean>>;

export interface TextInputProps extends BaseTextInputProps {
  className?: string;
  label?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: React.ReactNode;
  warning?: boolean;
  error?: boolean;
  success?: boolean;
  gray?: boolean;
  customSize?: string;
  customColor?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, leftIcon, rightIcon, onBlur, onFocus, onChange, helperText, warning, success, error, gray, md, lg, xl },
    ref,
  ) => {
    const defaultColor = !(warning || success || error) || gray;
    const defaultSize = !(md || xl) || lg;
    const id = useId();

    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const isLabelPositionTop = isFocused || value;

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div>
        <div
          className={clsx(
            'flex items-center rounded-md border px-3',
            defaultColor && 'border-gray-500 text-gray-500',
            error && 'border-red-500 bg-red-100 text-red-500',
            success && 'border-green-500 bg-green-100 text-green-500',
            warning && 'border-orange-500 bg-orange-100 text-orange-500',
            isFocused && '!border-2 !border-primary-600 shadow-md shadow-primary-400/20',
          )}
        >
          {leftIcon && <div className="mr-3">{leftIcon}</div>}
          <div className="relative flex-grow">
            {label && (
              <label
                onClick={() => {
                  inputRef.current?.focus();
                }}
                htmlFor={id}
                className={clsx(
                  'absolute left-0 cursor-text duration-100 ease-in',
                  !isLabelPositionTop && 'top-1/2 -translate-y-1/2 transform',
                  defaultSize && 'text-md',
                  md && 'text-sm',
                  xl && 'text-lg',
                  isLabelPositionTop && defaultSize && 'top-1.5 text-xs',
                  isLabelPositionTop && md && 'top-0.5 text-xs',
                  isLabelPositionTop && xl && 'top-1 text-sm',
                )}
              >
                {label}
              </label>
            )}
            <input
              type="text"
              id={id}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              className={clsx(
                'w-full border-0 bg-transparent text-gray-700 outline-none',
                xl && 'tex-md pb-3 pt-7',
                defaultSize && 'pb-2 pt-5',
                md && 'pb-1 pt-4 text-sm',
              )}
            />
          </div>
          {rightIcon && <div className="ml-3">{rightIcon}</div>}
        </div>
        {helperText && (
          <div
            className={clsx(
              'mt-2',
              defaultColor && 'text-gray-700',
              error && 'text-red-600',
              success && 'text-green-600',
              warning && 'text-orange-600',
            )}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;
