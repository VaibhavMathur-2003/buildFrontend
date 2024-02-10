import grapesjs from "grapesjs";
import loadBlocks from "./blocks";

export default grapesjs.plugins.add("navComponent", (editor, opts = {}) => {
  let options = {
    label: "Navbar",
    name: "cnavbar",
    category: "Custom",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }

  loadBlocks(editor, options);
});