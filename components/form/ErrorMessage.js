import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
export function ErrorMessage({ className, name }) {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors?.[name] && (
        <div className={`text-amcovad-danger py-1 text-sm ${className} `}>{errors?.[name]?.message}</div>
      )}
    </>
  );
}
ErrorMessage.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

ErrorMessage.defaultProps = {
  className: null,
  name: null
};
