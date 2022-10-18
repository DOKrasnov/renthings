class RequestService {
  /*login(form) {
    console.log('get user');
    var data = new FormData(form);
    return this.post('/renthings/php/login.php', data)
  }*/
  
  getUser() {
    return this.get('/renthings/php/user.php');
  }
  
  get(...args) {
    return request('GET', ...args)
  }
  
  post(...args) {
    return request('POST', ...args)
  }
  
  request(method, url, data) {
    return fetch(url, {
      method: method,
      body: data,
    }).then(response=>{
      return response.json();
    });
  }
}

export default new RequestService();