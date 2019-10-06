/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
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
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      updatedAt
      post {
        id
        title
        updatedAt
        owner
      }
      owner
    }
    nextToken
  }
}
`;
