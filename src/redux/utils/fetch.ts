// tslint:disable: no-any no-if-statement typedef no-expression-statement
export default async (url: RequestInfo, method: string, body: any) => {
  const init: RequestInit = {
    method,
    headers: requestHeader(),
    body: method !== 'GET' ? JSON.stringify(body) : null,
  };

  const res = await fetch(url, init);
  return await parseStatus(res.status, res.json());
};

function parseStatus(status: number, res: Promise<any>) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => resolve(response));
    } else {
      res.then(response => reject({ status, response }));
    }
  });
}

function requestHeader(): HeadersInit_ {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}
