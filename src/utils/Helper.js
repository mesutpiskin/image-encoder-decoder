import { notification } from "antd";

export function isNull(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

export function longToShort(text, length) {
  if (text.length > length) return text.substring(0, length) + "...";
  else return text;
}

export function showMessage(message, type, description) {
  if (isNull(message)) return;
  message = message.replace("undefined", ""); // remove at null msg
  notification.open({
    placement: "bottomLeft",
    message: message,
    description: description,
    type: type
  });
}
export function isValidURL(str) {
  var pattern = new RegExp('^((https?:)?\\/\\/)?'+ // protocol
  '(?:\\S+(?::\\S*)?@)?' + // authentication
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locater
if (!pattern.test(str)) {
  return false;
} else {
  return true;
}
}