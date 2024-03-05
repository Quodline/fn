import { RegisterForm } from '@/app/sign-up/register-form';
import { Nav } from '@/components/Nav/Nav';

export default function RegisterPage() {
  return (
    <>
      <Nav />
      <main>
        <RegisterForm />
      </main>
    </>
  );
}
