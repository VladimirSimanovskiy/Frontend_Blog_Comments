import { createComment } from "./createComment.js";

export function getFormDate() {
  const submit = document.getElementById('submit');
  submit.onclick = function() {
    const userName = document.getElementById('user_name');
    const userMessage = document.getElementById('user_message');
    const messageDate = document.getElementById('message_date');


    // clear invalid if focus
    userName.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        if (userName.nextSibling.className = 'invalid_value') {
          userName.nextSibling.remove();
        }
      }
    }

    userMessage.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        if (userMessage.nextSibling.className = 'invalid_value') {
          userMessage.nextSibling.remove();
        }
      }
    }

    messageDate.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        if (messageDate.nextSibling.className = 'invalid_value') {
          messageDate.nextSibling.remove();
        }
      }
    }

    // check valid
    if (!invalidMessage(userName, userMessage)) {
      return false;
    }
    const name = userName.value;
    const text = userMessage.value;
    const date = getDate();
    if (date == false) return false;

    // post comment
    let newComment = document.getElementById('comments_container');
    newComment.append(createComment(name, text, date));

    userName.value = '';
    userMessage.value = '';
    messageDate.value = '';
    userMessage.style.height = "30px";

    return false;
  }
}

function getDate() {
  const messageDate = document.getElementById('message_date');
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() -1);
  let nowHours = today.getHours();
  if (nowHours < 10) nowHours = '0' + String(nowHours);
  let nowMinutes = today.getMinutes();
  if (nowMinutes < 10) nowMinutes = '0' + String(nowMinutes);

  if (!messageDate.value) {
    const date = `Сегодня, ${nowHours}:${nowMinutes}`;
    return date;
  }

  if (today < Date.parse(messageDate.value)) {
    let invalidDate = document.getElementById('message_date');
    messageDate.classList.add('invalid');

    let invalidValue = document.createElement('div');
    invalidValue.textContent = 'Дата не может быть больше текущей';
    invalidValue.className = 'invalid_value';

    if (invalidDate.nextSibling.className != 'invalid_value') {
      invalidDate.after(invalidValue);
    }
    return false;
  }

  let userDate = new Date(Date.parse(messageDate.value));
  let date;
  switch (`${userDate.getDate()}, ${userDate.getMonth()}, ${userDate.getFullYear()}`) {
    case `${today.getDate()}, ${today.getMonth()}, ${today.getFullYear()}`:
      date = `Сегодня, ${nowHours}:${nowMinutes}`;
      break;
    case `${yesterday.getDate()}, ${yesterday.getMonth()}, ${yesterday.getFullYear()}`:
      date = `Вчера, ${nowHours}:${nowMinutes}`;
      break;
    default:
      let day = (userDate.getDate() < 10) ?
                "0" + String(userDate.getDate()) :
                String(userDate.getDate());
      let month = (userDate.getMonth() < 10) ?
                "0" + String(userDate.getMonth() + 1) :
                String(userDate.getMonth());
      
      date = `${day}.${month}.${userDate.getFullYear()}, ${nowHours}:${nowMinutes}`
  }
  return date;
}

function invalidMessage(userName, userMessage) {
  let invalidValue = document.createElement('div');
  invalidValue.className = 'invalid_value';


  if (!userName.value) {
    userName.classList.add('invalid');
    let invalidName = document.getElementById('user_name');
    invalidValue.textContent = 'введите имя';
    if (invalidName.nextSibling.className != 'invalid_value') {
      invalidName.after(invalidValue);
    }
    return false
  }
  if (!userMessage.value) {
    userMessage.classList.add('invalid');
    let invalidMessage = document.getElementById('user_message');
    invalidValue.textContent = 'введите текст комментария';
    if (invalidMessage.nextSibling.className != 'invalid_value') {
      invalidMessage.after(invalidValue);
    }
    return false
  }
  return true;
}