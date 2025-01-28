import React, { useState } from "react";
import { Rnd } from "react-rnd";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.bubble.css";
import parser from "html-react-parser";

import cert from "../certificate-generator/CertificateTemplates/Python Full Stack.png"
import { clamp } from "framer-motion";

// const toolbarOptions = [
//     [{ 'header': [1,2,3,4,5,6,false]},
//         "bold", "italic", "underline", "strike",
//       { color: [] }, { background: [] },
//       "image",
//       {align:[]},
//       "clean",
//     ]
//   ];



  const AdminPanel = () => {
    const [textBoxes, setTextBoxes] = useState([]);
    const [template, setTemplate] = useState(null);
    const [templateSize, setTemplateSize] = useState({ width: 800, height: 600 });
    const [EditMode, setEditMode] = useState(true);
  
    const addTextBox = () => {
      setEditMode(true);
      setTextBoxes([
        ...textBoxes,
        { id: Date.now(), x: 0, y: 0, width: 20, height: 10, text: "Enter text...", 
          // fontSize: 24,
        },
      ]);
    };
  
    const handleTemplateUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => setTemplate(reader.result);
      reader.readAsDataURL(file);
    };
  
    const saveConfiguration = () => {
      const configuration = textBoxes.map((box) => ({
        id: box.id,
        text: box.text,
        x: (box.x / templateSize.width) * 100, // Convert to percentage
        y: (box.y / templateSize.height) * 100, // Convert to percentage
        width: (box.width / templateSize.width) * 100, // Convert to percentage
        height: (box.height / templateSize.height) * 100, // Convert to percentage
        // fontSize: (box.height), // 36
      }));
      setEditMode(false);
      console.log("Saved Configuration:", configuration);
      // Save `configuration` and `template` to the backend
    };

    console.log("text Boxes: ", textBoxes);
  
    return (
      <div className="p-4 h-screen overflow-auto">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleTemplateUpload}
          className="mb-4"
        />
        <button
          onClick={addTextBox}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add Text Box
        </button>
        <button
          onClick={saveConfiguration}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Configuration
        </button>
        <button
          onClick={()=>setEditMode(!EditMode)}
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          {EditMode?"Disable Edit":"Edit Mode"}
        </button>
  
        <div
          
          className="relative mt-6 border border-gray-300 mx-auto"
          style={{ width: "100%", maxWidth: "800px", height: "auto" }}
        >
          <img
              src={cert}
              alt="Certificate Template"
              className="w-full h-auto"
              onLoad={(e) => {
                const element = e.target;
                setTemplateSize({
                  width: element.clientWidth,
                  height: element.clientHeight,
                });
              }}
            />
          {template && (
            <img
              src={template}
              alt="Certificate Template"
              className="w-full h-auto"
              onLoad={(e) => {
                const element = e.target;
                setTemplateSize({
                  width: element.clientWidth,
                  height: element.clientHeight,
                });
              }}
            />
          )}
  
          {textBoxes.map((box, index) =>  
          EditMode? (
            <Rnd
              // className={`w-[${(box.width / 100) * templateSize.width}px] h-[${(box.height / 100) * templateSize.height}px]`}
              className="w-full h-full"
              key={box.id}
              bounds="parent"
              size={{
                width: `${(box.width / 100) * templateSize.width}px`,
                height: `${(box.height / 100) * templateSize.height}px`,
              }}
              position={{
                x: (box.x / 100) * templateSize.width,
                y: (box.y / 100) * templateSize.height,
              }}
              onDragStop={(e, data) => {
                const updatedBoxes = [...textBoxes];
                updatedBoxes[index].x = (data.x / templateSize.width) * 100; // Save as percentage
                updatedBoxes[index].y = (data.y / templateSize.height) * 100; // Save as percentage
                setTextBoxes(updatedBoxes);
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                const updatedBoxes = [...textBoxes];
                updatedBoxes[index].width =
                  (parseInt(ref.style.width) / templateSize.width) * 100; // Save as percentage
                updatedBoxes[index].height =
                  (parseInt(ref.style.height) / templateSize.height) * 100; // Save as percentage
                updatedBoxes[index].x = (position.x / templateSize.width) * 100; // Save as percentage
                updatedBoxes[index].y = (position.y / templateSize.height) * 100; // Save as percentage
                // updatedBoxes[index].fontSize = (parseInt(ref.style.width)) * 0.2;
                // console.log("Converted Font-Size: " ,updatedBoxes[index].fontSize);
                setTextBoxes(updatedBoxes);
              }}
            >
              <div className="text-editor h-full w-full">
              <EditorToolbar/>
              <ReactQuill
                theme="bubble"
                value={box.text}
                onChange={(value) => {
                  const updatedBoxes = [...textBoxes];
                  updatedBoxes[index].text = value;
                  setTextBoxes(updatedBoxes);
                }}
                // modules={{toolbar:toolbarOptions}}
                modules={modules}
                formats={formats}
                className="h-full border-2 border-green-600 text-black"
              />
              </div>
            </Rnd>) : 
            // parser(box.text)
            (<div
            key={box.id}
            className="absolute text-black border-2 border-gray-300"
            style={{
              top: `${(box.y) }%`,
              left: `${(box.x) }%`,
              width: `${(box.width) }%`,
              height: `${(box.height) }%`,
              overflow: "hidden",
              // fontSize: `${(box.fontSize) }px`,
              // padding: "12px 15px"
              
            }}
            // dangerouslySetInnerHTML={{ __html: box.text }}
          >
            {parser(box.text)}
          </div>)
          
          )}
        </div>
      </div>
    );
  };
  
  export default AdminPanel;