/* @flow */
import _url from 'url';

let todos = [
  { id: 1, text: 'learn about JSON', status: 'complete' },
  { id: 2, text: 'learn about redux', status: 'complete' },
  { id: 3, text: 'learn about sagas', status: 'incomplete' },
];

export const fetch = (url:string):Promise<any> => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching todos at url "${url}"...`);
    if (url === '/todos?status=complete') {
      setTimeout(() => {
        console.log("Done.");
        resolve(todos.filter(t => t.status === 'complete'));
      }, 1000);
    } else {
      setTimeout(() => {
        console.log("Done.");
        resolve(todos);
      }, 1000);
    }
  });
}

export const update = (url:string) => {
  const id = Number((_url.parse(url).query || '').replace('id=',''));
  todos = todos.reduce((acc, item) => {
    if(item.id === id) {
      item.status = item.status === 'complete' ? 'incomplete' : 'complete';
    }
    return acc.concat(item);
  }, []);
  return new Promise((resolve, reject) => {
    console.log(`Toggling todo completion at url "${url}"...`);
    setTimeout(() => {
      console.log("Done.");
      resolve(todos.find(t => t.id === id));
    }, 1000);
  });
}
