var brand_option_tag = document.getElementById("select_brand");
var device_option_tag = document.getElementById("select_device");
var model_option_tag = document.getElementById("select_model");

brand_option_tag.addEventListener("change", displayNextSelection);
device_option_tag.addEventListener("change", displayNextSelection);
model_option_tag.addEventListener("change", displayNextSelection);

function displayNextSelection() {
    let changed_select_tag = event.currentTarget;
    let next_select_tag = nextSelectTag(changed_select_tag);
}

function nextSelectTag(currentTag) {
    let type_name = currentTag.nodeType;
    let parent_node = currentTag.parentNode;
    let children_number = parent_node.childElementCount;
    let nextTag;
    for (let i = 0; i < children_number; i++) {
        if (parent_node.children[i].id == currentTag.id) {
            if (i != children_number - 1) {
                nextTag = parent_node.children[i + 1];
                alert("Next: " + nextTag.id);
                break;
            }
            else {
                alert("Current tag is the last tag!");
            }
        }
        else {
            if (i != children_number - 1) {
                continue;
            }
            else {
                alert("Error!, No tag found!");
            }
        }
    }
}