const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] // Further nesting possible
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
    // Additional comment objects...
  ];
  
  function generateCommentHTML(comment, nestingLevel) {
      const indent = nestingLevel * 20;
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.style.marginLeft = `${indent}px`;
  
      const textNode = document.createTextNode(comment.text);
      commentDiv.appendChild(textNode);
  
      if (comment.replies.length > 0) {
          const repliesContainer = document.createElement('div');
          repliesContainer.classList.add('replies');
          comment.replies.forEach(reply => {
              const replyDiv = generateCommentHTML(reply, nestingLevel + 1);
              repliesContainer.appendChild(replyDiv);
          });
          commentDiv.appendChild(repliesContainer);
      }
  
      return commentDiv;
  }
  
  function displayComments(comments) {
      const commentsContainer = document.getElementById('commentsContainer');
      commentsContainer.innerHTML = '';
      comments.forEach(comment => {
          const commentDiv = generateCommentHTML(comment, 0);
          commentsContainer.appendChild(commentDiv);
      });
  }
  
  displayComments(comments);
  