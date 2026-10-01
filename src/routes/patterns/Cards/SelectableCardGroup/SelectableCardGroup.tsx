import type { IconName } from '@stihl-design-system/components';
import {
  DSActionCard,
  DSActionCardGroup,
  DSFlag,
  DSHeading,
  DSIcon,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { useId, useState, type ChangeEvent, type JSX } from 'react';
import styles from './SelectableCardGroup.module.scss';

interface DeliveryOption {
  flag: string;
  icon: IconName;
  readyIn: string;
  title: string;
  value: string;
}

const deliveryOptions: DeliveryOption[] = [
  {
    value: 'pickup',
    icon: 'shop',
    title: 'Pickup',
    readyIn: '2 hours',
    flag: 'Free',
  },
  {
    value: 'standard',
    icon: 'delivery',
    title: 'Standard delivery',
    readyIn: '3 – 5 days',
    flag: 'Free',
  },
  {
    value: 'express',
    icon: 'truck',
    title: 'Express delivery',
    readyIn: '1 – 2 days',
    flag: 'From € 9,99',
  },
];

/**
 * Example implementation pattern for a Selectable Card Group based on the
 * DSActionCardGroup and DSActionCard components.
 *
 * Each card uses `<DSActionCard.PrimaryAction control='radio' />`, which turns the
 * whole card into a single-select control. The group supplies the shared `name`,
 * owns the selected `value` and renders legend, description and validation.
 *
 * This is just an example and can be adjusted to fit your needs.
 */
const SelectableCardGroupPattern = (): JSX.Element => {
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  // Radios sharing a `name` form one document-wide group, so each rendered
  // instance needs its own name (and ids) to keep its selection.
  const instanceId = useId();
  const groupId = `delivery-method-${instanceId}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <div className={styles.page}>
      <DSActionCardGroup
        className={styles.cardGroup}
        control='radio'
        description='Select how you would like to receive your order.'
        direction='horizontal'
        id={groupId}
        legend='Choose a delivery method'
        name={groupId}
        value={deliveryMethod}
        onChange={handleChange}
      >
        {deliveryOptions.map((option) => {
          // The id must be unique and links the card to its heading for screen readers
          const headingId = `${groupId}-${option.value}-heading`;

          return (
            <DSActionCard
              key={option.value}
              aria={{ 'aria-labelledby': headingId }}
              className={styles.card}
            >
              {/* PrimaryAction with control='radio' makes the entire card the selection target */}
              <DSActionCard.PrimaryAction
                control='radio'
                label={`Select ${option.title}`}
                value={option.value}
              />
              <DSActionCard.Header className={styles.cardHeader}>
                <span className={styles.cardGraphic}>
                  <DSIcon
                    name={option.icon}
                    size='x-large'
                    aria-hidden='true'
                  />
                </span>
                <DSHeading
                  id={headingId}
                  tag='h3'
                  size='medium'
                  className={styles.cardHeading}
                >
                  {option.title}
                </DSHeading>
                <p className={styles.cardDescription}>
                  Ready in:{' '}
                  <span className={styles.cardDescriptionHighlight}>
                    {option.readyIn}
                  </span>
                </p>
              </DSActionCard.Header>
              <DSActionCard.Footer>
                <DSFlag>{option.flag}</DSFlag>
              </DSActionCard.Footer>
            </DSActionCard>
          );
        })}
      </DSActionCardGroup>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/SelectableCardGroup/SelectableCardGroup'
)({
  component: SelectableCardGroupPattern,
});
