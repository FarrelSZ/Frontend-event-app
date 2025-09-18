import DashboardLayout from "@/components/layouts/DashboardLayout";
import Transaction from "@/components/views/Member/Transaction/Transcation";

const TransactionMemberPage = () => {
  return (
    <DashboardLayout title="Dashboard" description="List of all transactions" type="member">
      <Transaction />
    </DashboardLayout>
  );
};

export default TransactionMemberPage;
