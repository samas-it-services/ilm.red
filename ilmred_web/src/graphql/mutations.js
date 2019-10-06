/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    name
    filename
    downloadurl
    sourceurl
    numpages
    title
    lang
    maintopic
    publisher
    dateadded
    updatedAt
    posts {
      items {
        id
        title
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    id
    name
    filename
    downloadurl
    sourceurl
    numpages
    title
    lang
    maintopic
    publisher
    dateadded
    updatedAt
    posts {
      items {
        id
        title
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    id
    name
    filename
    downloadurl
    sourceurl
    numpages
    title
    lang
    maintopic
    publisher
    dateadded
    updatedAt
    posts {
      items {
        id
        title
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    updatedAt
    Book {
      id
      name
      filename
      downloadurl
      sourceurl
      numpages
      title
      lang
      maintopic
      publisher
      dateadded
      updatedAt
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    updatedAt
    Book {
      id
      name
      filename
      downloadurl
      sourceurl
      numpages
      title
      lang
      maintopic
      publisher
      dateadded
      updatedAt
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    updatedAt
    Book {
      id
      name
      filename
      downloadurl
      sourceurl
      numpages
      title
      lang
      maintopic
      publisher
      dateadded
      updatedAt
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        updatedAt
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    updatedAt
    post {
      id
      title
      updatedAt
      Book {
        id
        name
        filename
        downloadurl
        sourceurl
        numpages
        title
        lang
        maintopic
        publisher
        dateadded
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    updatedAt
    post {
      id
      title
      updatedAt
      Book {
        id
        name
        filename
        downloadurl
        sourceurl
        numpages
        title
        lang
        maintopic
        publisher
        dateadded
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    updatedAt
    post {
      id
      title
      updatedAt
      Book {
        id
        name
        filename
        downloadurl
        sourceurl
        numpages
        title
        lang
        maintopic
        publisher
        dateadded
        updatedAt
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
