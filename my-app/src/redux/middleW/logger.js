export const logger = (state) => {
  console.log("state =>", state);
  return (next) => {
    return (action) => {
      console.log("memanggil ", action.type);
      if (action.type === "change") {
        return next(action);
      } else {
        return;
      }
    };
  };
};

export const tes = (state) => {
    console.log("state =>", state);
    return (next) => {
      return (action) => {
        console.log("memanggil ", action.type);
        if (action.color !== "purple") {
            action.color = 'purple'
          return next(action);
        } else {
          return;
        }
      };
    };
  };