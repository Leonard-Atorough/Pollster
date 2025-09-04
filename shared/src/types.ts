export type PollCard = {
  id: string;
  title: string;
  description?: string;
  votes: number;
};

export type Poll = {
  pollCard: PollCard;
  author: string;
  createdAt: string;
  updatedAt: string;
};
