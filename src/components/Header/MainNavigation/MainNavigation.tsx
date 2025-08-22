import classNames from 'classnames';
import { useState, type JSX } from 'react';

import { DSActionButton } from '@stihl-design-system/components';
import { DSButton } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';
import { DSMegaMenu } from '@stihl-design-system/components';
import { DSScroller } from '@stihl-design-system/components';
import { DSText } from '@stihl-design-system/components';
import styles from './MainNavigation.module.scss';

export interface MainNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  megaMenuOpenOnInit?: boolean;
}

/**
 * The `<MainNavigation />`.
 *
 * Design in Figma: [Input File](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/branch/Y4CQTYvfMrZJQZEGPoVzmI/Core-Components-%F0%9F%92%A0?node-id=30759-4276&t=sOn3fBBbdQPXTKmc-11)
 */
export const MainNavigation = ({
  className,
  megaMenuOpenOnInit = false,
  ...rest
}: MainNavigationProps): JSX.Element => {
  const mainNavigationClass = classNames(styles.mainNavigation, className);
  const [isProductsOpen, setIsProductsOpen] = useState(megaMenuOpenOnInit);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  return (
    <DSScroller className={mainNavigationClass}>
      <nav aria-label='Main' {...rest}>
        <ul>
          <li>
            <DSMegaMenu
              isOpen={isProductsOpen}
              onOpenChange={setIsProductsOpen}
            >
              <DSMegaMenu.Anchor>
                <DSButton
                  variant='navigation'
                  iconName={'chevron-down'}
                  className={classNames(styles.chevron, {
                    [styles.chevronOpen]: isProductsOpen,
                  })}
                  iconPosition='right'
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                </DSButton>
              </DSMegaMenu.Anchor>
              <DSMegaMenu.Content>
                <MegaMenuContentExample />
              </DSMegaMenu.Content>
            </DSMegaMenu>
          </li>
          <li>
            <DSMegaMenu
              isOpen={isAccessoriesOpen}
              onOpenChange={setIsAccessoriesOpen}
            >
              <DSMegaMenu.Anchor>
                <DSButton
                  variant='navigation'
                  iconName={'chevron-down'}
                  className={classNames(styles.chevron, {
                    [styles.chevronOpen]: isAccessoriesOpen,
                  })}
                  iconPosition='right'
                  onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
                >
                  Accessories
                </DSButton>
              </DSMegaMenu.Anchor>
              <DSMegaMenu.Content>
                <MegaMenuContentExample subMenu='accessories' />
              </DSMegaMenu.Content>
            </DSMegaMenu>
          </li>

          <li>
            <DSLinkButton
              variant='navigation'
              href='#'
              iconName='arrow-out'
              iconPosition='right'
              target='_blank'
            >
              Others
            </DSLinkButton>
          </li>
        </ul>
      </nav>
    </DSScroller>
  );
};

export const MegaMenuContentExample = ({
  subMenu,
  isReduced = false,
}: {
  subMenu?: 'products' | 'accessories';
  isReduced?: boolean;
}): JSX.Element => {
  const subMenuItems = {
    products: [
      'Sawing and cutting',
      'Mowing and planting',
      'Cleaning and clearing',
      'Garden size',
      'Offers and promotions',
      'Merchandise',
      'All products',
    ],
    accessories: [
      'STIHL sustainability strategy',
      'Education and people',
      'Economic sustainability',
      'Social engagement',
      'Climate strategy',
      'Environmental protection',
      'STIHL and the rainforest',
    ],
  };

  return (
    <div className={styles.megaMenuContent}>
      <div className={styles.megaMenuContentLeft}>
        <ul>
          {(() => {
            // reduce to first 3 items if isReduced is set
            const items = subMenuItems[subMenu || 'products'];
            const visibleItems = isReduced ? items.slice(0, 3) : items;
            return visibleItems.map((item, index) => (
              <li key={index}>
                <DSActionButton
                  role='menuitem'
                  chevronDirection='right'
                  isActive={index === 0}
                >
                  {item}
                </DSActionButton>
              </li>
            ));
          })()}
        </ul>
      </div>
      <div className={styles.megaMenuContentRight}>
        <DSText>
          Some content to show the showcase the scrollable area of the MegaMenu.
        </DSText>
        <div className={styles.megaMenuPlaceholder}>Placeholder scrollable</div>
        <DSText>
          Some content to show the showcase the scrollable area of the MegaMenu.
        </DSText>
      </div>
    </div>
  );
};
