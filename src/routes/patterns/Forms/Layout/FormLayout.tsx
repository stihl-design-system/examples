import { createFileRoute } from '@tanstack/react-router';
import type { FormEvent, JSX } from 'react';

import {
  DSButton,
  DSCheckbox,
  DSCheckboxGroup,
  DSCombobox,
  DSFieldset,
  DSInput,
  DSInputFile,
  DSRadioGroup,
  DSText,
  DSTextarea,
  DSTitle,
} from '@stihl-design-system/components';
import classNames from 'classnames';

import { COUNTRIES } from './-FormLayout.data';
import styles from './FormLayout.module.scss';

const FormLayout = (): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);

    console.log('Form Data', Object.fromEntries(data));
    // prevent page reload
    event.preventDefault();
  };
  return (
    <div className={classNames(styles.grid)}>
      <div className={styles.content}>
        <DSTitle>Order Process</DSTitle>
        <DSText
          size='medium'
          weight='bold'
          className={styles.mandatoryInformation}
        >
          *Mandatory Information
        </DSText>
        <form id='order-form' onSubmit={handleSubmit}>
          <DSFieldset
            legend={{ headingText: 'Billing address', headingTag: 'h2' }}
            className={styles.fieldset}
          >
            <DSCheckbox name='business' label='I am a business client' />
            <DSRadioGroup
              legend='Title'
              name='title'
              direction='horizontal'
              options={[
                { value: 'mr', label: 'Mr.' },
                { value: 'mrs', label: 'Mrs.' },
                { value: 'other', label: 'other' },
              ]}
              required
            />
            <DSInput
              id='surname-input'
              name='surname'
              label='Surname'
              required={true}
              autoComplete='given-name'
            />
            <DSInput
              id='name-input'
              name='name'
              label='Name'
              required={true}
              autoComplete='family-name'
            />
            <DSCombobox
              id='country-combobox'
              name='country'
              label='Country'
              required={true}
              autoComplete='country-name'
              options={COUNTRIES}
            />
            <div className={styles.inputPairWrapper}>
              <DSInput
                id='zip-input'
                name='zip'
                label='ZIP-Code'
                required={true}
                className={styles.spanOneThird}
                autoComplete='postal-code'
              />
              <DSInput
                id='city-input'
                name='city'
                label='City'
                required={true}
                className={styles.spanTwoThirds}
                autoComplete='address-level2'
              />
            </div>
            <div className={styles.inputPairWrapper}>
              <DSInput
                id='street-name-input'
                name='street-name'
                label='Street name'
                required={true}
                className={styles.spanTwoThirds}
                autoComplete='address-line1'
              />
              <DSInput
                id='street-number-input'
                name='street-number'
                label='Street number'
                inputMode='numeric'
                required={true}
                className={styles.spanOneThird}
                autoComplete='address-line2'
              />
            </div>
            <DSInput
              id='address-addition-input'
              name='address-addition'
              label='Addition to address (optional)'
              autoComplete='address-line3'
            />
            <DSInput
              id='phone-input'
              name='phone'
              label='Phone Number (optional)'
              hint='Please enter the phone in the following format (e.g. +49013909023)'
              autoComplete='tel'
            />
            <DSTextarea
              name='notes'
              id='additional-notes'
              label='Additional notes (optional)'
              hint='Do you have any additional notes for us?'
              maxLength={500}
            />
            <DSInputFile
              id='documents-input'
              name='documents'
              label='Additional Documents'
              accept='.pdf, .docx'
              multiple={true}
              hint='Max file size 7 MB. Supported file types are: .pdf and .docx'
              showDropzone={true}
            />
          </DSFieldset>
          <DSCheckboxGroup
            id='terms-conditions'
            legend={{ headingText: 'Terms of Service', headingSize: 'small' }}
            description='By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.'
            className={styles.fieldset}
            required={true}
            systemFeedback='You must accept the terms of service to continue using this website'
          >
            <DSCheckbox
              name='terms-conditions'
              label='Accept Terms and Conditions'
              required={true}
            />
          </DSCheckboxGroup>
          <DSCheckboxGroup
            id='newsletter'
            legend={{ headingText: 'Newsletter', headingSize: 'small' }}
            description='Stay up to date with the STIHL Newsletter'
            className={styles.fieldset}
          >
            <DSCheckbox name='newsletter' label='Sign up for the Newsletter' />
          </DSCheckboxGroup>
        </form>
      </div>
      <DSButton className={styles.submitButton} form='order-form'>
        Submit
      </DSButton>
    </div>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute('/patterns/Forms/Layout/FormLayout')({
  component: FormLayout,
});
