import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { Post } from '../Post';
import { relayProp, fragmentValue } from './env';


const Project = () => {
  const examplePost = {
    title: 'Modern JavaScript',
    author: {
      username: 'hanpama',
    },
    created: new Date().toISOString(),
    content: 'Use the lastest features of JavaScript, powered by Babel, require any npm package, and forget about CocoaScript',
    replies: {
      totalCount: 12
    }
  };
  return (
    <Artboard
      name="Post"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (96 + 8) * 4,
      }}
    >
      <Post relay={relayProp} post={fragmentValue(examplePost)} />
    </Artboard>
  )
};


export default () => {
  render(<Project />, context.document.currentPage());
};
