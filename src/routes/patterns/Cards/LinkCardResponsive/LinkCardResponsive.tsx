import { DSLinkCard } from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import styles from './LinkCardResponsive.module.scss';

const LinkCardResponsivePattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles['card-container']}>
        <DSLinkCard
          href='#'
          heading='Charging and energy management in the STIHL AP system'
          className={styles['card-responsive']}
          cardClassNames={{
            contentWrapper: styles['card-content-wrapper'],
            imageWrapper: styles['card-image-wrapper'],
            headerWrapper: styles['card-header-wrapper'],
            footerWrapper: styles['card-footer-wrapper'],
            flagsWrapper: styles['card-flags-wrapper'],
          }}
          description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          img={
            <img
              src='/card-example-image-1.webp'
              className={styles['card-image']}
              alt='Two workers load tree branches and chainsaw equipment onto the open bed of a white pickup truck parked on a path in a landscaped urban park during autumn.'
            />
          }
          flags={['Battery', 'AP-System', 'Energy']}
          flagListAriaLabel='Category list'
          metaData='Meta Information'
          decorativeLinkButtonProps={{
            label: 'Read more',
            iconName: 'arrow-right',
          }}
        />
      </div>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/LinkCardResponsive/LinkCardResponsive'
)({
  component: LinkCardResponsivePattern,
});
