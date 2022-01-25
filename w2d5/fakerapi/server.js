const faker = require('@faker-js/faker')
const express = require('express') //this is like saying import
const app = express()
const port = 8001;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()]
    }
}

//route
app.get('/api/users/new', (req,res) => {
    let newUser = new User();
    res.json({result: newUser})
})

app.get('/api/companies/new', (req,res) => {
    let newCompany = new Company();
    res.json({result: newCompany})
})

app.get('/api/user/company', (req,res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({user: newUser, company: newCompany})
})



console.log(faker.name.firstName(), faker.name.lastName(), faker.phone.phoneNumber(), faker.datatype.uuid(), faker.company.companyName(),faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country() )

app.listen( port, () => console.log('listening on port: ${port}') )