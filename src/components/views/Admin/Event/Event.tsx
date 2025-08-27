import DataTable from "@/components/ui/DataTable";
import { Chip, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback, useEffect } from "react";
import useChangeUrl from "@/hooks/useChangeUrl";
import DropdownAction from "@/components/commons/DropdownAction";
import useEvent from "./useEvent";
import { COLUMN_LISTS_EVENT } from "./Event.constants";

const Event = () => {
  const { push, isReady, query } = useRouter();
  const { dataEvents, isLoadingEvents, isRefetchingEvents, refetchEvents, selectedId, setSelectedId } = useEvent();

  const addEventModal = useDisclosure();
  const deleteEventModal = useDisclosure();
  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (event: Record<string, unknown>, columnKey: Key) => {
      const cellValue = event[columnKey as keyof typeof event];

      switch (columnKey) {
        case "banner":
          const iconSrc =
            typeof cellValue === "string" ? (cellValue.startsWith("http") ? cellValue : `/${cellValue}`) : "";
          return (
            <Image
              className="w-36 aspect-video object-cover rounded-lg"
              src={iconSrc}
              alt="icon"
              width={200}
              height={100}
              loading="lazy"
            />
          );
        case "isPublish":
          return (
            <Chip color={cellValue ? "success" : "warning"} size="sm" variant="flat">
              {cellValue === true ? "Published" : "Not Published"}
            </Chip>
          );

        case "actions":
          return (
            <DropdownAction
              onPressButtonDetail={() => push(`/admin/event/${event._id}`)}
              onPressButtonDelete={() => {
                setSelectedId(`${event._id}`);
                deleteEventModal.onOpen();
              }}
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
          buttonTopContentLabel="Create Event"
          columns={COLUMN_LISTS_EVENT}
          data={dataEvents?.data || []}
          emptyContent="Event empty"
          isLoading={isLoadingEvents || isRefetchingEvents}
          onClickButtonTopContent={addEventModal.onOpen}
          renderCell={renderCell}
          totalPages={dataEvents?.pagination.totalPages}
        />
      )}
      {/* <AddCategoryModal {...addCategoryModal} refetchCategory={refetchCategory} />
      <DeleteCategoryModal
        {...deleteCategoryModal}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        refetchCategory={refetchCategory}
      /> */}
    </section>
  );
};

export default Event;
