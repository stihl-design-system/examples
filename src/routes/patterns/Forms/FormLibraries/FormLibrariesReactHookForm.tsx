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
import { type JSX } from 'react';
import { type SubmitHandler, Controller, useForm } from 'react-hook-form';

type Inputs = {
  title: string;
  firstName: string;
  lastName: string;
  country: ComboboxOption;
  notes: string;
  height: string;
  profilePicture: File[];
  terms: boolean;
};

const COUNTRIES: ComboboxOptionsOrOptGroups = [
  { value: 'DE', label: 'Germany' },
  { value: 'GB', label: 'United Kingdom' },
];

const FormLibrariesReactHookForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({});
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log('First name', watch('firstName')); // watch input value by passing the name of it

  return (
    <>
      {/*  Example for an error summary. Read more in the Fieldset documentation */}
      {Object.keys(errors).length !== 0 && (
        <DSNotification
          variant='error'
          hideIcon
          style={{ marginBlockEnd: '24px' }}
          aria-labelledby='error-summary-heading'
          aria-describedby='error-summary-text'
        >
          <DSHeading id='error-summary-heading' size='medium' tag='div'>
            Invalid entries.
          </DSHeading>
          <DSText id='error-summary-text' style={{ marginBlockEnd: '12px' }}>
            Please check the details below.
          </DSText>
          <ul
            aria-labelledby='error-summary-heading'
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {Object.keys(errors).map((key) => (
              <li key={key}>
                <DSLink href={`#${key}`}>
                  {errors[key as keyof Inputs]?.message}
                </DSLink>
              </li>
            ))}
          </ul>
        </DSNotification>
      )}
      <form
        id='order-form'
        style={{ display: 'grid', gap: 32, padding: 32 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <DSFieldset
          legend={{ headingText: 'React-Hook Forms', headingTag: 'h2' }}
        >
          {/* Use of React Hook Form's Controller component for DSRadioGroup */}
          <Controller
            name='title'
            control={control}
            rules={{ required: 'You need to set a title!' }}
            render={({ field }) => (
              <DSRadioGroup
                legend='Title'
                direction='horizontal'
                id='title'
                invalid={errors.title?.type === 'required'}
                systemFeedback={errors.title?.message}
                options={[
                  { value: 'mr', label: 'Mr.' },
                  { value: 'mrs', label: 'Mrs.' },
                  { value: 'other', label: 'other' },
                ]}
                required
                {...field}
              />
            )}
          />
          <DSInput
            id='firstName'
            label='First name'
            autoComplete='given-name'
            required={true}
            invalid={errors.firstName?.type === 'required'}
            systemFeedback={errors.firstName?.message}
            {...register('firstName', {
              required: 'First name is required!',
            })}
          />
          <DSInput
            id='lastName'
            label='Last name'
            autoComplete='family-name'
            required={true}
            invalid={errors.lastName?.type === 'required'}
            systemFeedback={errors.lastName?.message}
            {...register('lastName', { required: 'Last name is required!' })}
          />
          {/* Use of React Hook Form's Controller component to map DSCombobox event handler */}
          <Controller
            name='country'
            control={control}
            rules={{ required: 'You need to select a country!' }}
            render={({ field }) => (
              <DSCombobox
                id='country'
                label='Country'
                autoComplete='country-name'
                options={COUNTRIES}
                required={true}
                invalid={errors.country?.type === 'required'}
                systemFeedback={errors.country?.message}
                onValueChange={field.onChange}
              />
            )}
          />
          <DSTextarea
            id='notes'
            label='Additional notes'
            hint='Do you have any additional notes for us?'
            maxLength={500}
            required={true}
            invalid={errors.notes?.type === 'required'}
            systemFeedback={errors.notes?.message}
            {...register('notes', {
              required: 'Please provide some notes!',
            })}
          />
          <Controller
            name='height'
            control={control}
            render={({ field }) => {
              /* Use of React Hook Form's Controller component to map DSSlider custom event handler */
              return (
                <DSSlider
                  id='height'
                  label='Height'
                  onChange={field.onChange}
                />
              );
            }}
          />
          <Controller
            name='profilePicture'
            control={control}
            render={({ field }) => (
              <DSInputFile
                label='Profile picture'
                id='profilePicture'
                hint='Your profile picture should be any image format'
                onFilesSelect={field.onChange}
              />
            )}
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
          invalid={errors.terms?.type === 'required'}
          systemFeedback='You must accept the terms of service to continue using this website'
        >
          <DSCheckbox
            label='Accept Terms and Conditions'
            required={true}
            id='terms'
            invalid={errors.terms?.type === 'required'}
            {...register('terms', {
              required: 'You need to accept the terms!',
            })}
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
  '/patterns/Forms/FormLibraries/FormLibrariesReactHookForm'
)({
  component: FormLibrariesReactHookForm,
});
