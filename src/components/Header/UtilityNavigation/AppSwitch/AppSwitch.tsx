import { useState } from 'react';
import { DSActionButton } from '@stihl-design-system/components';
import { DSActionLink } from '@stihl-design-system/components';
import { DSHeading } from '@stihl-design-system/components';
import { DSLinkButton } from '@stihl-design-system/components';
import { DSPopover } from '@stihl-design-system/components';
import styles from './AppSwitch.module.scss';

export const AppSwitch = ({
  popoverOpenOnInit,
}: {
  popoverOpenOnInit?: boolean;
}) => {
  const [isAppPopoverOpen, setIsAppPopoverOpen] = useState(popoverOpenOnInit);

  return (
    <DSPopover
      placement='bottom-end'
      isOpen={isAppPopoverOpen}
      onOpenChange={setIsAppPopoverOpen}
    >
      <DSPopover.Anchor onClick={() => setIsAppPopoverOpen(!isAppPopoverOpen)}>
        <DSActionButton
          iconName={'nine-squares'}
          iconPosition='top'
          chevronDirection={isAppPopoverOpen ? 'up' : 'down'}
        >
          STIHL World
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <DSHeading
          size='small'
          id='app-switch-heading'
          className={styles.heading}
        >
          STIHL World
        </DSHeading>
        <ul aria-labelledby='app-switch-heading' className={styles.list}>
          <li aria-hidden='true' className={styles.horizontalDivider}></li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              STIHL Website
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/mystihl-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              MY STIHL
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/connected-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              STIHL Connected
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/imow-icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              iMOW® Web App
            </DSActionLink>
          </li>
          <li>
            <DSActionLink
              href='#'
              iconSource='/icon.svg'
              iconSize='x-large'
              iconPosition='left'
              stretched={true}
            >
              Product Advisor
            </DSActionLink>
          </li>
          <li aria-hidden='true' className={styles.horizontalDivider}></li>
          <li>
            <DSLinkButton
              href='#'
              variant='navigation'
              iconPosition='right'
              iconName='arrow-out'
            >
              All Services & Apps
            </DSLinkButton>
          </li>
        </ul>
      </DSPopover.Content>
    </DSPopover>
  );
};
