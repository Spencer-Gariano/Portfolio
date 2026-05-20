import { revalidateLogic, useForm } from '@tanstack/react-form';
import { userFormSchema, type UserFormData } from './Types';

export interface IUseUserFormProps {
  defaultValues: UserFormData;
  onSubmit: (data: UserFormData) => void;
}

export const useUserForm = (props: IUseUserFormProps) => {
  return useForm({
    defaultValues: props.defaultValues,
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: userFormSchema,
    },
    onSubmit: async ({ value }) => {
      const result = userFormSchema.parse(value);
      await props.onSubmit(result);
    },
  });
};

export type UserFormInstance = ReturnType<typeof useUserForm>;
