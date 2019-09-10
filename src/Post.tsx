import React from 'react';
import { createFragmentContainer, graphql, RelayProp } from 'react-relay';
import { View, Text, StyleSheet } from 'react-primitives';
import { Post_post } from './__relay__/Post_post.graphql';

import moment from 'moment';


export type PostProps = {
  relay: RelayProp,
  post: Post_post,
}

export const Post = (props: PostProps) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.title}>{props.post.title}</Text>
      <Text style={styles.authorName}>{props.post.author.username}</Text>
    </View>
    <Text>{props.post.content}</Text>
    <View style={styles.footer}>
      <Text style={styles.replies}>replies {props.post.replies.totalCount}</Text>
      <Text>{moment(props.post.created).fromNow()}</Text>
    </View>
  </View>
);

export default createFragmentContainer(Post, {
  post: graphql`
    fragment Post_post on Post {
      title
      author {
        username
      }
      content
      created
      replies {
        totalCount
      }
    }
  `,
});

const styles = StyleSheet.create({
  root: {
    margin: 8,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 16,
  },
  header: {
    'justifyContent': 'space-between',
    flexDirection: 'row',
  },
  authorName: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  footer: {
    'justifyContent': 'space-between',
    flexDirection: 'row',
    marginTop: 5,
  },
  replies: {

  },
});
