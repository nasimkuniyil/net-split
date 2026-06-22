import { create } from "zustand";

import type { Expense, ExpenseBook, Friend } from "../types";
import { persist } from "zustand/middleware";

export interface CreateBookData {
  name: string;
  description?: string;
}

interface CreateExpenseData {
  title: string;
  amount: number;
  paidBy: string;
  participants: string[];
}

interface ExpenseStore {
  books: ExpenseBook[];

  // BOOKS
  addBook: (data: CreateBookData) => void;
  updateBook: (bookId: string, data: Partial<CreateBookData>) => void;
  deleteBook: (bookId: string) => void;

  // FRIENDS
  addFriend: (bookId: string, friendName: string) => void;
  updateFriend: (bookId: string, friendId: string, name: string) => void;
  deleteFriend: (bookId: string, friendId: string) => void;

  // EXPENSES
  addExpense: (bookId: string, data: CreateExpenseData) => void;
  updateExpense: (
    bookId: string,
    expenseId: string,
    data: Partial<CreateExpenseData>,
  ) => void;
  deleteExpense: (bookId: string, expenseId: string) => void;
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      books: [],

      // BOOKS
      addBook: ({ name, description }) =>
        set((state) => ({
          books: [
            ...state.books,
            {
              id: crypto.randomUUID(),
              name,
              description,
              createdAt: new Date().toISOString(),
              friends: [],
              expenses: [],
            },
          ],
        })),

      updateBook: (bookId, data) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === bookId
              ? {
                  ...book,
                  ...data,
                }
              : book,
          ),
        })),

      deleteBook: (bookId) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== bookId),
        })),

      // FRIENDS
      addFriend: (bookId, friendName) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            const newFriend: Friend = {
              id: crypto.randomUUID(),
              name: friendName,
            };

            return {
              ...book,
              friends: [...book.friends, newFriend],
            };
          }),
        })),

      updateFriend: (bookId, friendId, name) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            return {
              ...book,
              friends: book.friends.map((friend) =>
                friend.id === friendId
                  ? {
                      ...friend,
                      name,
                    }
                  : friend,
              ),
            };
          }),
        })),

      deleteFriend: (bookId, friendId) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            return {
              ...book,

              friends: book.friends.filter((friend) => friend.id !== friendId),

              expenses: book.expenses.filter(
                (expense) => expense.paidBy !== friendId,
              ),
            };
          }),
        })),

      // EXPENSES
      addExpense: (bookId, data) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            const expense: Expense = {
              id: crypto.randomUUID(),
              title: data.title,
              amount: data.amount,
              paidBy: data.paidBy,
              participants: data.participants,
              createdAt: new Date().toISOString(),
            };

            return {
              ...book,
              expenses: [...book.expenses, expense],
            };
          }),
        })),

      updateExpense: (bookId, expenseId, data) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            return {
              ...book,
              expenses: book.expenses.map((expense) =>
                expense.id === expenseId
                  ? {
                      ...expense,
                      ...data,
                    }
                  : expense,
              ),
            };
          }),
        })),

      deleteExpense: (bookId, expenseId) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id !== bookId) return book;

            return {
              ...book,
              expenses: book.expenses.filter(
                (expense) => expense.id !== expenseId,
              ),
            };
          }),
        })),
    }),
    {
      name: "expense-splitter-storage",
    },
  ),
);
