import { convertToHTML } from "draft-convert";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";

const propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

/**
 * Rich Text Input
 * @type {React.FC<PropTypes.InferProps<propTypes>>}
 * @returns {React.ReactElement}
 */
const RichText = ({ onChange, defaultValue = "" }) => {
  const [state, setState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(defaultValue))
    )
  );
  const ref = useRef(null);

  useEffect(() => {
    const html = convertToHTML(state.getCurrentContent());
    onChange(html);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Editor
      toolbarClassName="text-black"
      wrapperClassName="p-2 rounded border border-accent"
      editorClassName="min-h-[400px] prose max-w-full"
      ref={ref}
      editorState={state}
      onEditorStateChange={setState}
    />
  );
};

RichText.propTypes = propTypes;

export default RichText;
