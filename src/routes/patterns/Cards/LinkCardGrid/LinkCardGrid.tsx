import { DSHeading, DSLinkCard } from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { type JSX } from 'react';
import styles from './LinkCardGrid.module.scss';

const LinkCardGridPattern = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <DSHeading className={styles.heading} tag='h2' size='large'>
        Link Cards in Grid
      </DSHeading>
      <div className={styles.row}>
        <ul className={styles['card-list']} aria-label='Link Card Grid'>
          <li>
            <DSLinkCard
              href='#'
              heading='Charging and energy management in the STIHL AP system'
              className={styles['card-item']}
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
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='Professional careers: Working at STIHL'
              className={styles['card-item']}
              description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
              img={
                <img
                  src='/card-example-image-2.webp'
                  className={styles['card-image']}
                  alt='A woman with curly hair and glasses stands confidently with arms crossed in a modern office environment with plants and seating areas in the background.'
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='STIHL AP battery technology and performance'
              className={styles['card-item']}
              description='The STIHL AP battery system convinces with its high performance and versatility.'
              img={
                <img
                  src='/card-example-image-3.webp'
                  className={styles['card-image']}
                  alt='Two forestry workers wearing protective gear and carrying chainsaws walk uphill through a snowy forest among tall trees.'
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='STIHL Product Guides & Tips'
              className={styles['card-item']}
              img={
                <img
                  src='/card-example-image-4.webp'
                  alt='A set of STIHL garden tools, including a lawn mower, hedge trimmer, trimmer, blower, and chainsaw, arranged neatly in front of a green hedge.'
                  className={styles['card-image']}
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='STIHL Chainsaw buying guide'
              className={styles['card-item']}
              img={
                <img
                  src='/card-example-image-5.webp'
                  alt='Close-up of a chainsaw guide bar and chain resting on a freshly cut tree stump in a forest.'
                  className={styles['card-image']}
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='Hobby gardening with STIHL'
              className={styles['card-item']}
              description='Hobby gardening with STIHL offers a range of tools designed for ease of use and efficiency, perfect for maintaining your garden with professional quality.'
              img={
                <img
                  src='/card-example-image-6.webp'
                  alt='A person uses pruning shears to cut a thin tree branch, with green leaves in focus and the person’s face blurred in the background.'
                  className={styles['card-image']}
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='How to start a STIHL chainsaw'
              className={styles['card-item']}
              metaData={'March 15, 2025 • 5 min read'}
              flags={['Chainsaw', 'Tutorial']}
              flagListAriaLabel='Categories'
              description='STIHL chainsaws come in a variety of models, each with their own start-up process. To best understand how to start your chainsaw, refer to your instruction manual and check out this step-by-step guide featuring helpful videos.'
              img={
                <img
                  src='/card-example-image-7.webp'
                  alt='A worker wearing hearing protection cuts a large log with a chainsaw in a grassy area, with stacked firewood behind him.'
                  className={styles['card-image']}
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
          <li>
            <DSLinkCard
              href='#'
              heading='STIHL professional arborist tools'
              brandFlag='New story'
              flags={['Arborist', 'Tools', 'Professional']}
              flagListAriaLabel='Categories'
              className={styles['card-item']}
              description='Tree care professionals know that with lightweight maneuverability and efficient power, STIHL arborist equipment is ideal for in-tree work. With a wide selection of tools and protective gear to choose from, STIHL helps you take productivity and safety to new heights.'
              img={
                <img
                  src='/card-example-image-8.webp'
                  alt='A professional arborist secured with ropes and safety gear operates a chainsaw while positioned high in a tree within a dense forest.'
                  className={styles['card-image']}
                />
              }
              decorativeLinkButtonProps={{
                label: 'Read more',
                iconName: 'arrow-right',
                variant: 'ghost',
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Cards/LinkCardGrid/LinkCardGrid'
)({
  component: LinkCardGridPattern,
});
