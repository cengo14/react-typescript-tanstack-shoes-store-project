export type Shoe = {
  id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: 10;
  size: string;
  color: string;
  gender: string;
  price: number;
};

export type FilterProps<T> = {
  selected: T;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
};

export type DetailProps = {
  data: Shoe;
};
