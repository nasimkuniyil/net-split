import type { Expense } from "./expense";
import type { Friend } from "./friend";

export interface ExpenseBook {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  friends: Friend[];
  expenses: Expense[];
}
