import Category from "./Category";

export default class Transaction {
    id: string;
    type: 'income' | 'outcome';
    title: string;
    amount: string;
    category: Category;
    date: string;
   
    // Normal signature with defaults
    constructor(id: string,
                type: 'income' | 'outcome',
                title: string,
                amount: string,
                category: Category,
                date: string) {
      this.id = id;
      this.type = type;
      this.title = title;
      this.amount = amount;
      this.category = category,
      this.date = date
    }
}