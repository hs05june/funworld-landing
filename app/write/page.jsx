"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    if (file) {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error("Upload failed", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };

      upload();
    }
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    console.log("Request started ->");
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", // If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="mt-12">
          <span className="font-bold text-xl">Disclaimer:</span> Your blog won't be published until it's verified by the
          team. Once you write a blog, just mail us about it. The email should
          contain:
          <br />
          The email from which it was published,
          <br /> and a brief about the blog.
        </div>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Title"
            className="my-6 px-4 w-full h-[15vh] border border-gray-300 text-2xl rounded-lg text-textColor"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex justify-between border items-center py-4 px-2">
            <div>
              <label htmlFor="categorySelect" className="pr-2">Select a Category:</label>
              <select
                id="categorySelect"
                className="bg-gray-300 py-2 px-2"
                onChange={(e) => setCatSlug(e.target.value)}
              >
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
              </select>
            </div>
            <div>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "block", marginBottom: "10px" }}
              />
            </div>
          </div>

          <div className="border-2 min-h-[30vh]">
            <ReactQuill
              className={styles.textArea}
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
          </div>
          <button className="bg-[#1a8917] py-2 px-4 my-4 text-white font-bold" onClick={handleSubmit}>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
