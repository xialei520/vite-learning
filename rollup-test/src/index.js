import _ from "lodash";

export let clone = (obj) => {
  console.log("clone", obj);
  return _.clone(obj);
};
