import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import "./styles/main.css"
import swiperComponent from "./Components/swiper";
import  navComponent from "./Components/navbar";


const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
  
    const editor = grapesjs.init({
      container: "#editor",
     
      plugins: [gjsBlockBasic, swiperComponent, navComponent],
      components: '<div>Hello, World!</div>',
      pluginsOpts: {
        gjsBlockBasic: {},
        swiperComponent: {},
      },
      canvas: {
        styles: ["https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"],
        scripts: [],
      }

    });
    
    setEditor(editor);
    
  }, []);

  return (
    <div className="App">
        <div id="editor"></div>
    </div>
  );
};

export default Editor;
