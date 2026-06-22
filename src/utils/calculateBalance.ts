import type { ExpenseBook } from "../types";

interface Balance {
  friendId: string;
  paid: number;
  share: number;
  balance: number;
}

export function calculateBalances(book: ExpenseBook) {
  const balances: Record<string, Balance> = {};

  book.friends.forEach((friend) => {
    balances[friend.id] = {
      friendId: friend.id,
      paid: 0,
      share: 0,
      balance: 0,
    };
  });

  book.expenses.forEach((expense) => {
    balances[expense.paidBy].paid += expense.amount;

    const share = expense.amount / expense.participants.length;

    expense.participants.forEach((participantId) => {
      balances[participantId].share += share;
    });
  });

  Object.values(balances).forEach((person) => {
    person.balance = person.paid - person.share;
  });

  return Object.values(balances);
}
