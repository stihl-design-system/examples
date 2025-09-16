import {
  DSActionButton,
  DSActionLink,
  DSHeading,
  DSLink,
  DSPopover,
} from '@stihl-design-system/components';
import styles from './Account.module.scss';

export const Account = () => {
  return (
    <DSPopover placement='bottom-end' showArrow={false}>
      <DSPopover.Anchor>
        <DSActionButton
          // It's important to use a descriptive aria-label here, since the button contains a visual element only instead of a text label.
          aria-label='Toggle account menu'
          className={styles.avatarButton}
        >
          {/* Just a decorative element. A screen reader user hearing "M M" would be pretty unhelpful.
            So we can set aria-hidden="true" to the avatar placeholder. */}
          <div className={styles.avatar} aria-hidden='true'>
            MM
          </div>

          {/* If there is an avatar image, use an image tag to display it instead of the avatar placeholder. */}
          {/* <img src='path/to/avatar.jpg' alt='User Avatar of Max Mustermann' className={styles.avatar} /> */}
        </DSActionButton>
      </DSPopover.Anchor>
      <DSPopover.Content>
        <div className={styles.account}>
          <div className={styles.accountLeft}>
            <DSHeading
              size='medium'
              id='account-name'
              className={styles.accountName}
            >
              Max Mustermann
            </DSHeading>
            <DSLink href='#' variant='highlight'>
              Konto verwalten
            </DSLink>
          </div>
          <div>
            {/* Just a decorative element. A screen reader user hearing "M M" would be pretty unhelpful.
              So we can set aria-hidden="true" to the avatar placeholder. */}
            <div className={styles.avatar} aria-hidden='true'>
              MM
            </div>

            {/* If there is an avatar image, use an image tag to display it instead of the avatar placeholder. */}
            {/* <img src='path/to/avatar.jpg' alt='User Avatar of Max Mustermann' className={styles.avatar} /> */}
          </div>
        </div>
        <div className={styles.horizontalDivider} />
        <h2 id='imow-account' className={styles.listHeading}>
          iMOW® Account
        </h2>
        <ul aria-labelledby='imow-account' className={styles.list}>
          <li>
            <DSActionLink href='#' iconName='note-check' stretched={true}>
              Rechtliche Unterlagen
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' iconName='security' stretched={true}>
              Cookies verwalten
            </DSActionLink>
          </li>
        </ul>
        <div className={styles.horizontalDivider} />
        <h2 id='stihl-account' className={styles.listHeading}>
          STIHL Account
        </h2>
        <ul aria-labelledby='stihl-account' className={styles.list}>
          <li>
            <DSActionLink href='#' stretched={true} iconName='security'>
              Sicherheit & Passwort
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' iconName='note-check' stretched={true}>
              Nutzungsbedingungen
            </DSActionLink>
          </li>
          <li>
            <DSActionLink href='#' iconName='pin' stretched={true}>
              STIHL Fachhandel
            </DSActionLink>
          </li>
        </ul>
        <div className={styles.horizontalDivider} />
        <div className={styles.version}>App-Version: 1.80.2</div>
        <div className={styles.horizontalDivider} />
        <DSActionLink href='#' iconName='exit' stretched={true} weight='bold'>
          Sign out
        </DSActionLink>
      </DSPopover.Content>
    </DSPopover>
  );
};
