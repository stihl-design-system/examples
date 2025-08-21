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
  return (
    <DSDrawer
      isOpen={showMobileMenu}
      onClose={() => setShowMobileMenu(false)}
      position='end'
      className={styles.menu}
    >
      <div className={styles.content}>
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
          </ul>
        </nav>
      </div>
    </DSDrawer>
  );
};
