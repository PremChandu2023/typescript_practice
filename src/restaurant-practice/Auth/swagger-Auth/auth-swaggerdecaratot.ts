import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { AuthApiResposnes } from "./swagger.apiresposne";


export function AuthCustomdecarators(method:string,route:string)
{
    switch(method)
    {
        case 'Get':
            return applyDecorators(ApiOkResponse(AuthApiResposnes.post.success))
    }
}