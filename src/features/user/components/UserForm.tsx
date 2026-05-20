import {
  type UpdateUserDialogProps,
  type CreateUserDialogProps,
  type UserFormData,
  userFormSchema,
} from '../Types';
import { revalidateLogic, useForm } from '@tanstack/react-form';
import { useMemo } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { FormDialog } from '@/features/form-dialog/FormDialog';
import { FormDrawer } from '@/features/form-drawer/FormDrawer';
import { Button } from '@/components/ui/Button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/Field';
import { Input } from '@/components/ui/Input';

export type UserFormProps = CreateUserDialogProps | UpdateUserDialogProps;

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: UserFormData) => {
    if (props.mode === 'update') {
      props.onSubmit({ mode: props.mode, newUser: data, currentUser: props.user });
      userForm.reset(props.user);
    } else {
      props.onSubmit({ mode: props.mode, newUser: data });
      userForm.reset();
    }
    props.setIsOpen(false);
  };
  const formConfig = useMemo(() => {
    const isUpdate = props.mode === 'update';

    return {
      title: isUpdate ? 'Update User' : 'Create User',
      description: isUpdate
        ? 'Update the user details below.'
        : 'Fill out the form to create a new user.',
      submitText: isUpdate ? 'Update' : 'Create',
    };
  }, [props.mode]);
  const defaultValues: UserFormData = useMemo(() => {
    return {
      firstName: props.user?.firstName ?? '',
      lastName: props.user?.lastName ?? '',
      email: props.user?.email ?? '',
    };
  }, [props.user, props.mode]);

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const userForm = useForm({
    defaultValues: defaultValues,
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: userFormSchema,
    },
    onSubmit: async ({ value }) => {
      const result = userFormSchema.parse(value);
      await onSubmit(result);
    },
  });

  const FormSubmit = () => {
    return (
      <Button type={'submit'} form={'user-form'}>
        {formConfig.submitText}
      </Button>
    );
  };

  const onChange = (value: boolean) => {
    props.setIsOpen(value);
    if (!value) {
      props.setUser && props.setUser(undefined);
      userForm.reset();
    }
  };

  const FormData = () => {
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

  return isDesktop ? (
    <FormDialog
      dialogTitle={formConfig.title}
      dialogDescription={formConfig.description}
      submitButton={FormSubmit()}
      isOpen={props.isOpen}
      setIsOpen={onChange}
    >
      <FormData />
    </FormDialog>
  ) : (
    <FormDrawer
      drawerTitle={formConfig.title}
      drawerDescription={formConfig.description}
      submitButton={FormSubmit()}
      isOpen={props.isOpen}
      setIsOpen={onChange}
      direction={'bottom'}
    >
      <FormData />
    </FormDrawer>
  );
};

export { UserForm };
