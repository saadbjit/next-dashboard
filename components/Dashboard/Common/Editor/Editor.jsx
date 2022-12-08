import { useEffect, useRef } from "react";

const Editor = ({ setData, editorLoaded, name, value, totalData }) => {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            setData({
              ...totalData,
              details: data,
            });
          }}
         
          config={{ placeholder: "Click here to start typing" }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default Editor;
