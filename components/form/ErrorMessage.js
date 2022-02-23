import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
export function ErrorMessage({ errorClassName, name }) {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors?.[name] && <div className={`text-amcovad-danger py-1 ${errorClassName} `}>{errors?.[name]?.message}</div>}
    </>
  );
}
ErrorMessage.propTypes = {
  name: PropTypes.string,
  errorClassName: PropTypes.string
};

ErrorMessage.defaultProps = {
  name: null,
  errorClassName: null
};
