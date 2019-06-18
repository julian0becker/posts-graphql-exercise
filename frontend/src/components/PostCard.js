import React from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  const likePost = () => {
    console.log("like");
  };
  const commentOnPost = () => {
    console.log("post");
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <Card.Header>{post.username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${post.id}`}>
          {moment(post.createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{post.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="black">
            <Icon name="heart" color="red" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {post.likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="black">
            <Icon name="comments" color="red" />
            Comments
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {post.commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
