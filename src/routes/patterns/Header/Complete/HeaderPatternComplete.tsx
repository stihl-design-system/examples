import {
  DSActionButton,
  DSActionLink,
  DSBanner,
  DSHeader,
  DSIcon,
  DSInputSearch,
  DSLink,
  DSSkipToContent,
  DSTopBar,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import classNames from 'classnames';
import { useState, type JSX } from 'react';

import { MainNavigation } from '../../../../components/Header/MainNavigation/MainNavigation.tsx';
import { Account } from '../../../../components/Header/UtilityNavigation/Account/Account.tsx';
import { AppSwitch } from '../../../../components/Header/UtilityNavigation/AppSwitch/AppSwitch.tsx';
import { LanguageSelect } from '../../../../components/Header/UtilityNavigation/LanguageSelect/LanguageSelect.tsx';

import { MobileMenu } from './-MobileMenu';
import styles from './HeaderPatternComplete.module.scss';

export default interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const HeaderPatternComplete = (): JSX.Element => {
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
        brandAddOnProps={{ children: 'Brand AddOn' }}
      >
        <DSHeader.BannerArea>
          <DSBanner>
            <div className={styles.bannerContent}>
              <DSIcon aria-hidden='true' name='placeholder' theme='dark' />
              <DSLink
                iconName='chevron-right'
                href='#'
                theme='dark'
                iconPosition='right'
              >
                Promo Banner Link
              </DSLink>
            </div>
          </DSBanner>
        </DSHeader.BannerArea>

        <DSTopBar>
          <DSTopBar.BrandArea></DSTopBar.BrandArea>
          <DSTopBar.PrimaryArea>
            <form role='search' className={styles.inputSearchForm}>
              <DSInputSearch
                name='product-search'
                id='product-search'
                label='Product search'
                placeholder='Product search'
                hideLabel={true}
                className={styles.inputSearchRounded}
              />
            </form>
          </DSTopBar.PrimaryArea>
          <DSTopBar.SecondaryArea>
            <nav aria-label={'Utility'}>
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
          </DSTopBar.SecondaryArea>
        </DSTopBar>
        <DSHeader.MainNavigationArea>
          <MainNavigation />
        </DSHeader.MainNavigationArea>
      </DSHeader>
    </>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Header/Complete/HeaderPatternComplete'
)({
  component: HeaderPatternComplete,
});
