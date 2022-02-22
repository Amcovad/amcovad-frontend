import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
export function ErrorLabel({ errorClassName, name }) {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors?.[name] && <div className={`text-amcovad-danger py-1 ${errorClassName} `}>{errors?.[name]?.message}</div>}
    </>
  );
}
ErrorLabel.PropTypes = {
  name: PropTypes.string
};

ErrorLabel.defaultProps = {
  name: null
};
