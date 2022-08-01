const datas = [
  {
    id: 1,
    data: "first",
  },
  {
    id: 2,
    data: "second",
  },
  {
    id: 3,
    data: "third",
  },
];

export const requestData = (id: number) => {
  const time = 1000 + Math.floor(Math.random() * 2000);

  return new Promise((resolve) => {
    setTimeout(() => resolve(datas.find((data) => data.id === id)), time);
  });
};

function fetchData(id: number) {
  let data: any = null;
  const suspender = requestData(id).then((d) => {
    data = d;
  });
  return {
    read() {
      if (data === null) {
        throw suspender;
      } else {
        return data;
      }
    },
  };
}

export const fetchNumberData = (dataId: number) => {
  return {
    data: fetchData(dataId),
  };
};
