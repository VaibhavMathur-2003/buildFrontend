/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
      }
  
      .navbar {
        background-color: #333;
        overflow: hidden;
      }
  
      .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
      }
  
      .navbar a:hover {
        background-color: #ddd;
        color: black;
      }
  
    </style>
    `;
  bm.add(opts.name, {
    label: `
      <i class="fa fa-arrows-h"></i>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
    category: opts.category,
    content: `<div class="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    
    <div style="padding:20px">
      <h2>Simple Navbar Example</h2>
      <p>This is a simple example of a navigation bar using HTML and CSS.</p>
    </div>
     ${style}`,
  });
};
