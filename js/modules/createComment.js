export function createComment(username, text, date) {
  const header = createHeader(username, date);
  const content = createText(text);
  const footer = createFooter();

  let comment = document.createElement('div');
  comment.id = 'comment';
  comment.className = 'comments';
  comment.append(header);
  comment.append(content);
  comment.append(footer);

  return comment;
}

function createHeader(username, date=Date.now()) {
    // DIV comments_header
    let commentsHeader = document.createElement('div');
    commentsHeader.className = 'comments_header';
  
      let commentsAvatar = document.createElement('img');
      commentsAvatar.className = 'comments_avatar';
      commentsAvatar.src = 'img/anon.jpg';
  
      // DIV comments_author
      let commentsAuthor = document.createElement('div');
      commentsAuthor.className = 'comments_author';
  
        let commentsName = document.createElement('div');
        commentsName.className = 'comments_name';
        commentsName.textContent = username;
  
        let commentsDate = document.createElement('time');
        commentsDate.className = 'comments_date';
        commentsDate.textContent = date;
  
      commentsAuthor.appendChild(commentsName);
      commentsAuthor.appendChild(commentsDate);
    
    commentsHeader.appendChild(commentsAvatar);
    commentsHeader.appendChild(commentsAuthor);
    
    return commentsHeader;
}

function createText(text) {
  let commentsText = document.createElement('div');
  commentsText.className = 'comments_text';
  commentsText.textContent = text;

  return commentsText;
}

function createFooter() {
  // DIV footer
  let commentsFooter = document.createElement('div');
  commentsFooter.className = 'comments_footer';

    // DIV like
    let like = document.createElement('div');
    like.className = 'like';

      // IMG like_icon
      let likeIcon = document.createElement('img');
      likeIcon.className = 'like_icon';
      likeIcon.src = 'img/like.svg';
      likeIcon.alt = 'like_icon';

      let likeRed = document.createElement('img');
      likeRed.id = 'like_red';
      likeRed.className = 'like_icon';
      likeRed.src = 'img/liked.png';
      likeRed.alt = 'like_red';
      likeRed.hidden = true;
    
    like.append(likeIcon);
    like.append(likeRed);

    // DIV remove_button
    let removeButton = document.createElement('button');
    removeButton.className = 'remove_button';

      let garbage = document.createElement('img');
      garbage.className = 'garbage';
      garbage.src = 'img/delete-garbage.svg';
      garbage.alt = 'garbage_icon';

    removeButton.append(garbage);

  commentsFooter.append(like);
  commentsFooter.append(removeButton);

  return commentsFooter;
}