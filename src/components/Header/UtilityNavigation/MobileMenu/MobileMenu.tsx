import {
  DSActionButton,
  DSActionLink,
  DSDrawer,
} from '@stihl-design-system/components';
import styles from './MobileMenu.module.scss';

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
       * DSActionButton & DSActionLink from the DSTopBar
       * elements are moved into, on viewports < L (1024px).
       */}
      <div className={styles.content}>
        {/**
         * Screen readers read this out as "Utility, Navigation". So there is no need to add "Navigation" manually to the aria-label.
         * Don't forget to translate it.
         */}
        <nav aria-label='Utility'>
          <ul className={styles.list}>
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
