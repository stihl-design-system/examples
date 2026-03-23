/**
 * This file has a "-" prefix in its filename,
 * indicating for @tanstack/react-router that this file should be ignored when building the routes.
 * */
import { DSTextUtility } from '@stihl-design-system/components';
import classNames from 'classnames';
import type { HTMLAttributes, JSX } from 'react';
import styles from './-Price.module.scss';

export interface PriceDiscount {
  /** Former price shown with strikethrough. */
  previousAmount: string;
  /** Absolute amount the customer saves. */
  savingsAmount: string;
  /** Relative discount shown in percent, e.g. `14%`. */
  savingsPercentage: string;
}

export interface PriceProps extends HTMLAttributes<HTMLDivElement> {
  /** Current price value. */
  amount: string;
  /** Discount details. When set, a second line with savings is rendered. */
  discount?: PriceDiscount;
  /** Label for the price label. */
  label?: string;
  /** VAT label shown next to the current price.
   * @default 'incl. VAT'
   */
  vatLabel?: string;
}

/**
 * Example implementation pattern for a Price component.
 *
 * !! This is just an example and is NOT an official design system component.
 * !! It is only used for demonstration purposes in the ProductCardGrid template and is not part of the design system's public API.
 *
 */
export const Price = ({
  amount,
  className,
  discount,
  label,
  vatLabel = 'incl. VAT',
  ...rest
}: PriceProps): JSX.Element => {
  const rootClass = classNames(styles.root, className);

  return (
    <div {...rest} className={rootClass}>
      {label && (
        <DSTextUtility size='x-small' weight='demi' className={styles.label}>
          {label}
        </DSTextUtility>
      )}
      <div className={styles.primaryRow}>
        <span className={styles.amount}>{amount}</span>
        <span className={styles.vat}>{vatLabel}</span>
      </div>

      {discount && (
        <div className={styles.discountRow}>
          <span className={styles.previousAmount}>
            {discount.previousAmount}
          </span>
          <span className={styles.savings}>
            Save {discount.savingsAmount} ({discount.savingsPercentage})
          </span>
        </div>
      )}
    </div>
  );
};

Price.displayName = 'Price';
