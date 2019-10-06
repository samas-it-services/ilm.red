/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook($owner: String!) {
  onUpdateBook(owner: $owner) {
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
export const onDeleteBook = `subscription OnDeleteBook($owner: String!) {
  onDeleteBook(owner: $owner) {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
