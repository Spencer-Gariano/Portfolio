import type { UserFormInstance } from '../UseUserForm';
import { FieldError, FieldGroup, FieldLabel, Field } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';

export interface IUserFormFieldsProps {
  userForm: UserFormInstance;
}

const UserFormFields = (props: IUserFormFieldsProps) => {
  const { userForm } = props;

  return (
    <form
      id={'user-form'}
      onSubmit={(e) => {
        e.preventDefault();
        userForm.handleSubmit();
      }}
    >
      <FieldGroup>
        <div className={'grid grid-cols-1 gap-3 md:grid-cols-2'}>
          <Field>
            <userForm.Field
              name={'firstName'}
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder='Enter first name'
                      autoComplete='given-name'
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </Field>
          <Field>
            <userForm.Field
              name={'lastName'}
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder='Enter last name'
                      autoComplete='family-name'
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </Field>
        </div>
        <div className='mt-1'>
          <userForm.Field
            name='email'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='Enter email'
                    autoComplete='email'
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </div>
      </FieldGroup>
    </form>
  );
};
export { UserFormFields };
