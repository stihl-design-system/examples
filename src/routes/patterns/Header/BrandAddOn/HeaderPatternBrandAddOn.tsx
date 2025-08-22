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

import styles from './HeaderPatternBrandAddOn.module.scss';

export default interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const HeaderExampleBrandCustom = (): JSX.Element => {
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
        brandAddOnProps={{
          children: 'Official importer',
          subTitle: 'Company Name Goes Here',
          variant: 'double',
        }}
      >
        <DSTopBar>
          <DSTopBar.BrandArea />

          <DSTopBar.PrimaryArea>
            <nav
              aria-label={'Utility'}
              className={styles.utilityNavigationBrandAddOn}
            >
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
                <li
                  aria-hidden='true'
                  className={styles.verticalDividerContainer}
                >
                  <div className={styles.verticalDivider} />
                </li>

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
export const Route = createFileRoute('/patterns/Header/BrandAddOn')({
  component: HeaderExampleBrandCustom,
});
