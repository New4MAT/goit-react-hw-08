import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit = () => {} }) => {
  const navigate = useNavigate();

  return (
    <div className={css.loginContainer}>
      <div className={css.formWrapper}>
        <h2 className={css.formTitle}>Login</h2>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await onSubmit(values);
              // Перенаправлення після успішного входу
              navigate('/contacts'); // або ваш шлях після логіну
            } catch (error) {
              setErrors({ submit: error.message });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={css.loginForm}>
              <div className={css.inputGroup}>
                <label htmlFor="email" className={css.inputLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={css.formInput}
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <div className={css.errorMessage}>{errors.email}</div>
                )}
              </div>

              <div className={css.inputGroup}>
                <label htmlFor="password" className={css.inputLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={css.formInput}
                  placeholder="Enter your password"
                />
                {touched.password && errors.password && (
                  <div className={css.errorMessage}>{errors.password}</div>
                )}
              </div>

              {errors.submit && (
                <div className={css.submitError}>{errors.submit}</div>
              )}

              <button
                type="submit"
                className={css.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={css.spinner}></span>
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
