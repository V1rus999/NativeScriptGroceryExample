//Uses a library added to the node_modules with npm install email-validator --save

var validator = require("email-validator");

export class User {
    email : string;
    password : string;
    server : string;
    
    isValid() {
        return validator.validate(this.email);
    }
}