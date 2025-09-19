import DataTable from "@/components/ui/DataTable";
import { Chip } from "@heroui/react";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback, useEffect } from "react";
import { COLUMN_LISTS_TRANSACTION } from "./Transaction.constant";
import useChangeUrl from "@/hooks/useChangeUrl";
import DropdownAction from "@/components/commons/DropdownAction";
import useTransaction from "./useTranscation";
import { convertIDR } from "@/utils/currency";
const Transaction = () => {
  const { push, isReady, query } = useRouter();
  const { dataTransactions, isLoadingTransactions, isRefetchingTransactions, refetchTransactions } = useTransaction();
  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (transaction: Record<string, unknown>, columnKey: Key) => {
      const cellValue = transaction[columnKey as keyof typeof transaction];

      switch (columnKey) {
        case "status":
          let chipColor = "default";
          const status = cellValue?.toString().toLowerCase();

          if (status === "completed") {
            chipColor = "success";
          } else if (status === "pending") {
            chipColor = "warning";
          } else if (status === "cancelled") {
            chipColor = "danger";
          }
          return (
            <Chip color={chipColor as "default"} size="sm" variant="flat">
              {cellValue as ReactNode}
            </Chip>
          );
        case "total":
          return convertIDR(Number(cellValue));
        case "actions":
          return (
            <DropdownAction
              onPressButtonDetail={() => push(`/member/transaction/${transaction?.orderId}`)}
              hideButtonDelete
            />
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push]
  );

  return (
    <section>
      {Object.keys(query).length > 0 && (
        <DataTable
          columns={COLUMN_LISTS_TRANSACTION}
          data={dataTransactions?.data || []}
          emptyContent="Transaction is empty"
          isLoading={isLoadingTransactions || isRefetchingTransactions}
          renderCell={renderCell}
          totalPages={dataTransactions?.pagination.totalPages}
        />
      )}
    </section>
  );
};

export default Transaction;
