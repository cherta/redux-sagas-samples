/* @flow */
type Normalized = { [id: string]: any };
export default function normalize(arrayPayload:Array<any>, idKey:string = 'id'):Normalized {
  return arrayPayload.reduce((acc, obj) => {
    const id:string = obj[idKey];
    acc[id] = obj;
    return acc;
  }, {});
};
