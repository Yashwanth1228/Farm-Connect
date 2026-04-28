import { useRouter } from "next/router";
import tractor from "../../assets/tractor.jpg";
import {
  Action,
  AddButton,
  Badge,
  CenterBox,
  Container,
  Delete,
  Divider,
  Header,
  Main,
  MobileActions,
  MobileCard,
  MobileContent,
  PageButton,
  PageNumbers,
  PaginationControls,
  PaginationWrapper,
  Spinner,
  StatBox,
  Stats,
  StatusCard,
  StatusText,
  StatusTitle,
  TableWrapper,
} from "@/styles/admin/equipment";
import { useEffect, useState } from "react";
import AddEquipmentModal from "./AddEquipmentModal.tsx";
import {
  useDeleteEquipmentsMutation,
  useGetEquipmentsQuery,
} from "@/store/api/apiSlice";
import { toast } from "react-toastify";

export default function EquipmentPage() {
  const { data, error, isLoading } = useGetEquipmentsQuery();

  const [deleteEquipment] = useDeleteEquipmentsMutation();

  const [showModal, setShowModal] = useState(false);

  const [selectedEquipment, setSelectedEquipment] = useState<any>(null);

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  console.log("data from redux in the page of admin/equipment", data?.data);

  const handledelete = async (id: any) => {
    console.log("the delete id is in handledelete ", id);

    const response = (await deleteEquipment(id).unwrap()) as {
      success: boolean;
    };

    if (response.success) {
      toast.success("deleted successfully");
    }

    console.log("respnse from the delte equipment ", response);

    // toast.error("unsuccessfull of deletion");
    // toast.info("info");
    // toast.warn("warning");
  };

  if (isLoading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading Equipment...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  if (error) {
    return (
      <CenterBox>
        <StatusCard>
          <StatusTitle style={{ color: "#dc2626" }}>Failed to Load</StatusTitle>
          <StatusText>
            Something went wrong while fetching equipment data.
          </StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  const equipments = data?.data || [];

  // ✅ PAGINATION CALCULATION
  const totalItems = equipments.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const currentEquipments = equipments.slice(start, end);

  // useEffect(() => {
  //     document.body.style.overflow = showModal ? "hidden" : "auto";
  //   }, [showModal]);

  const totalInventory = data?.data?.reduce(
    (sum: number, item: any) => sum + (item.quantity ?? 0),
    0,
  );

  const totalPrice = data?.data?.reduce(
    (sum: number, item: any) => sum + item.price,
    0,
  );

  return (
    <Container>
      <Main style={{ filter: showModal ? "blur(6px)" : "none" }}>
        <Header>
          <div>
            <h2>Equipment Fleet</h2>
            <p>Manage and track your agricultural asset inventory</p>
          </div>

          <AddButton onClick={() => setShowModal(true)}>
            <span className="material-symbols-outlined">add</span>
            Add Equipment
          </AddButton>
        </Header>

        {/* STATS */}
        <Stats>
          <StatBox>
            <p>Total Units</p>
            <h3 style={{ color: "#0d631b" }}>{data.data.length || 0}</h3>
          </StatBox>

          <Divider />

          <StatBox>
            <p>Total Quantity</p>
            <h3 style={{ color: "#2563eb" }}>{totalInventory}</h3>
          </StatBox>

          <Divider />

          <StatBox>
            <p>Total Price</p>
            <h3 style={{ color: "#d97706" }}>₹{Math.round(totalPrice)}</h3>
          </StatBox>

          {/* <StatBox>
              <p>Active Rentals</p>
              <h3 style={{ color: "#2563eb" }}>82</h3>
            </StatBox>
  
            <Divider />
  
            <StatBox>
              <p>In Maintenance</p>
              <h3 style={{ color: "#d97706" }}>12</h3>
            </StatBox> */}
        </Stats>

        {/* TABLE */}
        {/* ✅ TABLE (Desktop only) */}
<TableWrapper>
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Asset Name & Details</th>
        <th>Quantity</th>
        <th>Rate/Day</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {currentEquipments.map((equipment: any) => (
        <tr key={equipment._id}>
          <td>
            <img src={equipment.images?.[0]} />
          </td>
          <td>
            <strong>{equipment.name}</strong>
            <p>{equipment.type}</p>
          </td>
          <td>
            <Badge green>{equipment.quantity}</Badge>
          </td>
          <td>₹{equipment.price}</td>
          <td>
            <Action
              onClick={() => {
                setSelectedEquipment(equipment);
                setShowModal(true);
              }}
            >
              Edit
            </Action>
            <Delete onClick={() => handledelete(equipment._id)}>
              Delete
            </Delete>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</TableWrapper>

{/* ✅ MOBILE CARDS */}
{currentEquipments.map((equipment: any) => (
  <MobileCard key={equipment._id}>
    <img src={equipment.images?.[0]} />

    <MobileContent>
      <h4>{equipment.name}</h4>
      <p>{equipment.type}</p>
      <p>Qty: {equipment.quantity}</p>
      <p>₹{equipment.price}</p>

      <MobileActions>
        <button
          className="edit"
          onClick={() => {
            setSelectedEquipment(equipment);
            setShowModal(true);
          }}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={() => handledelete(equipment._id)}
        >
          Delete
        </button>
      </MobileActions>
    </MobileContent>
  </MobileCard>
))}

          {/* PAGINATION */}
        <PaginationWrapper>
          <p>
            Showing {totalItems === 0 ? 0 : start + 1} to{" "}
            {Math.min(end, totalItems)} of {totalItems} units
          </p>

          <PaginationControls>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </button>

            <PageNumbers>
              {[...Array(totalPages)].map((_, i) => (
                <PageButton
                  key={i}
                  active={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PageButton>
              ))}
            </PageNumbers>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </PaginationControls>
        </PaginationWrapper>
        
      </Main>

      {/* ✅ MODAL */}
      {showModal && (
        <AddEquipmentModal
          onClose={() => {
            setShowModal(false);
            setSelectedEquipment(null);
          }}
          equipment={selectedEquipment} // 👈 important
        />
      )}
    </Container>
  );
}
