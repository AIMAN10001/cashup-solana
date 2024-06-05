import { useMemo, useState } from "react";
import TransactionDetailModal from "./TransactionDetailModal";
import TransactionItem from "./TransactionItem";

const TransactionsList = ({ connected, transactions }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTransactionID, setCurrentTransactionID] = useState(null);
  const currentTransaction = useMemo(
    () =>
      transactions.find(
        (transaction) => transaction.id === currentTransactionID
      ),
    [currentTransactionID]
  );

  const toggleTransactionDetailModal = (value, transactionID) => {
    setCurrentTransactionID(transactionID);
    setModalOpen(value);
  };

  return (
    <div>
      <div className="mx-6 flex items-center rounded-lg bg-[#50586C] p-8">
        <p className="mx-auto max-w-3xl px-10 text-lg font-medium uppercase text-[#DCE2F0] xl:px-0">
          Transactions
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-100 rounded-lg bg-[#50586C] py-4 px-10 xl:px-0">
        {connected ? (
          <>
            {transactions.map(
              ({ id, to, amount, description, transactionDate }) => (
                <TransactionItem
                  key={id}
                  id={id}
                  to={to}
                  description={description}
                  transactionDate={transactionDate}
                  amount={amount}
                  toggleTransactionDetailModal={toggleTransactionDetailModal}
                />
              )
            )}

            <TransactionDetailModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              currentTransaction={currentTransaction}
            />
          </>
        ) : (
          <div className="flex items-center justify-center py-10">
            <p className=" text-3xl font-medium text-[#DCE2F0]">
              Please connect your wallet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
