import {
  DSAccordion,
  DSActionCard,
  DSFlag,
  DSHeading,
  DSIcon,
  DSLinkButton,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import styles from './ActionCardResponsive.module.scss';

const ActionCardResponsivePattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles['card-container']}>
        <DSActionCard
          aria={{ 'aria-labelledby': 'card-heading' }}
          className={styles['card-responsive']}
          classNameContentWrapper={styles['card-content-wrapper']}
        >
          <DSActionCard.Header className={styles['card-header-slot']}>
            <ul className={styles['card-flags-list']} aria-label='Categories'>
              <li>
                <DSFlag color='orange-base' iconName='wrench'>
                  Our recommended service
                </DSFlag>
              </li>
              <li>
                <DSFlag color='grey-light'>Price on request</DSFlag>
              </li>
            </ul>
            <DSHeading
              size='medium'
              className={styles['card-heading']}
              id='card-heading'
            >
              STIHL Pro Service
            </DSHeading>
            <div className={styles['card-description']}>
              Your STIHL dealer checks operational safety, proactively replaces
              consumable parts, cleans and maintains your equipment.
            </div>
          </DSActionCard.Header>
          <DSActionCard.Footer className={styles['card-footer-slot']}>
            <DSLinkButton
              variant='filled'
              iconName='calendar'
              iconPosition='left'
              size='small'
              href='#'
            >
              Make an appointment
            </DSLinkButton>
            <DSLinkButton variant='outline' href='#' size='small'>
              Set or change reminder
            </DSLinkButton>
          </DSActionCard.Footer>
          <DSActionCard.Supplementary
            className={styles['card-supplementary-slot']}
          >
            <DSAccordion
              className={styles['accordion']}
              summary={{
                headingText: 'Service package includes',
                headingSize: 'small',
                headingTag: 'h2',
              }}
            >
              <ul
                className={styles['service-list']}
                aria-label='Included services'
              >
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>
                    Replacement of original parts: Maintenance parts
                    (model-dependent)
                  </span>
                </li>
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>
                    Replacement of original parts: Wear parts (model-dependent)
                  </span>
                </li>
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>Calibration and software updates</span>
                </li>
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>Intensive cleaning and lubrication</span>
                </li>
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>Documentation and service sticker</span>
                </li>
                <li>
                  <DSIcon name='circle-check-inverted' aria-hidden='true' />
                  <span>
                    Safety inspection according to the Operational Safety
                    Ordinance (BetrSichV)
                  </span>
                </li>
              </ul>
            </DSAccordion>
          </DSActionCard.Supplementary>
          <DSActionCard.Media className={styles['card-media-slot']}>
            <img
              src='/action-card-example-image-1.webp'
              className={styles['card-image']}
              alt='Technician inspecting a STIHL iMOW robotic lawn mower on a workbench in a workshop.'
            />
          </DSActionCard.Media>
        </DSActionCard>
      </div>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/ActionCardResponsive/ActionCardResponsive'
)({
  component: ActionCardResponsivePattern,
});
