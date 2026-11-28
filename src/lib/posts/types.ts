import type { Component } from "svelte";

export interface PostMetadata {
  title: string;
  date: string;
  categories: string[];
  updated?: string;
  excerpt?: string;
  seoDescription?: string;
  coverImage?: string;
  coverWidth?: number;
  coverHeight?: number;
}

export interface Post extends PostMetadata {
  slug: string;
}

export interface PostModule {
  default: Component;
  metadata: PostMetadata;
}
