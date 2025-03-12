export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  isLiked: boolean;
  likeCount: number;
  categoryName: string;
}
