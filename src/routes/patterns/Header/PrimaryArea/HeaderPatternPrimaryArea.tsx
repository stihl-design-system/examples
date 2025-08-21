import { createFileRoute } from '@tanstack/react-router';
import classNames from 'classnames';
import { useState, type JSX } from 'react';

import {
  DSActionButton,
  DSActionLink,
  DSHeader,
  DSSkipToContent,
  DSTopBar,
} from '@stihl-design-system/components';

import { Account } from '@/components/Header/UtilityNavigation/Account/Account';
import { AppSwitch } from '@/components/Header/UtilityNavigation/AppSwitch/AppSwitch';
import { LanguageSelect } from '@/components/Header/UtilityNavigation/LanguageSelect/LanguageSelect';
import { MobileMenu } from '@/components/Header/UtilityNavigation/MobileMenu/MobileMenu';

import styles from './HeaderPatternPrimaryArea.module.scss';

export default interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const HeaderExamplePrimaryOnly = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <DSSkipToContent />
      <DSHeader
        logoProps={{
          aria: { 'aria-label': 'STIHL Deutschland Website' },
          href: '/',
        }}
      >
        <DSTopBar>
          <DSTopBar.BrandArea />

          <DSTopBar.PrimaryArea>
            <nav aria-label={'Utility'} className={styles.utilityNavigation}>
              <ul className={styles.list}>
                <li className={styles.onlyDesktop}>
                  <DSActionLink
                    href='/?path=/docs/components-navigation-tabs--documentation#'
                    iconPosition='top'
                    iconName='envelope'
                    numberIndicatorValue=''
                  >
                    Contact
                  </DSActionLink>
                </li>
                <li>
                  <DSActionLink
                    href='/?path=/docs/components-navigation-tabs--documentation#'
                    iconPosition='top'
                    numberIndicatorValue='5'
                    iconName='cart'
                  >
                    Cart
                  </DSActionLink>
                </li>
                <li className={styles.onlyDesktop}>
                  <LanguageSelect />
                </li>

                {/* Vertical divider, with aria-hidden="true" */}
                <li aria-hidden='true' className={styles.verticalDivider} />

                <li className={styles.onlyDesktop}>
                  <AppSwitch />
                </li>
                <li className={styles.onlyDesktop}>
                  <Account />
                </li>

                <li
                  className={classNames(
                    styles.mobileMenuButton,
                    styles.onlyMobile
                  )}
                >
                  <DSActionButton
                    iconName='burger'
                    iconPosition='top'
                    onClick={() => setShowMobileMenu(true)}
                    aria={{ 'aria-label': 'Open menu' }}
                  >
                    Menu
                  </DSActionButton>
                </li>
              </ul>
            </nav>
            <MobileMenu
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </DSTopBar.PrimaryArea>
        </DSTopBar>
      </DSHeader>
    </>
  );
};

export const Route = createFileRoute(
  '/patterns/Header/PrimaryArea/HeaderPatternPrimaryArea'
)({
  component: HeaderExamplePrimaryOnly,
});
