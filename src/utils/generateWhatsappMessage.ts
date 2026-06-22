import type { ExpenseBook } from "../types";
import type { Settlement } from "./generateSettlements";

export function generateWhatsappMessage(
  book: ExpenseBook,
  settlements: Settlement[],
) {
  const totalExpense = book.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const participants = book.friends
    .map((friend) => `• ${friend.name}`)
    .join("\n");

  const payments = book.expenses
    .map((expense) => {
      const payer = book.friends.find((friend) => friend.id === expense.paidBy);

      return `✅ ${payer?.name} paid: ₹${expense.amount} for ${expense.title}`;
    })
    .join("\n");

  const settlementText =
    settlements.length > 0
      ? settlements
          .map((settlement) => {
            const from = book.friends.find(
              (friend) => friend.id === settlement.from,
            );

            const to = book.friends.find(
              (friend) => friend.id === settlement.to,
            );

            return `${from?.name} ➜ ${to?.name} ₹${settlement.amount}`;
          })
          .join("\n")
      : "🎉 All settled up";

  return `📒 ${book.name}

💰 Total Expense: ₹${totalExpense}

👥 Participants:
${participants}

📊 Settlement

${payments}

💵 Final Settlement

${settlementText}

Generated using Net Split`;
}
