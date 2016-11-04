export const fetch = (url) => {
  return new Promise((resolve, reject) => {
    if (url === '/todos?status=complete') {
      setTimeout(() => {
        resolve([
          { id: 1, text: 'learn about JSON', status: 'complete' },
          { id: 2, text: 'learn about redux', status: 'complete' },
        ]);
      }, 1000);
    } else {
      setTimeout(() => {
        resolve([
          { id: 1, text: 'learn about JSON', status: 'complete' },
          { id: 2, text: 'learn about redux', status: 'complete' },
          { id: 3, text: 'learn about sagas', status: 'incomplete' },
        ]);
      }, 1000);
    }
  });
}
