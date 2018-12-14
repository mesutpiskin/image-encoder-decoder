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
