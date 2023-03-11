export function like() {
  comments_container.addEventListener('click', (event) => {
    if (event.target.className != 'like_icon') return;
    let thisLike = event.target.closest('.like');
    let liked = thisLike.lastChild;
    liked.hidden = !liked.hidden;
  });
}
