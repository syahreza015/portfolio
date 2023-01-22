import React, { useRef, useState } from "react";
import "../index.css";
import "../output.css";
import axios from "axios";

const InputGallery = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main>
      <section>
        <form
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            const postImg = async () => {
              const formData = new FormData();
              formData.append("fileName", e.target.image.files[0].name);
              formData.append("file", e.target.image.files[0]);
              try {
                const postFile = await axios.post(
                  "http://localhost:8000/post",
                  formData
                );
                console.log(postFile);
              } catch (err) {
                console.error(err);
              }
            };
            postImg();
          }}
        >
          <input type="file" name="image" id="image" />
          <button type="submit">submit</button>
        </form>
      </section>
    </main>
  );
};

export default InputGallery;
