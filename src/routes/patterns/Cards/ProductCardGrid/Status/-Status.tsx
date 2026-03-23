/**
 * This file has a "-" prefix in its filename,
 * indicating for @tanstack/react-router that this file should be ignored when building the routes.
 * */
import type {
  IconName,
  SelectedAriaAttributes,
} from '@stihl-design-system/components';
import { DSIcon } from '@stihl-design-system/components';
import classNames from 'classnames';
import type { HTMLAttributes, JSX } from 'react';
import styles from './-Status.module.scss';

export type StatusAriaAttributes = 'aria-label';
export type StatusVariant = 'negative' | 'neutral' | 'positive';

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  /** Text shown next to the status indicator. */
  children: string;
  /** ARIA attributes for accessible labeling.
   * {'aria-label'?: string}
   */
  aria?: SelectedAriaAttributes<StatusAriaAttributes>;
  /** Optional icon rendered instead of the status circle.
   * @default undefined
   */
  iconName?: IconName;
  /** Color variant of the status circle.
   * @default 'positive'
   */
  variant?: StatusVariant;
}

/**
 * Example implementation pattern for a Status component.
 *
 * !! This is just an example and is NOT an official design system component.
 * !! It is only used for demonstration purposes in the ProductCardGrid template and is not part of the design system's public API.
 *
 */
export const Status = ({
  aria,
  children,
  className,
  iconName,
  variant = 'positive',
  ...rest
}: StatusProps): JSX.Element => {
  const indicatorClass = classNames(styles.indicator, {
    [styles.indicatorToneNegative]: variant === 'negative',
    [styles.indicatorToneNeutral]: variant === 'neutral',
    [styles.indicatorTonePositive]: variant === 'positive',
  });
  const rootClass = classNames(styles.root, className);

  return (
    <div {...rest} className={rootClass} aria-label={aria?.['aria-label']}>
      {iconName ? (
        <DSIcon aria-hidden={true} name={iconName} />
      ) : (
        <span aria-hidden={true} className={indicatorClass} />
      )}
      <span>{children}</span>
    </div>
  );
};

Status.displayName = 'Status';
