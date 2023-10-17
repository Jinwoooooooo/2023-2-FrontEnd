function tagString(text, tagname = "div", item = "") {
    const classNames = tagname === "span" ? ` class="${item}"` : "";
    console.log(`<${tagname}${classNames}>${text}</${tagname}>`);
  }
  
  tagString("bla bla"); // <div>bla bla</div>
  tagString("...", "p"); // <p>...</p>
  tagString("...", "span", "item"); // <span class="item">...</span>
  