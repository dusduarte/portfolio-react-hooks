function customFetch(url: string): Promise<any> {
  return fetch(url)
    .then((resp: any) => {
      if (resp.status === 200) {
        return resp.json();
      }
      return Promise.reject('Erro de serviço');
    });
}

export default customFetch;
