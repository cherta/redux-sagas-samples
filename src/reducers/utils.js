export function normalize(arrayPayload, idKey = 'id') {
  return arrayPayload.reduce((acc, obj) => {
    const id = obj[idKey];
    acc[id] = obj;
    return acc;
  }, {});
};
