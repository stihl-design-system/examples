import {
  DSActionButton,
  DSActionLink,
  DSHeader,
  DSSkipToContent,
  DSTopBar,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import classNames from 'classnames';
import { useState, type JSX } from 'react';

import { Account } from '../../../../components/Header/UtilityNavigation/Account/Account.tsx';
import { AppSwitch } from '../../../../components/Header/UtilityNavigation/AppSwitch/AppSwitch.tsx';
import { LanguageSelect } from '../../../../components/Header/UtilityNavigation/LanguageSelect/LanguageSelect.tsx';
import { MobileMenu } from '../../../../components/Header/UtilityNavigation/MobileMenu/MobileMenu.tsx';

import styles from './HeaderPatternPrimaryArea.module.scss';

const HeaderPatternPrimaryArea = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      {/* Provide a “Skip to Content” link before navigation to improve accessibility. */}
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
            {/**
             * Screen readers read this out as "Utility, Navigation". So there is no need to add "Navigation" manually to the aria-label.
             * Don't forget to translate it.
             */}
            <nav aria-label='Utility' className={styles.utilityNavigation}>
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

                {/* The LanguageSelect button in the DSTopBar should only be visible on viewports >= L (1024px). */}
                <li className={styles.onlyDesktop}>
                  <LanguageSelect />
                </li>

                {/* Vertical divider, with aria-hidden="true" */}
                <li aria-hidden='true' className={styles.verticalDivider} />

                {/* The AppSwitch button in the DSTopBar should only be visible on viewports >= L (1024px). */}
                <li className={styles.onlyDesktop}>
                  <AppSwitch />
                </li>
                {/* The Account button in the DSTopBar should only be visible on viewports >= L (1024px). */}
                <li className={styles.onlyDesktop}>
                  <Account />
                </li>
                {/* The burger menu button should only be visible on viewports < L (1024px). */}
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

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Header/PrimaryArea/HeaderPatternPrimaryArea'
)({
  component: HeaderPatternPrimaryArea,
});
