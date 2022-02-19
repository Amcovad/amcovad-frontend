import { useFormContext } from 'react-hook-form';
export function ErrorLabel({ className, name }) {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors?.[name] && (
        <div className={`text-amcovad-danger py-1 ${className} `}>
          <p>{errors?.[name]?.message}</p>
        </div>
      )}
    </>
  );
}
