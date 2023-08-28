import { AuthExamples } from "./swagger.authexamp";

export const AuthApiResposnes = {
    post : {
        success : {
            status: 201, description: 'Logins the user and returns a jwt token after verifying the user',
            content: {
              'application/json': {
                examples: {
                  succes : AuthExamples.loginsucces     
                }
              }
            }
          }
    }
}