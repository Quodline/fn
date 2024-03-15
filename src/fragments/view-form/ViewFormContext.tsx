'use client';

import { createContext, ReactNode } from 'react';
import { Field } from '@/chunks/build-form/FieldsContext';
import { Tables } from '@/types/database.types';

type Form = Tables<'forms'> & { fields: Field[] };
interface ProviderProps {
  children: ReactNode;
  value: Form;
}

const ViewFormContext = createContext<Form>({} as Form);

const ViewFormProvider = (props: ProviderProps) => <ViewFormContext.Provider {...props} />;

export { ViewFormContext, ViewFormProvider };
