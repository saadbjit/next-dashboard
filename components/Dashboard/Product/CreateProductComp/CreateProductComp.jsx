import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import categories from "../../../../static/categories.js";

import Dvarient from "../../Common/Dvarient/Dvarient";
import Editor from "../../Common/Editor/Editor";
import ImageUpload from "../../Common/ImageUpload/ImageUpload";
const initialValues = {
  title: null,
  categories: null,
  subcategories: null,
  details: null,
  varient: [],
  image: [],
};
const CreateProductComp = () => {
  const [product, setProduct] = useState(initialValues);

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState(false);
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setProduct({
        ...product,
        [name]: value,
      });
    },
    [product]
  );

  console.log("product = ", product);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Create Product
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "30px",
                position: "fixed",
                right: "20%",
                zIndex: "9999",
              }}
            >
              Create Product
            </Button>
          </Box>

          <form>
            <TextField
              name="title"
              id="outlined-basic"
              label="Product name"
              variant="outlined"
              onChange={handleInputChange}
            />
            <Autocomplete
              name="categories"
              onChange={(event, newValue) => {
                setProduct({
                  ...product,
                  categories: newValue,
                });
              }}
              disablePortal
              id="combo-box-demo"
              options={categories}
              sx={{ width: 300, my: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Categories" />
              )}
            />
            <Autocomplete
              name="subcategories"
              disablePortal
              id="combo-box-demo"
              options={categories}
              sx={{ width: 300, my: 5 }}
              renderInput={(params) => (
                <TextField {...params} label="Sub Categories" />
              )}
              onChange={(event, newValue) => {
                setProduct({
                  ...product,
                  subcategories: newValue,
                });
              }}
            />
            <Box sx={{ my: 5, width: 800 }}>
              <h3>Product Details</h3>
              <Editor
                name="details"
                setData={setProduct}
                editorLoaded={editorLoaded}
                totalData={product}
              />
            </Box>
            <Box sx={{ my: 5 }}>
              <h3>Varient</h3>
              <Dvarient totalData={product} setData={setProduct} />
            </Box>
            <Box sx={{ my: 5 }}>
              <h3>Image upload</h3>

              <ImageUpload />
            </Box>
          </form>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default CreateProductComp;
