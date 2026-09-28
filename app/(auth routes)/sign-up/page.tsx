import AuthNav from '@/components/AuthNav/AuthNav';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

export default function SignUpPage() {
  return (
    <section className="container">
      <AuthNav />
      <RegisterForm />
    </section>
  );
}
