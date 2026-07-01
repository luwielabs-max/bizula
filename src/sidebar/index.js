import common from "./common";
import retail from "./retail";
import service from "./service";

export function getSidebar(type) {
  return [
    ...common,
    ...(type === "retail"
      ? retail
      : service),
  ];
}