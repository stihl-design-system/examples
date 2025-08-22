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
  return (
    <DSDrawer
      isOpen={showMobileMenu}
      onClose={() => setShowMobileMenu(false)}
      position='end'
      className={styles.menu}
    >
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
          </ul>
        </nav>
      </div>
    </DSDrawer>
  );
};
