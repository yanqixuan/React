'use strict';

enum PostStatus {
  Unpublished,
  Published,
  Draft
}
interface Post {
  title: string;
  status: PostStatus; //是PostStatus
  content: string;
}

let post: Post = {
  title: '相信猪回复',
  status: PostStatus.Unpublished,
  content: '------'
}