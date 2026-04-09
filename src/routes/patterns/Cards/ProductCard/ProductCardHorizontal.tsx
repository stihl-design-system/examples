import {
  DSActionCard,
  DSButton,
  DSButtonRound,
  DSCheckbox,
  DSFlag,
  DSHeading,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import { BatteryIcon } from './BatteryIcon/-BatteryIcon';
import { Price } from './Price/-Price';
import styles from './ProductCardHorizontal.module.scss';
import { Rating } from './Rating/-Rating';
import { Status } from './Status/-Status';

/**
 * Example implementation pattern for a Product Card based on the DSActionCard component.
 *
 * This is just an example and can be adjusted to fit your needs.
 *
 * !! The used components inside the card (e.g. Rating, Price, Status) are currently not part of the design system
 * !! and are only implemented for demonstration purposes. They can be replaced with any other components or custom implementations as needed. !!
 *
 */
const ProductCardHorizontalPattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <DSHeading className={styles.heading} tag='h2' size='large'>
        Product Cards Horizontal
      </DSHeading>
      <div className={styles.row}>
        {/* Use a descriptive label for the list */}
        <ul
          className={styles.cardList}
          aria-label='Product Card Horizontal List'
        >
          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              // Use aria-labelledby to associate the card with its heading for better accessibility
              aria={{ 'aria-labelledby': 'product-card-1' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              {/* PrimaryAction makes the entire card clickable while keeping other interactive elements accessible */}
              <DSActionCard.PrimaryAction
                href='#'
                /* target="_self" is only used here for example purposes, use the target that suits your needs best */
                target='_self'
              >
                {/* Use a descriptive label where the link leads to */}
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  // The id should be unique and descriptive to ensure it correctly references the card for screen readers
                  id='product-card-1'
                  size='small'
                  tag='h2'
                >
                  MS 261 C-M
                </DSHeading>
                {/* Example implementation of a rating component. Replace with your own rating component if needed. */}
                <Rating
                  className={styles.rating}
                  value={4.3}
                  aria={{ 'aria-label': 'Rating: 4.3 out of 5' }}
                  count={64}
                />
                <div className={styles.category}>Chainsaws</div>
                <div className={styles.description}>
                  Universal professional gas-powered chainsaw.
                </div>
                <div className={styles.availability}>
                  {/* Example implementation of a status component. Replace with your own status component if needed. */}
                  <Status variant='positive'>Available</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  {/* Example implementation of a price component. Replace with your own price component if needed. */}
                  <Price amount='11.199,00 €' />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-1.webp'
                  alt='Alt text of the product image'
                />
                {/* 
                  Since a product can have multiple battery options, we use a list to provide information about each battery type.
                  Make sure to use an appropriate aria-label for the list to describe its content for screen readers.
                */}
                <ul
                  aria-label='Battery Information'
                  className={styles.batteryInfo}
                >
                  <li>
                    <BatteryIcon variant='ak' aria-label='AK-System' />
                  </li>
                </ul>
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>
          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-2' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-2'
                  size='small'
                  tag='h2'
                >
                  MS 172
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={4.8}
                  aria={{ 'aria-label': 'Rating: 4.8 out of 5' }}
                  count={112}
                />
                <div className={styles.category}>Chainsaws</div>
                <div className={styles.description}>
                  Gas-powered chainsaw for cutting firewood and for property
                  maintenance.
                </div>
                <div className={styles.availability}>
                  <Status variant='negative'>Out of stock</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price amount='8.999,00 €' vatLabel='incl. VAT' />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-2.webp'
                  alt='Alt text of the product image'
                />
                <ul
                  aria-label='Battery Information'
                  className={styles.batteryInfo}
                >
                  <li>
                    <BatteryIcon variant='ap' aria-label='AP-System' />
                  </li>
                  <li>
                    <BatteryIcon variant='as' aria-label='AS-System' />
                  </li>
                </ul>
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>

          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-3' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-3'
                  size='small'
                  tag='h2'
                >
                  MSA 80 C-B Akku-Motorsäge, mit Akku AK 30 S und Ladekabel AL
                  10
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={4.6}
                  aria={{ 'aria-label': 'Rating: 4.6 out of 5' }}
                  count={39}
                />
                <div className={styles.category}>Chainsaws</div>
                <div className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </div>
                <div className={styles.availability}>
                  <Status variant='positive'>Available</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price
                    amount='11.199,00 €'
                    discount={{
                      previousAmount: '21.199,00 €',
                      savingsAmount: '50,00 €',
                      savingsPercentage: '14%',
                    }}
                  />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-3.webp'
                  alt='Alt text of the product image'
                />
                <ul
                  aria-label='Battery Information'
                  className={styles.batteryInfo}
                >
                  <li>
                    <BatteryIcon variant='ak' aria-label='AK-System' />
                  </li>
                </ul>
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>

          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-4' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-4'
                  size='small'
                  tag='h2'
                >
                  MSA 80 C-B
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={4.9}
                  aria={{ 'aria-label': 'Rating: 4.9 out of 5' }}
                  count={87}
                />
                <div className={styles.category}>Chainsaws</div>
                <div className={styles.description}>
                  Short description of the product
                </div>
                <div className={styles.availability}>
                  <Status variant='neutral'>In stock within 2-3 weeks</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price
                    amount='5.499,00 €'
                    discount={{
                      previousAmount: '6.299,00 €',
                      savingsAmount: '800,00 €',
                      savingsPercentage: '12%',
                    }}
                  />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-4.webp'
                  alt='Alt text of the product image'
                />
                <ul
                  aria-label='Battery Information'
                  className={styles.batteryInfo}
                >
                  <li>
                    <BatteryIcon variant='ak' aria-label='AK-System' />
                  </li>
                  <li>
                    <BatteryIcon variant='as' aria-label='AS-System' />
                  </li>
                </ul>
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>

          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-5' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-5'
                  size='small'
                  tag='h2'
                >
                  Socken STRIPES 3er Set Schwarz / Weiß / Grau
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={4.5}
                  aria={{ 'aria-label': 'Rating: 4.5 out of 5' }}
                  count={154}
                />
                <div className={styles.category}>Merchandise</div>
                <div className={styles.description}>
                  Short description of the product
                </div>
                <div className={styles.availability}>
                  <Status variant='neutral'>In stock within 2-3 weeks</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price
                    amount='5.499,00 €'
                    label='Set price'
                    discount={{
                      previousAmount: '6.299,00 €',
                      savingsAmount: '800,00 €',
                      savingsPercentage: '12%',
                    }}
                  />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-5.webp'
                  alt='Alt text of the product image'
                />

                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>

          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-6' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-6'
                  size='small'
                  tag='h2'
                >
                  RT 4112 SZ
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={4.7}
                  aria={{ 'aria-label': 'Rating: 4.7 out of 5' }}
                  count={73}
                />
                <div className={styles.category}>Riding Lawn Mowers</div>
                <div className={styles.description}>
                  Short description of the product
                </div>
                <div className={styles.availability}>
                  <Status variant='neutral'>In stock within 2-3 weeks</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price
                    amount='5.499,00 €'
                    discount={{
                      previousAmount: '6.299,00 €',
                      savingsAmount: '800,00 €',
                      savingsPercentage: '12%',
                    }}
                  />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-6.webp'
                  alt='Alt text of the product image'
                />
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>

          <li className={styles.listItem}>
            <DSActionCard
              orientation='horizontal'
              padding='small'
              aria={{ 'aria-labelledby': 'product-card-7' }}
              className={styles.cardItem}
              classNameContentWrapper={styles.cardContent}
            >
              <DSActionCard.PrimaryAction href='#' target='_self'>
                Go to product details
              </DSActionCard.PrimaryAction>
              <DSActionCard.Header>
                <DSFlag className={styles.promo} color='orange-base'>
                  New
                </DSFlag>
                <DSHeading
                  className={styles.cardHeading}
                  id='product-card-7'
                  size='small'
                  tag='h2'
                >
                  HLA 40 ohne Akku und Ladegerät
                </DSHeading>
                <Rating
                  className={styles.rating}
                  value={5.0}
                  aria={{ 'aria-label': 'Rating: 5.0 out of 5' }}
                  count={98}
                />
                <div className={styles.category}>Pole pruner</div>
                <div className={styles.description}>
                  Short description of the product
                </div>
                <div className={styles.availability}>
                  <Status variant='neutral'>In stock within 2-3 weeks</Status>
                </div>
              </DSActionCard.Header>
              <DSActionCard.Footer className={styles.footer}>
                <div className={styles.footerLeft}>
                  <Price
                    amount='5.499,00 €'
                    discount={{
                      previousAmount: '6.299,00 €',
                      savingsAmount: '800,00 €',
                      savingsPercentage: '12%',
                    }}
                  />
                  <DSCheckbox label='Compare' />
                </div>
                <div>
                  <DSButtonRound
                    size='medium'
                    aria={{ 'aria-label': 'Add to cart' }}
                    iconName='cart-plus'
                    variant='highlight'
                    onClick={() => console.log('Add to cart')}
                  >
                    Shop
                  </DSButtonRound>
                </div>
              </DSActionCard.Footer>
              <DSActionCard.Media className={styles.mediaWrapper}>
                <img
                  src='/product-card-example-7.webp'
                  alt='Alt text of the product image'
                />
                <ul
                  aria-label='Battery Information'
                  className={styles.batteryInfo}
                >
                  <li>
                    <BatteryIcon variant='ak' aria-label='AK-System' />
                  </li>
                  <li>
                    <BatteryIcon variant='as' aria-label='AS-System' />
                  </li>
                </ul>
                <DSButton
                  hideLabel={true}
                  size='small'
                  variant='ghost'
                  iconName='heart'
                  className={styles.favoriteButton}
                >
                  Add to favorites
                </DSButton>
              </DSActionCard.Media>
            </DSActionCard>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/ProductCard/ProductCardHorizontal'
)({
  component: ProductCardHorizontalPattern,
});
