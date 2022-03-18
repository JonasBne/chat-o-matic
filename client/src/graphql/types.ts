/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddMessagePayload = {
  __typename?: 'AddMessagePayload';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  photoUrl: Scalars['String'];
  sender: Scalars['String'];
  userId: Scalars['String'];
};

export type CreatedMessage = {
  __typename?: 'CreatedMessage';
  content: Scalars['String'];
  photoUrl: Scalars['String'];
  sender: Scalars['String'];
  userId: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  photoUrl: Scalars['String'];
  sender: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageInput = {
  content: Scalars['String'];
  photoUrl: Scalars['String'];
  sender: Scalars['String'];
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: AddMessagePayload;
};

export type MutationAddMessageArgs = {
  input: MessageInput;
};

export type Query = {
  __typename?: 'Query';
  messages?: Maybe<Array<Message>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageCreated: CreatedMessage;
};

export type GetMessagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessagesQuery = {
  __typename?: 'Query';
  messages?: Array<{
    __typename?: 'Message';
    content: string;
    id: string;
    sender: string;
    createdAt: string;
    userId: string;
    photoUrl: string;
  }> | null;
};

export type MessagesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessagesSubscription = {
  __typename?: 'Subscription';
  messageCreated: { __typename?: 'CreatedMessage'; content: string; photoUrl: string; sender: string; userId: string };
};

export type AddMessageMutationVariables = Exact<{
  input: MessageInput;
}>;

export type AddMessageMutation = {
  __typename?: 'Mutation';
  addMessage: {
    __typename?: 'AddMessagePayload';
    sender: string;
    content: string;
    userId: string;
    photoUrl: string;
    createdAt: string;
  };
};

export const GetMessagesDocument = gql`
  query getMessages {
    messages {
      content
      id
      sender
      createdAt
      userId
      photoUrl
    }
  }
`;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const MessagesDocument = gql`
  subscription messages {
    messageCreated {
      content
      photoUrl
      sender
      userId
    }
  }
`;
export type MessagesSubscriptionResult = Apollo.SubscriptionResult<MessagesSubscription>;
export const AddMessageDocument = gql`
  mutation addMessage($input: MessageInput!) {
    addMessage(input: $input) {
      sender
      content
      userId
      photoUrl
      createdAt
    }
  }
`;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
