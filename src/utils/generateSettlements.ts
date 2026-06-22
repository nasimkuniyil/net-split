interface Balance {
  friendId: string;
  balance: number;
}

interface Settlement {
  from: string;
  to: string;
  amount: number;
}

export function generateSettlements(balances: Balance[]): Settlement[] {
  const creditors = balances
    .filter((b) => b.balance > 0)
    .map((b) => ({
      ...b,
      balance: Number(b.balance.toFixed(2)),
    }));

  const debtors = balances
    .filter((b) => b.balance < 0)
    .map((b) => ({
      ...b,
      balance: Number(Math.abs(b.balance).toFixed(2)),
    }));

  const settlements: Settlement[] = [];

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const amount = Math.min(debtor.balance, creditor.balance);

    settlements.push({
      from: debtor.friendId,
      to: creditor.friendId,
      amount,
    });

    debtor.balance -= amount;
    creditor.balance -= amount;

    if (debtor.balance === 0) i++;

    if (creditor.balance === 0) j++;
  }

  return settlements;
}
