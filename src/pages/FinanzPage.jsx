import { useState } from "react";
import initialAccounts from "../data/finance/accounts";
import categories from "../data/finance/categories";

const formatEUR = (value) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

function Logo({ type }) {
  if (type === "ing") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">ING</span>
        </div>
        <span className="font-semibold text-gray-800">ING Bank</span>
      </div>
    );
  }

  if (type === "hvb") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">HVB</span>
        </div>
        <span className="font-semibold text-gray-800">HypoVereinsbank</span>
      </div>
    );
  }

  // cash
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
        <span className="text-2xl">💵</span>
      </div>
      <span className="font-semibold text-gray-800">Bargeld</span>
    </div>
  );
}

function TransactionRow({ tx }) {
  const isIncome = tx.type === "income";
  const amountClass = isIncome ? "text-green-600" : "text-red-600";
  const bgClass = isIncome
    ? "bg-green-50 border-green-200"
    : "bg-red-50 border-red-200";

  return (
    <div className={`p-3 rounded-lg border ${bgClass} mb-2`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="font-medium text-gray-900">{tx.description}</div>
          <div className="text-sm text-gray-500">
            {tx.category} • {tx.date}
          </div>
        </div>
        <div className={`font-bold text-lg ${amountClass}`}>
          {isIncome ? "+" : "-"}
          {formatEUR(tx.amount)}
        </div>
      </div>
    </div>
  );
}

function AccountCard({ account, onTransaction }) {
  const recentTransactions = account.history.slice(0, 3);
  const monthlyChange = account.history
    .filter((tx) => {
      const txDate = new Date(tx.date.split(".").reverse().join("-"));
      const now = new Date();
      return (
        txDate.getMonth() === now.getMonth() &&
        txDate.getFullYear() === now.getFullYear()
      );
    })
    .reduce(
      (sum, tx) => sum + (tx.type === "income" ? tx.amount : -tx.amount),
      0,
    );

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <Logo type={account.logoType} />
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            monthlyChange >= 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {monthlyChange >= 0 ? "+" : ""}
          {formatEUR(monthlyChange)}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">{account.title}</div>
        <div className="text-3xl font-bold text-gray-900">
          {formatEUR(account.balance)}
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => onTransaction(account.id, "income")}
          className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Einzahlen
        </button>
        <button
          onClick={() => onTransaction(account.id, "expense")}
          className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Ausgeben
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">Letzte Buchungen</h4>
          <span className="text-sm text-gray-500">
            {recentTransactions.length} von {account.history.length}
          </span>
        </div>
        <div className="space-y-2">
          {recentTransactions.map((tx) => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BudgetOverview({ accounts }) {
  const TotalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const monthlyIncome = accounts.reduce(
    (sum, acc) =>
      sum +
      acc.history
        .filter((tx) => {
          const txDate = new Date(tx.date.split(".").reverse().join("-"));
          const now = new Date();
          return (
            txDate.getMonth() === now.getMonth() &&
            txDate.getFullYear() === now.getFullYear() &&
            tx.type === "income"
          );
        })
        .reduce((txSum, tx) => txSum + tx.amount, 0),
    0,
  );

  const monthlyExpenses = accounts.reduce(
    (sum, acc) =>
      sum +
      acc.history
        .filter((tx) => {
          const txDate = new Date(tx.date.split(".").reverse().join("-"));
          const now = new Date();
          return (
            txDate.getMonth() === now.getMonth() &&
            txDate.getFullYear() === now.getFullYear() &&
            tx.type === "expense"
          );
        })
        .reduce((txSum, tx) => txSum + tx.amount, 0),
    0,
  );

  const SavingsRate =
    monthlyIncome > 0
      ? ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">💰</span>
          <span className="text-sm text-gray-500">Gesamt</span>
        </div>
        <div className="text-xl font-bold text-gray-900">
          {formatEUR(TotalBalance)}
        </div>
        <div className="text-sm text-gray-500">Gesamtvermögen</div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">📈</span>
          <span className="text-sm text-gray-500">Einnahmen</span>
        </div>
        <div className="text-xl font-bold text-green-600">
          {formatEUR(monthlyIncome)}
        </div>
        <div className="text-sm text-gray-500">Dieser Monat</div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">📉</span>
          <span className="text-sm text-gray-500">Ausgaben</span>
        </div>
        <div className="text-xl font-bold text-red-600">
          {formatEUR(monthlyExpenses)}
        </div>
        <div className="text-sm text-gray-500">Dieser Monat</div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">🎯</span>
          <span className="text-sm text-gray-500">Sparerate</span>
        </div>
        <div
          className={`text-xl font-bold ${SavingsRate >= 20 ? "text-green-600" : SavingsRate >= 0 ? "text-yellow-600" : "text-red-600"}`}
        >
          {SavingsRate.toFixed(1)}%
        </div>
        <div className="text-sm text-gray-500">Sparquote</div>
      </div>
    </div>
  );
}

function FinanzPage() {
  const [accounts, setAccounts] = useState(initialAccounts);

  const addTransaction = (accountId, type, amount, category, description) => {
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id !== accountId) return acc;

        const now = new Date();
        const dateStr = now.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });

        const tx = {
          id: `${accountId}-${Date.now()}`,
          type,
          amount,
          category,
          description,
          date: dateStr,
        };

        const balanceChange = type === "income" ? amount : -amount;
        const nextBalance = Math.max(
          0,
          Number((acc.balance + balanceChange).toFixed(2)),
        );

        return {
          ...acc,
          balance: nextBalance,
          history: [tx, ...acc.history],
        };
      }),
    );
  };

  const handleTransaction = (accountId, type) => {
    const account = accounts.find((acc) => acc.id === accountId);
    if (!account) return;

    // Create a modal-like transaction form
    const amount = prompt(
      `${type === "income" ? "Einzahlung" : "Ausgabe"} Betrag (€):`,
      "100",
    );
    if (!amount) return;

    const numAmount = Number(String(amount).replace(",", "."));
    if (!Number.isFinite(numAmount) || numAmount <= 0) return;

    const category = prompt("Kategorie:", categories[0]);
    if (!category) return;

    const description = prompt("Beschreibung:", "");
    if (description === null) return;

    addTransaction(
      accountId,
      type,
      Number(numAmount.toFixed(2)),
      category,
      description || `${type === "income" ? "Einzahlung" : "Ausgabe"}`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Finanz Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Verwalte deine Finanzen einfach und übersichtlich
          </p>
        </div>

        <BudgetOverview accounts={accounts} />

        <div className="grid gap-6 lg:grid-cols-3">
          {accounts.map((acc) => (
            <AccountCard
              key={acc.id}
              account={acc}
              onTransaction={handleTransaction}
            />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            💡 Tipp: Klicke auf "Einzahlen" oder "Ausgeben" um neue
            Transaktionen hinzuzufügen
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinanzPage;
