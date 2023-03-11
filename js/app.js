import * as flsFunctions from "./modules/functions.js";
import { remove } from "./modules/remove.js";
import { like } from "./modules/like.js";
import { createComment } from "./modules/createComment.js";
import { getFormDate} from "./modules/getFormDate.js";
import { autoresize } from "./modules/textarea.js";

flsFunctions.isWebp();

let commentText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, similique sed natus voluptatibus maxime alias impedit molestias magni sint soluta ducimus omnis beatae veritatis! Ducimus eum libero quibusdam eos temporibus doloribus, neque explicabo quis, porro voluptate tempore quaerat voluptatum magni ea corrupti minima. Distinctio, sit exercitationem ipsum placeat nesciunt odit.';
let newComment = document.getElementById('comments_container');
newComment.append(createComment('Anon', commentText, '05.03.2023, 12:15'));
like();
remove();
getFormDate();
autoresize();
