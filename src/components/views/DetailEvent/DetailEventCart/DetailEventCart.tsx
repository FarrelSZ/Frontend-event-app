import { ICart, ITicket } from "@/types/Ticket";
import { convertIDR } from "@/utils/currency";
import { Button, Card, CardBody, CardFooter, Divider, Spinner } from "@heroui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PropTypes {
  cart: ICart;
  dataTicketInCart: ITicket;
  onChangeQuantity: (type: "increment" | "decrement") => void;
  onCreateOrder: () => void;
  isLoading: boolean;
}
const DetailEventCart = ({ cart, dataTicketInCart, onChangeQuantity, onCreateOrder, isLoading }: PropTypes) => {
  const router = useRouter();
  const session = useSession();
  return (
    <Card radius="lg" className="lg:sticky lg:top-[80px] border-none p-6">
      {session.status === "authenticated" ? (
        <CardBody className="gap-4">
          <h2 className="text-xl font-semibold text-foreground-700"></h2>
          {cart.ticket === "" ? (
            <p className="text-foreground-500">Your cart is empty</p>
          ) : (
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h4 className="font-bold">{dataTicketInCart.name}</h4>
                <div className="flex items-center gap-2">
                  <Button
                    size="md"
                    variant="bordered"
                    className="h-9 w-9 min-w-0 scale-80 rounded-full font-bold text-foreground-500"
                    onPress={() => onChangeQuantity("decrement")}
                  >
                    -
                  </Button>
                  <span className="text-lg font-bold">{cart.quantity}</span>
                  <Button
                    size="md"
                    variant="bordered"
                    className="h-9 w-9 min-w-0 scale-80 rounded-full font-bold text-foreground-500"
                    onPress={() => onChangeQuantity("increment")}
                  >
                    +
                  </Button>
                </div>
              </div>
              <p className="">{convertIDR(Number(dataTicketInCart.price) * cart.quantity)}</p>
            </div>
          )}
          <Divider />

          <Button
            fullWidth
            color="danger"
            size="md"
            disabled={cart.quantity === 0 || isLoading}
            className="disabled:bg-danger-500"
            onPress={onCreateOrder}
          >
            {isLoading ? <Spinner size="sm" color="white" /> : "Checkout"}
          </Button>
        </CardBody>
      ) : (
        <CardBody>
          <Button color="danger" size="lg" as={Link} href={`/auth/login?callbackUrl=/event/${router.query.slug}`}>
            Login for book ticket
          </Button>
        </CardBody>
      )}
    </Card>
  );
};

export default DetailEventCart;
