describe('request', ()=>{
  it.only('GET request', ()=>{
  cy
    .request('https://jsonplaceholder.typicode.com/posts')

  cy
    .request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1', 
          }).then(posts =>{

      expect(posts.status).to.eq(200)
    })
  })
})