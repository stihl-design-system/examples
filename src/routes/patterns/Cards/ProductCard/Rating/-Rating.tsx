/**
 * This file has a "-" prefix in its filename,
 * indicating for @tanstack/react-router that this file should be ignored when building the routes.
 * */
import type { SelectedAriaAttributes } from '@stihl-design-system/components';
import { DSIcon } from '@stihl-design-system/components';
import classNames from 'classnames';
import type { CSSProperties, HTMLAttributes } from 'react';
import React from 'react';
import styles from './-Rating.module.scss';

export type RatingSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

// Keys of ARIA attributes permitted for Rating component
export type RatingAriaAttributes = 'aria-label';

export const clampRating = (value: number): number => {
  if (Number.isNaN(value)) {
    return 0;
  }
  if (value < 0) {
    return 0;
  }
  if (value > 5) {
    return 5;
  }
  return value;
};

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  /** Numeric rating value from 0 to 5. Will be clamped to this range.
   * @default 0
   */
  value?: number;
  /** Optional number of reviews to display in parentheses. */
  count?: number;
  /** Icon size for stars.
   * @default 'large'
   */
  size?: RatingSize;
  /** ARIA attributes for accessible labeling.
   * {'aria-label'?: string}
   */
  aria?: SelectedAriaAttributes<RatingAriaAttributes>;
}

/**
 * Example implementation pattern for a Rating component.
 *
 * !! This is just an example and is NOT an official design system component.
 * !! It is only used for demonstration purposes in the ProductCardGrid template and is not part of the design system's public API.
 *
 */
export const Rating: React.FC<RatingProps> = ({
  aria,
  className,
  value = 0,
  count,
  size = 'large',
  ...rest
}: RatingProps) => {
  const clamped = clampRating(value);
  const fullStars = Math.floor(clamped);
  const partialFill = clamped - fullStars;
  const hasPartialStar = partialFill > 0;
  const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);

  const rootClass = classNames(styles.root, className);

  return (
    <div {...rest} className={rootClass} aria-label={aria?.['aria-label']}>
      <div className={styles.stars} aria-hidden={true}>
        {Array.from({ length: fullStars }).map((_, index) => {
          return (
            <DSIcon
              className={styles.starFull}
              key={`star-full-${index}`}
              name={'star'}
              size={size}
            />
          );
        })}
        {hasPartialStar && (
          <span className={styles.starPartial} key={'star-partial'}>
            <DSIcon className={styles.starEmpty} name={'star'} size={size} />
            <span
              className={styles.starPartialFill}
              style={
                {
                  '--rating-partial-fill': `${partialFill * 100}%`,
                } as CSSProperties
              }
              data-testid={'rating-star-partial-fill'}
            >
              <DSIcon className={styles.starFull} name={'star'} size={size} />
            </span>
          </span>
        )}
        {Array.from({ length: emptyStars }).map((_, index) => {
          return (
            <DSIcon
              key={`star-empty-${index}`}
              name={'star'}
              size={size}
              className={styles.starEmpty}
              aria={{ 'aria-label': 'empty star' }}
            />
          );
        })}
      </div>
      <div className={styles.valueWrapper}>
        <span>{clamped.toFixed(1)}</span>
        {typeof count === 'number' && <span>({count})</span>}
      </div>
    </div>
  );
};

Rating.displayName = 'Rating';
