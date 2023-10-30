import PropTypes from "prop-types";
import { Textarea } from "react-daisyui";

const FormTextareaPropsType = {
  label: PropTypes.string,
  errorText: PropTypes.string,
  topAlt: PropTypes.string,
  bottomAlt: PropTypes.string,
  wrapperClassName: PropTypes.string,
  register: PropTypes.object.isRequired,
};

/**
 * Form Input
 * @type {React.FC<PropTypes.InferProps<FormTextareaPropsType>>}
 * @returns {React.ReactElement}
 */
const FormTextarea = ({
  label,
  errorText,
  topAlt,
  bottomAlt,
  wrapperClassName,
  register,
}) => {
  return (
    <div className={`form-control ${wrapperClassName}`}>
      <label className="label">
        {label ? <span className="label-text">{label}</span> : null}
        {topAlt ? <span className="label-text-alt">{topAlt}</span> : null}
      </label>
      <Textarea {...register} />
      <label className="label">
        {errorText ? <span className="label-text-alt">{errorText}</span> : null}
        {bottomAlt ? <span className="label-text-alt">{bottomAlt}</span> : null}
      </label>
    </div>
  );
};

FormTextarea.propTypes = FormTextareaPropsType;

export default FormTextarea;
