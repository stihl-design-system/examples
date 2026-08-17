import {
  DSAriaLiveRegions,
  DSCarousel,
  DSHeading,
  DSLinkCard,
  DSText,
  DSTitle,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import styles from './CarouselTemplate.module.scss';

const placeholderItem = (index: number) => (
  <div className={styles.item} key={index}>
    Item {index + 1}
  </div>
);

type CardData = {
  heading: string;
  description: string;
  image: string;
  alt: string;
  flags?: string[];
};

const cards: CardData[] = [
  {
    heading: 'Charging and energy management in the STIHL AP system',
    description:
      'The STIHL AP system offers flexible charging solutions and intelligent energy management for professional battery tools.',
    image: '/card-example-image-1.webp',
    alt: 'Two workers load tree branches and chainsaw equipment onto the open bed of a white pickup truck in an autumn park.',
    flags: ['Battery', 'AP-System', 'Energy'],
  },
  {
    heading: 'Professional careers: Working at STIHL',
    description:
      'Discover what it means to work at STIHL and how our teams shape the future of outdoor power equipment.',
    image: '/card-example-image-2.webp',
    alt: 'A woman with curly hair and glasses stands confidently with arms crossed in a modern office environment.',
  },
  {
    heading: 'STIHL AP battery technology and performance',
    description:
      'The STIHL AP battery system convinces with its high performance and versatility.',
    image: '/card-example-image-3.webp',
    alt: 'Two forestry workers wearing protective gear and carrying chainsaws walk uphill through a snowy forest.',
  },
  {
    heading: 'STIHL Product Guides & Tips',
    description:
      'Helpful guides and practical tips to get the most out of your STIHL tools all year round.',
    image: '/card-example-image-4.webp',
    alt: 'A set of STIHL garden tools arranged neatly in front of a green hedge.',
  },
  {
    heading: 'STIHL Chainsaw buying guide',
    description:
      'Find the right chainsaw for your needs with our comprehensive buying guide.',
    image: '/card-example-image-5.webp',
    alt: 'Close-up of a chainsaw guide bar and chain resting on a freshly cut tree stump in a forest.',
  },
  {
    heading: 'Hobby gardening with STIHL',
    description:
      'STIHL offers a range of tools designed for ease of use and efficiency, perfect for maintaining your garden.',
    image: '/card-example-image-6.webp',
    alt: 'A person uses pruning shears to cut a thin tree branch with green leaves in focus.',
  },
];
const renderCards = (): JSX.Element[] =>
  cards.map((card) => (
    <DSLinkCard
      key={card.heading}
      className={styles.card}
      href='#'
      heading={card.heading}
      description={card.description}
      flags={card.flags}
      flagListAriaLabel='Categories'
      mediaArea={<img src={card.image} alt={card.alt} />}
      decorativeLinkButtonProps={{
        label: 'Read more',
        iconName: 'arrow-right',
        variant: 'ghost',
      }}
    />
  ));

// Full-bleed images used as carousel items
const images: { src: string; alt: string }[] = [
  {
    src: '/card-example-image-5.webp',
    alt: 'Close-up of a chainsaw guide bar and chain resting on a freshly cut tree stump in a forest.',
  },
  {
    src: '/card-example-image-4.webp',
    alt: 'A set of STIHL garden tools arranged neatly in front of a green hedge.',
  },
  {
    src: '/card-example-image-8.webp',
    alt: 'A professional arborist secured with ropes and safety gear operates a chainsaw while positioned high in a tree within a dense forest.',
  },
];

const renderImages = (keyPrefix: string): JSX.Element[] =>
  images.map((image) => (
    <img
      key={`${keyPrefix}-${image.src}`}
      className={styles.image}
      src={image.src}
      alt={image.alt}
    />
  ));

const CarouselTemplatePattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <DSAriaLiveRegions />
      <DSTitle className={styles.heading} tag='h2' size='x-large'>
        Grid Layout
      </DSTitle>

      <DSHeading tag='h2' size='large' className={styles.subheading}>
        Single-Item - Navigation Controls Outside, Scrollmarker Outside
      </DSHeading>
      <ul className={styles.list}>
        <DSText tag='li'>
          Optimized for presenting one primary piece of content with persistent
          navigation.
        </DSText>
        <DSText tag='li'>
          Carousel <code>variant=&quot;single&quot;</code>,{' '}
          <code>layout=&quot;grid&quot;</code>
        </DSText>
        <DSText tag='li'>Full-bleed images as items.</DSText>
        <DSText tag='li'>
          Navigation visible on Breakpoint &gt;= L, hidden below via
          <code>navigationControls.show</code> default value.
        </DSText>
      </ul>

      <DSCarousel
        aria={{ 'aria-label': 'Outside controls carousel' }}
        variant='single'
        layout='grid'
        navigationControls={{
          position: { base: 'inside', l: 'outside' },
          variant: 'filled',
        }}
        scrollMarkerPosition='outside'
        scrollMarkerVariant='ghost'
      >
        {renderImages('outside-controls')}
      </DSCarousel>

      <DSHeading tag='h2' size='large' className={styles.subheading}>
        Single-Item – Navigation Controls Inside, Scrollmarker Inside
      </DSHeading>
      <ul className={styles.list}>
        <DSText tag='li'>
          Optimized for presenting one primary piece of content with persistent
          navigation.
        </DSText>
        <DSText tag='li'>
          Carousel <code>variant=&quot;single&quot;</code>,{' '}
          <code>layout=&quot;grid&quot;</code>
        </DSText>
        <DSText tag='li'>
          <code>navigationControls.position=&quot;inside&quot;</code>,{' '}
          <code>navigationControls.variant=&quot;inverse&quot;</code>
        </DSText>
        <DSText tag='li'>
          <code>scrollMarkerPosition=&quot;inside&quot;</code>,{' '}
          <code>scrollMarkerVariant=&quot;inverse&quot;</code>
        </DSText>
        <DSText tag='li'>
          Navigation visible on Breakpoint &gt;= L, hidden below via
          <code>navigationControls.show</code> default value.
        </DSText>
      </ul>

      <DSCarousel
        aria={{ 'aria-label': 'Inside controls carousel' }}
        variant='single'
        layout='grid'
        navigationControls={{ position: 'inside', variant: 'inverse' }}
        scrollMarkerPosition='inside'
        scrollMarkerVariant='inverse'
      >
        {renderImages('inside-controls')}
      </DSCarousel>

      <DSHeading tag='h2' size='large' className={styles.subheading}>
        Multi-Item - Navigation Controls Outside, Scrollmarker Outside
      </DSHeading>

      <ul className={styles.list}>
        <DSText tag='li'>
          Optimized for presenting multiple related Items that users can browse,
          compare, and discover.
        </DSText>
        <DSText tag='li'>
          Carousel <code>variant=&quot;multi&quot;</code>,
          <code>layout=&quot;grid&quot;</code>
        </DSText>
        <DSText tag='li'>
          Card with <code>max-width</code>
        </DSText>
        <DSText tag='li'>
          Navigation outside, visible on Breakpoint &gt;= L, hidden below via
          <code>navigationControls.show</code> default value.
        </DSText>
        <DSText tag='li'>Peek on Breakpoint &lt; L.</DSText>
        <DSText tag='li'>
          Grid, switches from <code>&quot;main&quot;</code> to{' '}
          <code>&quot;extended&quot;</code> internal grid area on Breakpoint L.
        </DSText>
      </ul>

      <DSCarousel
        aria={{ 'aria-label': 'Grid carousel' }}
        variant='multi'
        layout='grid'
        navigationControls={{ position: { base: 'inside', l: 'outside' } }}
        peek={{ base: true, l: false }}
      >
        {renderCards()}
      </DSCarousel>

      <DSHeading tag='h2' size='large' className={styles.subheading}>
        Single-Item Embedded – Navigation Controls Hidden, Scrollmarker Inside
      </DSHeading>

      <ul className={styles.list}>
        <DSText tag='li'>
          Optimized for presenting a single piece of media within another
          component or layout while minimizing visual distraction.
        </DSText>
        <DSText tag='li'>Four carousels in a row.</DSText>
        <DSText tag='li'>
          Carousel <code>variant=&quot;single&quot;</code>,{' '}
          <code>layout=&quot;flex&quot;</code>
        </DSText>
        <DSText tag='li'>
          Navigation hidden via <code>navigationControls.show=false</code>
        </DSText>
        <DSText tag='li'>
          <code>scrollMarkerPosition=&quot;inside&quot;</code>,{' '}
          <code>scrollMarkerVariant=&quot;inverse&quot;</code>
        </DSText>
        <DSText tag='li'>
          &lt; M: full width (1 per row), M: halves (2 per row), &gt;= L:
          quarters (4 per row).
        </DSText>
      </ul>
      <div className={styles.firstQuarterItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Quarter carousel 1' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>
      <div className={styles.quarterItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Quarter carousel 2' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>
      <div className={styles.thirdQuarterItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Quarter carousel 3' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>
      <div className={styles.quarterItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Quarter carousel 4' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>

      <ul className={styles.list}>
        <DSText tag='li'>Two carousels in a row.</DSText>
        <DSText tag='li'>
          Carousel <code>variant=&quot;single&quot;</code>,{' '}
          <code>layout=&quot;flex&quot;</code>
        </DSText>
        <DSText tag='li'>
          Navigation hidden via <code>navigationControls.show=false</code>
        </DSText>
        <DSText tag='li'>
          <code>scrollMarkerPosition=&quot;inside&quot;</code>,{' '}
          <code>scrollMarkerVariant=&quot;inverse&quot;</code>
        </DSText>
        <DSText tag='li'>
          &lt;= M: quarters (2 per row), &gt;= L: halves (2 per row).
        </DSText>
      </ul>
      <div className={styles.firstHalfItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Half carousel 1' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>
      <div className={styles.secondHalfItem}>
        <DSCarousel
          aria={{ 'aria-label': 'Quarter carousel 2' }}
          variant='single'
          layout='flex'
          scrollMarkerPosition='inside'
          scrollMarkerVariant='inverse'
          navigationControls={{ show: false }}
        >
          {Array.from({ length: 3 }, (_, index) => placeholderItem(index))}
        </DSCarousel>
      </div>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute('/patterns/Carousel/CarouselTemplate')({
  component: CarouselTemplatePattern,
});
