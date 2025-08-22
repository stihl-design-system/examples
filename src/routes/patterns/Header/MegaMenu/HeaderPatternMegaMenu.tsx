import { createFileRoute } from '@tanstack/react-router'
import classNames from 'classnames';
import { useState, type JSX } from 'react';
import { DSButton } from '@stihl-design-system/components';
import { DSHeader } from '@stihl-design-system/components';
import { DSMegaMenu } from '@stihl-design-system/components';
import { DSScroller } from '@stihl-design-system/components';
import { DSSkipToContent } from '@stihl-design-system/components';
import { DSTopBar } from '@stihl-design-system/components';
import { MegaMenuContentExample } from '@/components/Header/MainNavigation/MainNavigation';
import styles from './HeaderPatternMegaMenu.module.scss';

export default interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const HeaderExampleMegaMenu = (): JSX.Element => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  return (
    <>
      <DSSkipToContent />
      <DSHeader variant='full'>
        <DSTopBar>
          <DSTopBar.BrandArea />
          <DSTopBar.PrimaryArea> </DSTopBar.PrimaryArea>
        </DSTopBar>
        <DSHeader.MainNavigationArea>
          <DSScroller className={styles.mainNavigation}>
            <nav aria-label='Products Navigation'>
              <ul>
                <li>
                  <DSMegaMenu
                    isOpen={isMegaMenuOpen}
                    onOpenChange={setIsMegaMenuOpen}
                  >
                    <DSMegaMenu.Anchor>
                      <DSButton
                        variant='navigation'
                        iconName={'chevron-down'}
                        className={classNames(styles.chevron, {
                          [styles.chevronOpen]: isMegaMenuOpen,
                        })}
                        iconPosition='right'
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      >
                        Products
                      </DSButton>
                    </DSMegaMenu.Anchor>
                    <DSMegaMenu.Content>
                      <MegaMenuContentExample subMenu='products' isReduced />
                    </DSMegaMenu.Content>
                  </DSMegaMenu>
                </li>
              </ul>
            </nav>
          </DSScroller>
        </DSHeader.MainNavigationArea>
      </DSHeader>
    </>
  );
};


// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Header/MegaMenu/HeaderPatternMegaMenu'
)({
  component: HeaderExampleMegaMenu,
});
