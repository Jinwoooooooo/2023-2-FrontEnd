function tagString(text, tagname="div", item) {
    if(tagname == "div") {
        console.log (`<${tagname}>${text}</${tagname}>`);
    }
    else if(tagname == "p") {
        console.log (`<${tagname}>${text}</${tagname}>`);  
    }
    if(tagname == "span") {
        console.log (`<${tagname} class="${item}">${text}</${tagname}>`); 
    }
}

tagString("bla bla") //<div>bla bla</div>
tagString("...", "p") //<p>...</p>
tagString("...", "span", "item") //<span class="item">...</span>