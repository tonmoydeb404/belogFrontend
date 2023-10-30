import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import RichText from "./RichText";

const propsType = {
  label: PropTypes.string,
  errorText: PropTypes.string,
  topAlt: PropTypes.string,
  bottomAlt: PropTypes.string,
  wrapperClassName: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

/**
 * Form Input
 * @type {React.FC<PropTypes.InferProps<propsType>>}
 * @returns {React.ReactElement}
 */
const FormRichText = ({
  label,
  errorText,
  topAlt,
  bottomAlt,
  wrapperClassName,
  control,
  name,
}) => {
  return (
    <div className={`form-control ${wrapperClassName}`}>
      <label className="label">
        {label ? <span className="label-text">{label}</span> : null}
        {topAlt ? <span className="label-text-alt">{topAlt}</span> : null}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RichText defaultValue={value} onChange={onChange} />
        )}
      />

      <label className="label">
        {errorText ? <span className="label-text-alt">{errorText}</span> : null}
        {bottomAlt ? <span className="label-text-alt">{bottomAlt}</span> : null}
      </label>
    </div>
  );
};

FormRichText.propTypes = propsType;

export default FormRichText;
