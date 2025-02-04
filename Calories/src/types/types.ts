export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  category: number;
  activityName: string;
  calories: number;
  id: string
};
