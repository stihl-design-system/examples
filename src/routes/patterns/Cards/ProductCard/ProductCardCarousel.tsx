import {
  DSActionCard,
  DSAriaLiveRegions,
  DSButton,
  DSButtonRound,
  DSCarousel,
  DSCheckbox,
  DSFlag,
  DSHeading,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import {
  BatteryIcon,
  type BatteryIconVariant,
} from './BatteryIcon/-BatteryIcon';
import { Price, type PriceDiscount } from './Price/-Price';
import styles from './ProductCardCarousel.module.scss';
import { Rating } from './Rating/-Rating';
import { Status, type StatusVariant } from './Status/-Status';

interface ProductCardBattery {
  variant: BatteryIconVariant;
  label: string;
}

interface ProductCardData {
  id: string;
  heading: string;
  category: string;
  description: string;
  rating: {
    value: number;
    count: number;
  };
  status: {
    variant: StatusVariant;
    label: string;
  };
  price: {
    amount: string;
    label?: string;
    vatLabel?: string;
    discount?: PriceDiscount;
  };
  image: {
    src: string;
    alt: string;
  };
  batteries?: ProductCardBattery[];
}

// The same product cards as used in the ProductCardGrid example, but each card
// uses a single static image in its media slot (no nested carousel).
const products: ProductCardData[] = [
  {
    id: 'product-card-carousel-1',
    heading: 'MS 261 C-M',
    category: 'Chainsaws',
    description: 'Universal professional gas-powered chainsaw.',
    rating: { value: 4.3, count: 64 },
    status: { variant: 'positive', label: 'Available' },
    price: { amount: '11.199,00 €' },
    image: {
      src: '/product-card-example-1.webp',
      alt: 'MS 261 C-M product image',
    },
    batteries: [{ variant: 'ak', label: 'AK-System' }],
  },
  {
    id: 'product-card-carousel-2',
    heading: 'MS 172',
    category: 'Chainsaws',
    description:
      'Gas-powered chainsaw for cutting firewood and for property maintenance.',
    rating: { value: 4.8, count: 112 },
    status: { variant: 'negative', label: 'Out of stock' },
    price: { amount: '8.999,00 €', vatLabel: 'incl. VAT' },
    image: {
      src: '/product-card-example-2.webp',
      alt: 'MS 172 product image',
    },
    batteries: [
      { variant: 'ap', label: 'AP-System' },
      { variant: 'as', label: 'AS-System' },
    ],
  },
  {
    id: 'product-card-carousel-3',
    heading: 'MSA 80 C-B Akku-Motorsäge, mit Akku AK 30 S und Ladekabel AL 10',
    category: 'Chainsaws',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    rating: { value: 4.6, count: 39 },
    status: { variant: 'positive', label: 'Available' },
    price: {
      amount: '11.199,00 €',
      discount: {
        previousAmount: '21.199,00 €',
        savingsAmount: '50,00 €',
        savingsPercentage: '14%',
      },
    },
    image: {
      src: '/product-card-example-3.webp',
      alt: 'MSA 80 C-B product image',
    },
    batteries: [{ variant: 'ak', label: 'AK-System' }],
  },
  {
    id: 'product-card-carousel-4',
    heading: 'MSA 80 C-B',
    category: 'Chainsaws',
    description: 'Short description of the product',
    rating: { value: 4.9, count: 87 },
    status: { variant: 'neutral', label: 'In stock within 2-3 weeks' },
    price: {
      amount: '5.499,00 €',
      discount: {
        previousAmount: '6.299,00 €',
        savingsAmount: '800,00 €',
        savingsPercentage: '12%',
      },
    },
    image: {
      src: '/product-card-example-4.webp',
      alt: 'MSA 80 C-B product image',
    },
    batteries: [
      { variant: 'ak', label: 'AK-System' },
      { variant: 'as', label: 'AS-System' },
    ],
  },
  {
    id: 'product-card-carousel-5',
    heading: 'Socken STRIPES 3er Set Schwarz / Weiß / Grau',
    category: 'Merchandise',
    description: 'Short description of the product',
    rating: { value: 4.5, count: 154 },
    status: { variant: 'neutral', label: 'In stock within 2-3 weeks' },
    price: {
      amount: '5.499,00 €',
      label: 'Set price',
      discount: {
        previousAmount: '6.299,00 €',
        savingsAmount: '800,00 €',
        savingsPercentage: '12%',
      },
    },
    image: {
      src: '/product-card-example-5.webp',
      alt: 'Socken STRIPES 3er Set product image',
    },
  },
  {
    id: 'product-card-carousel-6',
    heading: 'RT 4112 SZ',
    category: 'Riding Lawn Mowers',
    description: 'Short description of the product',
    rating: { value: 4.7, count: 73 },
    status: { variant: 'neutral', label: 'In stock within 2-3 weeks' },
    price: {
      amount: '5.499,00 €',
      discount: {
        previousAmount: '6.299,00 €',
        savingsAmount: '800,00 €',
        savingsPercentage: '12%',
      },
    },
    image: {
      src: '/product-card-example-6.webp',
      alt: 'RT 4112 SZ product image',
    },
  },
  {
    id: 'product-card-carousel-7',
    heading: 'HLA 40 ohne Akku und Ladegerät',
    category: 'Pole pruner',
    description: 'Short description of the product',
    rating: { value: 5.0, count: 98 },
    status: { variant: 'neutral', label: 'In stock within 2-3 weeks' },
    price: {
      amount: '5.499,00 €',
      discount: {
        previousAmount: '6.299,00 €',
        savingsAmount: '800,00 €',
        savingsPercentage: '12%',
      },
    },
    image: {
      src: '/product-card-example-7.webp',
      alt: 'HLA 40 product image',
    },
    batteries: [
      { variant: 'ak', label: 'AK-System' },
      { variant: 'as', label: 'AS-System' },
    ],
  },
];

const renderProductCard = (product: ProductCardData): JSX.Element => {
  return (
    <DSActionCard
      // Use aria-labelledby to associate the card with its heading for better accessibility
      aria={{ 'aria-labelledby': product.id }}
      className={styles.cardItem}
      classNameContentWrapper={styles.cardContent}
      padding='small'
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
        <DSFlag className={styles.promo} color='promo-neutral'>
          New
        </DSFlag>
        <DSHeading
          className={styles.cardHeading}
          // The id should be unique and descriptive to ensure it correctly references the card for screen readers
          id={product.id}
          size='small'
          tag='h2'
        >
          {product.heading}
        </DSHeading>
        {/* Example implementation of a rating component. Replace with your own rating component if needed. */}
        <Rating
          className={styles.rating}
          value={product.rating.value}
          aria={{
            'aria-label': `Rating: ${product.rating.value} out of 5`,
          }}
          count={product.rating.count}
        />
        <div className={styles.category}>{product.category}</div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.availability}>
          {/* Example implementation of a status component. Replace with your own status component if needed. */}
          <Status variant={product.status.variant}>
            {product.status.label}
          </Status>
        </div>
      </DSActionCard.Header>
      <DSActionCard.Footer className={styles.footer}>
        <div className={styles.footerLeft}>
          {/* Example implementation of a price component. Replace with your own price component if needed. */}
          <Price
            amount={product.price.amount}
            label={product.price.label}
            vatLabel={product.price.vatLabel}
            discount={product.price.discount}
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
        {/* A single static product image is used here. Unlike the grid example,
            the media slot intentionally does NOT contain a nested carousel. */}
        <img src={product.image.src} alt={product.image.alt} />
        {product.batteries && product.batteries.length > 0 && (
          // Since a product can have multiple battery options, we use a list to
          // provide information about each battery type. Make sure to use an
          // appropriate aria-label for the list to describe its content for
          // screen readers.
          <ul aria-label='Battery Information' className={styles.batteryInfo}>
            {product.batteries.map((battery) => (
              <li key={battery.variant}>
                <BatteryIcon
                  variant={battery.variant}
                  aria-label={battery.label}
                />
              </li>
            ))}
          </ul>
        )}
        <div className={styles.favoriteButton}>
          <DSButton
            hideLabel={true}
            size='small'
            variant='ghost'
            iconName='heart'
          >
            Add to favorites
          </DSButton>
        </div>
      </DSActionCard.Media>
    </DSActionCard>
  );
};

/**
 * Example implementation pattern for Product Cards inside a DSCarousel.
 *
 * This is just an example and can be adjusted to fit your needs.
 *
 * !! The used components inside the card (e.g. Rating, Price, Status) are currently not part of the design system
 * !! and are only implemented for demonstration purposes. They can be replaced with any other components or custom implementations as needed. !!
 *
 */
const ProductCardCarouselPattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <DSAriaLiveRegions />
      <DSHeading className={styles.heading} tag='h2' size='large'>
        Product Cards in Carousel
      </DSHeading>
      {/* The carousel is a direct child of the ds.grid page so layout='grid'
          can align the items with the design system grid. */}
      <DSCarousel
        aria={{ 'aria-label': 'Product Card Carousel' }}
        variant='multi'
        layout='grid'
        itemsPerView={{ base: 1, m: 2, l: 4 }}
        peek={{ base: true, l: false }}
      >
        {products.map((product) => renderProductCard(product))}
      </DSCarousel>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/ProductCard/ProductCardCarousel'
)({
  component: ProductCardCarouselPattern,
});
