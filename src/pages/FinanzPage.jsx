import { useMemo, useState } from "react";

const formatEUR = (value) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

const initialAccounts = [
  {
    id: "cash",
    title: "Bargeld",
    logoType: "cash",
    balance: 1230.5,
    accent: "bg-amber-50",
    history: [
      { id: "c1", type: "in", amount: 100, date: "23. April 2024" },
      { id: "c2", type: "out", amount: 50, date: "20. April 2024" },
      { id: "c3", type: "in", amount: 200, date: "15. April 2024" },
    ],
  },
  {
    id: "ing",
    title: "ING-Konto",
    logoType: "ing",
    balance: 8950.75,
    accent: "bg-sky-50",
    history: [
      { id: "i1", type: "in", amount: 500, date: "24. April 2024" },
      { id: "i2", type: "out", amount: 100, date: "22. April 2024" },
      { id: "i3", type: "in", amount: 1000, date: "18. April 2024" },
    ],
  },
  {
    id: "hvb",
    title: "HVB-Konto",
    logoType: "hvb",
    balance: 5420.25,
    accent: "bg-slate-50",
    history: [
      { id: "h1", type: "in", amount: 300, date: "22. April 2024" },
      { id: "h2", type: "out", amount: 400, date: "21. April 2024" },
      { id: "h3", type: "in", amount: 200, date: "16. April 2024" },
    ],
  },
];

function Logo({ type }) {
  if (type === "ing") {
    return (
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold tracking-wide text-[#1d3b73]">
          ING
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          🦁
        </span>
      </div>
    );
  }

  if (type === "hvb") {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600">
          {/* simple "swirl" placeholder */}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 12a8 8 0 1 1-8-8c2.8 0 5.2 1.4 6.6 3.6" />
            <path d="M20 6v6h-6" />
          </svg>
        </span>
        <span className="text-3xl font-extrabold tracking-wide text-slate-800">
          HVB
        </span>
      </div>
    );
  }

  // cash
  return (
    <div className="inline-flex items-center gap-3">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
        💶
      </span>
    </div>
  );
}

function TxRow({ tx }) {
  const sign = tx.type === "in" ? "+" : "−";
  const amountClass = tx.type === "in" ? "text-emerald-600" : "text-red-600";

  return (
    <div className="flex items-center justify-between py-2">
      <div className={`font-semibold ${amountClass}`}>
        {sign} {formatEUR(tx.amount)}
      </div>
      <div className="text-sm text-slate-500">{tx.date}</div>
    </div>
  );
}

function AccountCard({ account, onDeposit, onWithdraw }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="p-6">
        <div className="flex items-center justify-center">
          <Logo type={account.logoType} />
        </div>

        <div className="mt-4 text-center">
          <div className="text-lg font-semibold text-slate-600">
            {account.title}
          </div>
          <div className="mt-2 text-4xl font-extrabold tracking-tight text-slate-800">
            {formatEUR(account.balance)}
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => onDeposit(account.id)}
            className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-[0.99]"
          >
            + Hinzufügen
          </button>
          <button
            onClick={() => onWithdraw(account.id)}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 active:scale-[0.99]"
          >
            − Abziehen
          </button>
        </div>
      </div>

      <div className={`border-t border-slate-200 ${account.accent}`}>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="font-semibold text-slate-700">Buchungen</div>
          {/* Optional: hier könnte ein Zeitraum stehen */}
          <div className="text-sm text-slate-500"> </div>
        </div>

        <div className="px-6 pb-5">
          <div className="divide-y divide-slate-200">
            {account.history.map((tx) => (
              <TxRow key={tx.id} tx={tx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanzPage() {
  const [accounts, setAccounts] = useState(initialAccounts);

  const total = useMemo(
    () => accounts.reduce((sum, a) => sum + a.balance, 0),
    [accounts],
  );

  const addTx = (accountId, txType, amount) => {
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
          type: txType,
          amount,
          date: dateStr,
        };

        const nextBalance =
          txType === "in" ? acc.balance + amount : acc.balance - amount;

        return {
          ...acc,
          balance: Math.max(0, Number(nextBalance.toFixed(2))),
          history: [tx, ...acc.history].slice(0, 5), // nur letzte 5 anzeigen
        };
      }),
    );
  };

  const handleDeposit = (accountId) => {
    const raw = window.prompt("Betrag einzahlen (€):", "100");
    if (!raw) return;
    const amount = Number(String(raw).replace(",", "."));
    if (!Number.isFinite(amount) || amount <= 0) return;
    addTx(accountId, "in", Number(amount.toFixed(2)));
  };

  const handleWithdraw = (accountId) => {
    const raw = window.prompt("Betrag abziehen (€):", "50");
    if (!raw) return;
    const amount = Number(String(raw).replace(",", "."));
    if (!Number.isFinite(amount) || amount <= 0) return;
    addTx(accountId, "out", Number(amount.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-slate-700">
          Finanzübersicht
        </h1>
        <div className="mx-auto mt-6 h-px max-w-4xl bg-slate-300/60" />

        <div className="mt-10 text-center">
          <div className="text-sm font-semibold text-slate-500">
            Gesamtvermögen
          </div>
          <div className="mt-1 text-2xl font-extrabold text-slate-800">
            {formatEUR(total)}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {accounts.map((acc) => (
            <AccountCard
              key={acc.id}
              account={acc}
              onDeposit={handleDeposit}
              onWithdraw={handleWithdraw}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FinanzPage;
