import { createFileRoute } from '@tanstack/react-router'
import classNames from 'classnames';
import { useState, type JSX } from 'react';
import { DSActionButton } from '@stihl-design-system/components';
import { DSActionLink } from '@stihl-design-system/components';
import { DSBanner } from '@stihl-design-system/components';
import { DSHeader } from '@stihl-design-system/components';
import { DSIcon } from '@stihl-design-system/components';
import { DSInputSearch } from '@stihl-design-system/components';
import { DSLink } from '@stihl-design-system/components';
import { DSSkipToContent } from '@stihl-design-system/components';
import { DSTopBar } from '@stihl-design-system/components';

import { MainNavigation } from '@/components/Header/MainNavigation/MainNavigation';
import { Account } from '@/components/Header/UtilityNavigation/Account/Account';
import { AppSwitch } from '@/components/Header/UtilityNavigation/AppSwitch/AppSwitch';
import { LanguageSelect } from '@/components/Header/UtilityNavigation/LanguageSelect/LanguageSelect';

import { MobileMenu } from './-MobileMenu';
import styles from './HeaderPatternComplete.module.scss';

export default interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const HeaderExampleComplete = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
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

        <DSTopBar >
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
          </DSTopBar.SecondaryArea>
        </DSTopBar>
        <DSHeader.MainNavigationArea >
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
  component: HeaderExampleComplete,
});
