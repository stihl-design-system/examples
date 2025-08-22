import {
  DSActionButton,
  DSActionLink,
  DSButton,
  DSDrawer,
  DSLinkButton,
} from '@stihl-design-system/components';
import styles from './-MobileMenu.module.scss';

interface MobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

export const MobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
}: MobileMenuProps) => {
  /* Use DSDrawer for Mobile Menu. Since it's placed in the Top Layer it can be used at any position. */
  return (
    <DSDrawer
      isOpen={showMobileMenu}
      onClose={() => setShowMobileMenu(false)}
      position='end'
      className={styles.menu}
    >
      {/**
       * Example of a Mobile Menu where the
       * DSButton variant navigation & DSLinkButton variant navigation from the DSHeader.MainNavigationArea and
       * DSActionButton & DSActionLink from the DSTopBar
       * elements are moved into, on viewports < L (1024px).
       */}
      <div className={styles.content}>
        <nav aria-label='Main'>
          <ul className={styles.list}>
            <li>
              <DSButton
                variant='navigation'
                iconName='chevron-right'
                iconPosition='right'
              >
                Products
              </DSButton>
            </li>
            <li>
              <DSButton
                variant='navigation'
                iconName='chevron-right'
                iconPosition='right'
              >
                Accessories
              </DSButton>
            </li>
            <li>
              <DSLinkButton
                variant='navigation'
                href='#'
                iconName='arrow-out'
                iconPosition='right'
                target='_blank'
              >
                Professionals
              </DSLinkButton>
            </li>
            {/* ... other navigation elements move here from the DSHeader.MainNavigationArea */}
          </ul>
        </nav>
        <nav aria-label='Utility'>
          <ul className={styles.list}>
            {/* Horizontal divider, with aria-hidden="true" */}
            <li aria-hidden='true' className={styles.horizontalDivider} />
            <li>
              <DSActionLink
                href='/?path=/docs/components-navigation-tabs--documentation#'
                iconPosition='left'
                stretched={true}
                iconName='envelope'
                numberIndicatorValue=''
              >
                Contact
              </DSActionLink>
            </li>
            <li>
              <DSActionButton
                iconName='globe'
                chevronDirection='right'
                stretched={true}
              >
                Language Select
              </DSActionButton>
            </li>
            <li>
              <DSActionButton
                iconName={'nine-squares'}
                chevronDirection='right'
                stretched={true}
              >
                STIHL World
              </DSActionButton>
            </li>

            <li>
              <DSActionButton
                iconName={'user'}
                chevronDirection='right'
                stretched={true}
              >
                My account
              </DSActionButton>
            </li>
            {/* ... other navigation elements move here from the DSTopBar Utility Navigation */}
          </ul>
        </nav>
      </div>
    </DSDrawer>
  );
};
