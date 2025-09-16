import {
  DSActionButton,
  DSActionLink,
  DSInputSearch,
  DSPopover,
} from '@stihl-design-system/components';
import { useState } from 'react';
import styles from './LanguageSelect.module.scss';

export const LanguageSelect = ({
  popoverOpenOnInit,
}: {
  popoverOpenOnInit?: boolean;
}) => {
  const [isLanguagePopoverOpen, setIsLanguagePopoverOpen] =
    useState(popoverOpenOnInit);

  return (
    <DSPopover
      placement='bottom-end'
      isOpen={isLanguagePopoverOpen}
      onOpenChange={setIsLanguagePopoverOpen}
      showArrow={false}
    >
      <DSPopover.Anchor
        onClick={() => setIsLanguagePopoverOpen(!isLanguagePopoverOpen)}
      >
        <DSActionButton
          iconPosition='top'
          iconName='globe'
          chevronDirection={isLanguagePopoverOpen ? 'up' : 'down'}
        >
          Language
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <form id='language-search' role='search'>
          <DSInputSearch
            id='language-filter'
            label='Search Language'
            placeholder='Search Language'
            hideLabel={true}
            size='small'
            className={styles.filterInput}
          />
        </form>
        <div className={styles.horizontalDivider} />
        <h2 id='global-sites' className={styles.heading}>
          Global Sites
        </h2>
        <ul aria-labelledby='global-sites' className={styles.list}>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / English
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Español
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Français
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Global / Portugals
            </DSActionLink>
          </li>
        </ul>
        <div className={styles.horizontalDivider} />
        <h2 id='local-sites' className={styles.heading}>
          Local Sites
        </h2>
        <ul aria-labelledby='local-sites' className={styles.list}>
          <li>
            <DSActionLink href='#' stretched={true} isActive={true}>
              Deutschland / Deutsch
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' stretched={true}>
              Argentina / Español
            </DSActionLink>
          </li>
        </ul>
      </DSPopover.Content>
    </DSPopover>
  );
};
