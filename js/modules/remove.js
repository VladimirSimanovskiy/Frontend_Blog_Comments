export function remove() {
  comments_container.onclick = function(event) {
    if (event.target.className != 'garbage') return;
  
    let post = event.target.closest('.comments');
    post.remove();
  };
}