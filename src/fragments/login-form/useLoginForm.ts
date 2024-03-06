import { isEmail, useForm } from '@mantine/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { QUERY_USER } from '@/constants/react-query';
import { app } from '@/config/firebase';

const auth = getAuth(app);
const storageKey = 'emailForSignIn';

export default function useLoginForm() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation<User, Error, string>({
    async mutationFn(email) {
      const result = await signInWithEmailLink(auth, email, window.location.href);
      localStorage.removeItem(storageKey);
      return result.user;
    },
    onSuccess(user) {
      queryClient.setQueryData([QUERY_USER], user);
      router.replace('/');
    },
  });

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = localStorage.getItem(storageKey);

      if (email) {
        mutation.mutate(email);
      }
    }
  }, []);

  const form = useForm({
    initialValues: { email: '' },
    validate: {
      email: isEmail('Invalid Email'),
    },
  });

  const onSubmit = form.onSubmit(async ({ email }) => {
    await sendSignInLinkToEmail(auth, email, {
      url: window.location.href,
      handleCodeInApp: true,
    });
    localStorage.setItem(storageKey, email);
  });

  return { form, onSubmit };
}
