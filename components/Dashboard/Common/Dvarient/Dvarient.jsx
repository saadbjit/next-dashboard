import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Dvarient = ({ setData, totalData }) => {
  const [inputFields, setInputFields] = useState([
    { id: uuid(), name: "", price: "" },
  ]);
  const [varientData, setVarientData] = useState([
    { id: uuid(), name: "", price: "" },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { id: uuid(), name: "", price: "" };
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (e, index) => {
    e.preventDefault();
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
    setVarientData(data);
  };
  useEffect(() => {
    setVarientData(inputFields);
    setData({
      ...totalData,
      varient: varientData,
    });
  }, [inputFields]);

  return (
    <div>
      {inputFields.map((input, index) => {
        return (
          <div key={index}>
            <input
              name="id"
              value={input.id}
              onChange={(event) => handleFormChange(index, event)}
              hidden
            />
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Varient name"
                variant="outlined"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                name="price"
                placeholder="price"
                value={input.price}
                onChange={(event) => handleFormChange(index, event)}
                type="number"
              />
              <Button
                sx={{
                  height: 55,
                  width: 600,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  m: 5,
                }}
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={(e) => removeFields(e, index)}
              >
                Remove
              </Button>
            </Box>
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
        Add Varient
      </Button>
    </div>
  );
};

export default Dvarient;
