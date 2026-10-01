import { DSActionCard, DSHeading } from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { useId, useState, type ChangeEvent, type JSX } from 'react';
import styles from './SelectableCard.module.scss';

interface ServiceOption {
  description: string;
  title: string;
  value: string;
}

const serviceOptions: ServiceOption[] = [
  {
    value: 'servicing',
    title: 'STIHL Servicing',
    description:
      'Includes checking device functionality, replacing parts, and cleaning.',
  },
  {
    value: 'warranty',
    title: 'Extended Warranty',
    description: 'Selection is required before continuing.',
  },
];

/**
 * Example implementation pattern for a multi-select Selectable Card based on the
 * DSActionCard component.
 *
 * Each card uses `<DSActionCard.PrimaryAction control='checkbox' />`, which turns the
 * whole card into a checkbox. Checkbox cards are self-contained, so they work
 * standalone - a DSActionCardGroup is only needed for a shared form field name,
 * a legend or group-level validation.
 *
 * This is just an example and can be adjusted to fit your needs.
 */
const SelectableCardPattern = (): JSX.Element => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'servicing',
  ]);
  // Ids must be unique per document, so each rendered instance derives its own.
  const instanceId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    setSelectedServices((currentServices) => {
      if (checked) {
        return [...currentServices, value];
      }
      return currentServices.filter((service) => service !== value);
    });
  };

  return (
    <div className={styles.page}>
      {/* Use a descriptive label for the list */}
      <ul className={styles.cardList} aria-label='Additional services'>
        {serviceOptions.map((option) => {
          // The id must be unique and links the card to its heading for screen readers
          const headingId = `${instanceId}-${option.value}-heading`;

          return (
            <li key={option.value}>
              <DSActionCard
                aria={{ 'aria-labelledby': headingId }}
                className={styles.card}
              >
                {/* PrimaryAction with control='checkbox' makes the entire card the selection target */}
                <DSActionCard.PrimaryAction
                  checked={selectedServices.includes(option.value)}
                  control='checkbox'
                  label={`Select ${option.title}`}
                  value={option.value}
                  onChange={handleChange}
                />
                <DSActionCard.Header>
                  <DSHeading
                    className={styles.cardHeading}
                    id={headingId}
                    tag='h3'
                    size='small'
                  >
                    {option.title}
                  </DSHeading>
                  <div>{option.description}</div>
                </DSActionCard.Header>
              </DSActionCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/SelectableCard/SelectableCard'
)({
  component: SelectableCardPattern,
});
