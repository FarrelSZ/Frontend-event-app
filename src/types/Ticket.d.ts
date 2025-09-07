interface ITicket {
  _id?: string;
  name?: string;
  price: number;
  quantity?: number | string;
  description?: string;
  events?: string;
}

export type { ITicket };
