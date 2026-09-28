import AuthNav from '@/components/AuthNav/AuthNav';
import LoginForm from '@/components/LoginForm/LoginForm';

export default function SignInPage() {
  return (
    <section className="container">
      <AuthNav />
      <LoginForm />
    </section>
  );
}
