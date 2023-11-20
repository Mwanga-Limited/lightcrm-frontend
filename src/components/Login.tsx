import { Form, Formik } from 'formik';
import CustomInput from './common/CustomInput';
import loginImg from '@assets/images/loginimg.svg';
import { useNavigate } from 'react-router-dom';
import { BUCKET } from 'utils/routes';

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 sm:px-16 pt-20 xl:px-32 flex flex-col gap-6 min-h-screen bg-bgColor">
      <header className="font-medium text-textColor text-center lg:text-left capitalize">
        <h1 className="text-2xl lg:text-4xl mb-2">
          Hi there and welcome back to{' '}
          <span className="text-purpleColor font-bold">LightCrm</span>
        </h1>
        <p className="text-base lg:text-lg">Login to access your dashboard</p>
      </header>
      <div className="mt-auto grid md:grid-cols-2 gap-6 lg:flex-row items-center mb-4">
        <div className="max-w-sm md:max-w-md mx-auto md:order-2">
          <img src={loginImg} alt="projection img" />
        </div>
        <div className="mx-auto w-full max-w-[20rem] lg:mx-0 flex-shrink-0 lg:max-w-[18.75rem] md:order-1">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (values) => {
              console.log(values);
              navigate(BUCKET);
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                <CustomInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Bolatito_001"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="*************"
                />
                <div className="mt-2 flex items-center justify-end">
                  <div className="text-sm">
                    <a
                      href={'#'}
                      className="font-bold text-purpleColor hover:text-purpleColor/80 text-xs"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-purpleColor px-6 py-3 text-2xl font-bold leading-6 text-white shadow-sm hover:bg-purpleColor/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purpleColor"
                >
                  Log in
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;
