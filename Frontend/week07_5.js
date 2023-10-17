function tagString(text, tagname="div", cls="") {
    if(cls == "") {
        console.log(`<${tagname}>${text}</${tagname}>`);
    }
    else {
        console.log(`<${tagname} class="${cls}">${text}</${tagname}>`);
    }
}

tagString("bla bla"); //<div>bla bla</div>
tagString("...", "p"); //<p>...</p>
tagString("...", "span", "item"); //<span class="item">...</span>