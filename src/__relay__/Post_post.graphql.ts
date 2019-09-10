/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _Post_post$ref: unique symbol;
export type Post_post$ref = typeof _Post_post$ref;
export type Post_post = {
    readonly title: string;
    readonly author: {
        readonly username: string;
    };
    readonly content: string;
    readonly created: string;
    readonly replies: {
        readonly totalCount: number;
    };
    readonly " $refType": Post_post$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Post_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "author",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "username",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "created",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "replies",
      "storageKey": null,
      "args": null,
      "concreteType": "ReplyConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalCount",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'e8cce31f5f2f6d3d263406e5992384e8';
export default node;
