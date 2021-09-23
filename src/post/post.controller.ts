import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class PostController {
    @Get('posts')
    getPosts(@Query() query) {
        return query.non === undefined;
    }

    @Get('/posts/:id')
    getPostById(@Param() param) {
      return param.id;
    }
}
