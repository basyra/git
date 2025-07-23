describe('Automation API Reqres.in', () => {

  // GET List Users
  it('TC-All Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/user/2',
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
    })
  })

  // GET Single User
  it('TC-GET1', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/user/2',
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    //   failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
    //   expect(response.body.data).to.have.property('id', 2)
    })
  })

//   GET Single User Not Found
  it('TC-GET2', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'reqres-free-v1',
    },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

//   // POST Create User
  it('TC-POST1', () => {
    cy.request({
        method: 'POST', 
        url: 'https://reqres.in/api/users', 
        headers: {
        'x-api-key': 'reqres-free-v1',
      },
      body: {
        name: 'Iqbal Ananta Basyra',
        job: 'QA Tester'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('name', 'Iqbal Ananta Basyra')
      expect(response.body).to.have.property('job', 'QA Tester')
    })
  })

//   // PUT Update User
  it('TC-PUT', () => {
   cy.request({
        method: 'PUT', 
        url: 'https://reqres.in/api/users/10', 
        headers: {
        'x-api-key': 'reqres-free-v1',
      },
      body: {
        name: 'Iqbal Ananta Basyra',
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'Iqbal Ananta Basyra')
      expect(response.body).to.have.property('job', 'QA Engineer')
    })
  })

//   // DELETE User
  it('DELETE User', () => {
    cy.request({
        method: 'DELETE', 
        url: 'https://reqres.in/api/users/10', 
        headers: {
        'x-api-key': 'reqres-free-v1',
      },
      }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })

})
