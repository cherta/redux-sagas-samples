import url from 'url';

let todos = [
  { id: 1, text: 'learn about JSON', status: 'complete' },
  { id: 2, text: 'learn about redux', status: 'complete' },
  { id: 3, text: 'learn about sagas', status: 'incomplete' },
];

export const fetch = (url) => {
  return new Promise((resolve, reject) => {
    if (url === '/todos?status=complete') {
      setTimeout(() => {
        resolve(todos.filter(t => t.status === 'complete'));
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(todos);
      }, 1000);
    }
  });
}

export const update = (requestedUrl) => {
  const id = Number(url.parse(requestedUrl).query.replace('id=',''));
  todos = todos.reduce((acc, item) => {
    if(item.id === id) {
      item.status = item.status === 'complete' ? 'incomplete' : 'complete';
    }
    return acc.concat(item);
  }, []);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos.find(t => t.id === id));
    }, 1000);
  });
}
