import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./ImageUpload.module.scss";
const ImageUpload = () => {
  const [inputFields, setInputFields] = useState([{ file: "" }]);
  const handleFormChange = (index, event) => {
    console.log(event.target.files);
    let data = [...inputFields];
    data[index][event.target.name] = URL.createObjectURL(event.target.files[0]);
    console.log("data = > ", data);
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { file: "" };
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (e, index) => {
    e.preventDefault();
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>

        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <span>{index + 1}</span>
              <Button variant="contained" component="label">
                Upload
                <input
                  hidden
                  accept="image/*"
                  onChange={(event) => handleFormChange(index, event)}
                  type="file"
                  name="file"
                />
              </Button>

              {input.file ? (
                <Box
                  component="img"
                  sx={{
                    height:100,
                    width:100,
                    maxHeight: { xs:100, md:100 },
                    maxWidth: { xs:100, md:100 },
                    mx: 5,
                  }}
                  alt="Product Image"
                  src={input.file}
                ></Box>
              ) : (
                <Box
                component="img"
                  sx={{
                 
                    height:100,
                    width:100,
                    maxHeight: { xs:100, md:100 },
                    maxWidth: { xs:100, md:100 },
                    mx: 5,
                    backgroundColor: "white",
                    border: "1px dotted black",
                  }}
                ></Box>
              )}

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={(e) => removeFields(e, index)}
              >
                Remove
              </Button>
            </div>
          );
        })}

      <Button
        sx={{
          height: 50,
          width: 600,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          m: 5,
        }}
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addFields}
      >
        Add Image
      </Button>
    </div>
  );
};

export default ImageUpload;
