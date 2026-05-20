import {
  type UpdateUserDialogProps,
  type CreateUserDialogProps,
  type UserFormData,
} from '../Types';
import { useMemo } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { FormDialog } from '@/features/form-dialog/FormDialog';
import { FormDrawer } from '@/features/form-drawer/FormDrawer';
import { Button } from '@/components/ui/Button';
import { UserFormFields } from './UserFormFields';
import { useUserForm } from '../UseUserForm_tmp';

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
  }, [props.user]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const userForm = useUserForm({ defaultValues: defaultValues, onSubmit: onSubmit });
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
      props.setUser?.(undefined);
      userForm.reset();
    }
  };

  return isDesktop ? (
    <FormDialog
      dialogTitle={formConfig.title}
      dialogDescription={formConfig.description}
      submitButton={FormSubmit()}
      isOpen={props.isOpen}
      setIsOpen={onChange}
    >
      <UserFormFields userForm={userForm} />
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
      <UserFormFields userForm={userForm} />
    </FormDrawer>
  );
};

export { UserForm };
