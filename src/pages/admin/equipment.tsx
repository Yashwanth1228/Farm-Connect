

import { useRouter } from "next/router";
import tractor from "../../assets/tractor.jpg"
import { Action, AddButton, Badge, CenterBox, Container, Delete, Divider, Header, Main, PageButton, PageNumbers, PaginationControls, PaginationWrapper, Spinner, StatBox, Stats, StatusCard, StatusText, StatusTitle, TableWrapper } from "@/styles/admin/equipment";
import { useEffect, useState } from "react";
import AddEquipmentModal from "./AddEquipmentModal.tsx";
import { useDeleteEquipmentsMutation, useGetEquipmentsQuery } from "@/store/api/apiSlice";
import { toast } from "react-toastify";



export default function EquipmentPage() {

    const { data, error, isLoading } =  useGetEquipmentsQuery();

    const [ deleteEquipment ] = useDeleteEquipmentsMutation();

    const [showModal, setShowModal] = useState(false);

    console.log("data from redux in the page of admin/equipment",data?.data)

    const handledelete = async (id : any ) => {
      console.log("the delete id is in handledelete " , id)

      const response = await deleteEquipment(id).unwrap() as {success : boolean};

      if (response.success) {
        toast.success("deleted successfully" ) ;
      }

      console.log("respnse from the delte equipment " , response)

      
      // toast.error("unsuccessfull of deletion");
      // toast.info("info");
      // toast.warn("warning");

      
      
    }

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
            <StatusTitle style={{ color: "#dc2626" }}>
              Failed to Load
            </StatusTitle>
            <StatusText>
              Something went wrong while fetching equipment data.
            </StatusText>
          </StatusCard>
        </CenterBox>
      );
    }
    

    // useEffect(() => {
    //     document.body.style.overflow = showModal ? "hidden" : "auto";
    //   }, [showModal]);

    const totalInventory = data?.data?.reduce(
      (sum: number, item: any) => sum + ( item.quantity ?? 0 ),
      0
    );

    const totalPrice =
  data?.data?.reduce((sum: number, item: any) => sum + item.price, 0) 
  
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

<Divider/>

<StatBox>
  <p>Total Price</p>
  <h3 style={{ color: "#d97706" }}>
    ₹{Math.round(totalPrice)}
  </h3>
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

                {
                  data?.data?.map((equipment : any) => {
                      return (
                        <tr>
                  <td><img src={equipment.images?.[0]} /></td>
                  <td>
                    <strong>{equipment.name}</strong>
                    <p>{equipment.type}</p>
                  </td>
                  <td><Badge green> {equipment.quantity}</Badge></td>
                  <td>₹{equipment.price}</td>
                  <td>
                    <Action>Edit</Action>
                    <Delete onClick={() => {handledelete(equipment._id)}}>Delete</Delete>
                  </td>
                </tr>


                      )
                  })

                }
                
                {/* <tr>
                  <td><img src={tractor.src} /></td>
                  <td>
                    <strong>John Deere 8R</strong>
                    <p>Heavy Duty Tractor</p>
                  </td>
                  <td><Badge green>In Stock</Badge></td>
                  <td>₹12,500</td>
                  <td>
                    <Action>Edit</Action>
                    <Delete>Delete</Delete>
                  </td>
                </tr> */}

                

               

                
              </tbody>
            </table>
          </TableWrapper>
  
          {/* PAGINATION */}
          <PaginationWrapper>
            <p>Showing 1 of 124 units</p>
  
            <PaginationControls>
              <button>Previous</button>
  
              <PageNumbers>
                <PageButton active>1</PageButton>
                <PageButton>2</PageButton>
                <PageButton>3</PageButton>
              </PageNumbers>
  
              <button>Next</button>
            </PaginationControls>
          </PaginationWrapper>
        </Main>
  
        {/* ✅ MODAL */}
        {showModal && (
          <AddEquipmentModal onClose={() => setShowModal(false)} />
        )}
      </Container>
    );
  }