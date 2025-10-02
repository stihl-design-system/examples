import {
  type ComboboxOption,
  type ComboboxOptionsOrOptGroups,
  DSButton,
  DSCheckbox,
  DSCheckboxGroup,
  DSCombobox,
  DSFieldset,
  DSHeading,
  DSInput,
  DSInputFile,
  DSLink,
  DSNotification,
  DSRadioGroup,
  DSSlider,
  DSTextarea,
} from '@stihl-design-system/components';
import { createFileRoute } from '@tanstack/react-router';
import { useFormik } from 'formik';
import { type JSX } from 'react';

const COUNTRIES: ComboboxOptionsOrOptGroups = [
  { value: 'DE', label: 'Germany' },
  { value: 'GB', label: 'United Kingdom' },
];

interface FormValues {
  title?: string;
  firstName?: string;
  lastName?: string;
  country?: ComboboxOption;
  notes?: string;
  height?: string;
  profilePicture?: File[];
  terms?: boolean;
}

interface ErrorValues extends Partial<Omit<FormValues, 'terms' | 'country'>> {
  terms?: string;
  country?: string;
}

// Client-side validation logic
const validate = (values: FormValues) => {
  const errors: Partial<ErrorValues> = {};

  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.firstName) {
    errors.firstName = 'First name is required!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }
  if (!values.country) {
    errors.country = 'Country is required';
  }
  if (!values.notes) {
    errors.notes = 'Notes are required';
  }
  if (!values.terms) {
    errors.terms = 'Terms must be accepted';
  }

  return errors;
};

const FormLibrariesFormik = (): JSX.Element => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    notes: '',
    height: '',
    terms: false,
    title: '',
  };

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Event handler for country combobox. Combobox requires a different event handler
  // so we need to handle it separately.
  const handleCountryChange = (value: ComboboxOption) => {
    setFieldValue('country', value);
  };

  // Event handler for height DSSlider. Slider requires a different event handler
  // so we need to handle it separately.
  const handleHeightChange = (value: string) => {
    // It's important to set the third parameter to false, otherwise the form will be validated
    // on every change of the slider which leads to a rerender issue when dragging the thumb.
    setFieldValue('height', value, false);
  };

  // Event handler for profilePicture DSInputFile. DSInputFile requires a different event handler
  // so we need to handle it separately.
  const handleProfilePictureChange = (files: File[]) => {
    setFieldValue('profilePicture', files);
  };

  return (
    <>
      {/*  Example for an error summary. Read more in the Fieldset documentation */}
      {Object.keys(errors).length !== 0 && (
        <DSNotification variant='error' hideIcon>
          <DSHeading id='error-summary-heading' size='small'>
            There is a problem
          </DSHeading>
          <ul aria-labelledby='error-summary-heading'>
            {Object.keys(errors).map((key) => (
              <li key={key}>
                <DSLink href={`#${key}`}>
                  {errors[key as keyof ErrorValues]}
                </DSLink>
              </li>
            ))}
          </ul>
        </DSNotification>
      )}
      <form
        id='order-form'
        style={{ display: 'grid', gap: 32, padding: 32 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <DSFieldset legend={{ headingText: 'Personal data', headingTag: 'h2' }}>
          <DSRadioGroup
            legend='Title'
            name='title'
            id='title'
            direction='horizontal'
            options={[
              { value: 'mr', label: 'Mr.' },
              { value: 'mrs', label: 'Mrs.' },
              { value: 'other', label: 'other' },
            ]}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            invalid={!!(errors.title && touched.title)}
            systemFeedback={errors.title}
          />
          <DSInput
            id='firstName'
            label='First name'
            required={true}
            autoComplete='given-name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            invalid={!!(errors.firstName && touched.firstName)}
            systemFeedback={errors.firstName}
          />
          <DSInput
            id='lastName'
            label='Last name'
            required={true}
            autoComplete='family-name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            invalid={!!(errors.lastName && touched.lastName)}
            systemFeedback={errors.lastName}
          />
          <DSCombobox
            id='country'
            label='Country'
            required={true}
            autoComplete='country-name'
            options={COUNTRIES}
            // Combobox requires a custom event handler
            onValueChange={handleCountryChange}
            onBlur={handleBlur}
            value={values.country}
            invalid={!!(errors.country && touched.country)}
            systemFeedback={errors.country}
          />
          <DSTextarea
            id='notes'
            label='Additional notes'
            hint='Do you have any additional notes for us?'
            maxLength={500}
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.notes}
            invalid={!!(errors.notes && touched.notes)}
            systemFeedback={errors.notes}
          />
          <DSSlider
            id='height'
            label='Height'
            onChange={(event) => handleHeightChange(event?.target.value)}
            onBlur={handleBlur}
            value={values.height}
          />
          <DSInputFile
            label='Profile picture'
            id='profilePicture'
            hint='Your profile picture should be any image format'
            onFilesSelect={(files: File[]) => handleProfilePictureChange(files)}
          />
        </DSFieldset>
        <DSCheckboxGroup
          id='terms-set'
          legend={{
            headingText: 'Terms of Service',
            headingSize: 'small',
          }}
          description='By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.'
          required={true}
          invalid={!!(errors.terms && touched.terms)}
          systemFeedback={errors.terms}
        >
          <DSCheckbox
            label='Accept Terms and Conditions'
            id='terms'
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.terms}
            invalid={!!(errors.terms && touched.terms)}
          />
        </DSCheckboxGroup>
        <DSButton style={{ width: 'fit-content' }} type='submit'>
          Submit
        </DSButton>
      </form>
    </>
  );
};

// Added: Route export for patterns navigation
export const Route = createFileRoute(
  '/patterns/Forms/FormLibraries/FormLibrariesFormik'
)({
  component: FormLibrariesFormik,
});
