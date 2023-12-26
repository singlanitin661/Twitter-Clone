import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({handleClose, open}) {
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const handleSubmit = (values) => {
    console.log("values : ", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },
    onSubmit: handleSubmit,
  });
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imageUrl = event.target.files[0];
    formik.setFieldValue("image", imageUrl);
    setSelectImage(imageUrl);
    setUploadingImage(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              alt="username"
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">Nitin Singla</span>
                  <span className="text-gray-600">@nitin_singla . 2m</span>

                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified account"
                    role="img"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-1plcrui r-lrvibr r-1cvl2hr r-f9ja8p r-og9te1 r-9cviqr"
                    data-testid="icon-verified"
                    className="ml-2 w-5 h-5"
                  >
                    <g>
                      <path
                        fill="#1DA1F2"
                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/twit/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    twitter clone - fullstack project with springboot & react
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <section className={`py-10`}>
              <div className="flex space-x-5">
                <Avatar
                  alt="username"
                  src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
                  />
                <div className="w-full">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="content"
                        placeholder="What is happening"
                        className={`border-none outline-none text-xl bg-transparent`}
                        {...formik.getFieldProps("content")}
                      />
                      {formik.errors.content && formik.touched.content && (
                        <span className="text-red-500">
                          {formik.errors.content}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex space-x-5 items-center">
                        <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                          <ImageIcon className="text-[#1d9bf0]" />
                          <input
                            type="file"
                            name="imageFile"
                            className="hidden"
                            onChange={handleSelectImage}
                          />
                        </label>
                        <FmdGoodIcon className="text-[#1d9bf0]" />
                        <TagFacesIcon className="text-[#1d9bf0]" />
                      </div>
                      <div>
                        <Button
                          sx={{
                            width: "100%",
                            borderRadius: "20px",
                            paddingy: "8px",
                            paddingx: "20px",
                            bgcolor: "#1e88e5",
                          }}
                          variant="contained"
                          type="submit"
                        >
                          Tweet
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            
        </Box>
      </Modal>
    </div>
  );
}
