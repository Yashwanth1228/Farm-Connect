import { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { toast } from "react-toastify";

/* ================= LAYOUT ================= */

const Page = styled.div`
  min-height: 100vh;
  background: #fafaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const RightPanel = styled.div`
  width: 65%;
  padding: 40px;
  max-height: 90vh;
  overflow-y: auto;
`;
/* ================= HEADER ================= */

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
`;

/* ================= FORM ================= */

const Form = styled.div`
  display: grid;
  gap: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const FullRow = styled.div`
  grid-column: span 2;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #666;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #f4f4ef;
  font-size: 14px;

  &:focus {
    outline: 2px solid #0d631b;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #f4f4ef;
`;

const UploadBox = styled.div`
  border: 2px dashed #ccc;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  background: #f4f4ef;

  &:hover {
    border-color: #0d631b;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 16px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(to right, #0d631b, #2e7d32);
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;


const Wrapper = styled.div`
  min-height: 100vh;
  background: #fafaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;

  border-radius: 24px;
  overflow: hidden;

  background: white;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
`;

const LeftPanel = styled.div`
  width: 35%;
  background: linear-gradient(135deg, #0d631b, #2e7d32);
  color: #cbffc2;

  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background: white;
  border: none;
  border-radius: 50%;

  width: 36px;
  height: 36px;

  cursor: pointer;
  font-weight: bold;
`;

const PanelTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
`;

const PanelText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.6;
`;

const FooterText = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

const BlurCircle = styled.div`
  position: absolute;
  bottom: -80px;
  right: -80px;
  width: 200px;
  height: 200px;
  background: #0d631b;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
`;

/* ================= PAGE ================= */

export default function AddEquipmentModal({ onClose }: any) {
  const [files, setFiles] = useState<FileList | null>(null);

  const [name, setName] = useState("");
  const [Type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [Availability, setAvalability] = useState("");
  const [Quantity, setQuantity] = useState("");

  const [enginepower, setEnginepower] = useState("");
  const [Wheels, setWheels] = useState("");
  const [FuelType, setFluelType] = useState("");
  const [Transmission, setTransmission] = useState("");
  const [HydraulicFlow, setHydraulicFlow] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async () => {
    
    const formData = new FormData();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    const uploadRes = await axios.post("/api/admin/upload", formData);
    const imageUrls = uploadRes.data.urls;

    console.log("the avalaibility" , Availability)

    await axios.post("/api/admin/add-equipment", {
      name,
      Type,
      price,
      location,
      Availability,
      Quantity,
      description,
      enginepower,
      Wheels,
      FuelType,
      Transmission,
      HydraulicFlow,
      weight,
      images: imageUrls,
    });

    toast.success("Uploaded successfully");
  };

  return (
    <>


<Overlay>
    <Modal>

    <CloseBtn onClick={onClose}>✕</CloseBtn>
      {/* LEFT DECORATIVE PANEL */}
      <LeftPanel>
        <div>
          <PanelTitle>Curate Your Fleet</PanelTitle>
          <PanelText>
            Ensure every technical detail is captured to provide a premium experience.
          </PanelText>
        </div>

        <FooterText>Harvest Ledger © 2024</FooterText>

        <BlurCircle />
      </LeftPanel>

      {/* RIGHT FORM PANEL */}
      <RightPanel>
        <Title>Add Equipment</Title>
        <Subtitle>Fill all details for listing equipment</Subtitle>

        <Form>
          <FullRow>
            <Label>Equipment Name</Label>
            <Input onChange={(e) => setName(e.target.value)} />
          </FullRow>

          <FullRow>
            <Label>Upload Images</Label>
            <UploadBox>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
            </UploadBox>
          </FullRow>

          <Row>
            <div>
              <Label>Type</Label>
              <Input onChange={(e) => setType(e.target.value)} />
            </div>

            <div>
              <Label>Availability</Label>
              <Select onChange={(e) => { setAvalability(e.target.value) }}>
                <option value="">Select</option>
                <option value="true">Available</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Rented">Rented</option>
              </Select>
            </div>
          </Row>

          <Row>
            <div>
              <Label>Quantity</Label>
              <Input type="number" onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div>
              <Label>Price</Label>
              <Input type="number" onChange={(e) => setPrice(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Location</Label>
              <Input onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div>
              <Label>Engine Power</Label>
              <Input onChange={(e) => setEnginepower(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Wheels</Label>
              <Input onChange={(e) => setWheels(e.target.value)} />
            </div>

            <div>
              <Label>Fuel Type</Label>
              <Input onChange={(e) => setFluelType(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Transmission</Label>
              <Input onChange={(e) => setTransmission(e.target.value)} />
            </div>

            <div>
              <Label>Hydraulic Flow</Label>
              <Input onChange={(e) => setHydraulicFlow(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Weight</Label>
              <Input onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div>
              <Label>Description</Label>
              <Input onChange={(e) => setDescription(e.target.value)} />
            </div>
          </Row>

          <Button onClick={handleSubmit}>
            Save Equipment Profile
          </Button>
        </Form>
      </RightPanel>

    </Modal>
  </Overlay>

  






    {/* <Title>Add Equipment</Title>
    
    <Subtitle>Fill all details for listing equipment</Subtitle> */}

    {/* <Form>
          <FullRow>
            <Label>Equipment Name</Label>
            <Input onChange={(e) => setName(e.target.value)} />
          </FullRow>

          <FullRow>
            <Label>Upload Images</Label>
            <UploadBox>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
            </UploadBox>
          </FullRow>

          <Row>
            <div>
              <Label>Type</Label>
              <Input onChange={(e) => setType(e.target.value)} />
            </div>

            <div>
              <Label>Availability</Label>
              <Select onChange={(e) => setAvalability(e.target.value)}>
                <option value="">Select</option>
                <option value="Available">Available</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Rented">Rented</option>
              </Select>
            </div>
          </Row>

          <Row>
            <div>
              <Label>Quantity</Label>
              <Input type="number" onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div>
              <Label>Price</Label>
              <Input type="number" onChange={(e) => setPrice(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Location</Label>
              <Input onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div>
              <Label>Engine Power</Label>
              <Input onChange={(e) => setEnginepower(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Wheels</Label>
              <Input onChange={(e) => setWheels(e.target.value)} />
            </div>

            <div>
              <Label>Fuel Type</Label>
              <Input onChange={(e) => setFluelType(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Transmission</Label>
              <Input onChange={(e) => setTransmission(e.target.value)} />
            </div>

            <div>
              <Label>Hydraulic Flow</Label>
              <Input onChange={(e) => setHydraulicFlow(e.target.value)} />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Weight</Label>
              <Input onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div>
              <Label>Description</Label>
              <Input onChange={(e) => setDescription(e.target.value)} />
            </div>
          </Row>

          <Button onClick={handleSubmit}>
            Save Equipment Profile
          </Button>
        </Form> */}
    
    
    </>
    
      

        // <Form>
        //   <FullRow>
        //     <Label>Equipment Name</Label>
        //     <Input onChange={(e) => setName(e.target.value)} />
        //   </FullRow>

        //   <FullRow>
        //     <Label>Upload Images</Label>
        //     <UploadBox>
        //       <input
        //         type="file"
        //         multiple
        //         onChange={(e) => setFiles(e.target.files)}
        //       />
        //     </UploadBox>
        //   </FullRow>

        //   <Row>
        //     <div>
        //       <Label>Type</Label>
        //       <Input onChange={(e) => setType(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Availability</Label>
        //       <Select onChange={(e) => setAvalability(e.target.value)}>
        //         <option value="">Select</option>
        //         <option value="Available">Available</option>
        //         <option value="Maintenance">Maintenance</option>
        //         <option value="Rented">Rented</option>
        //       </Select>
        //     </div>
        //   </Row>

        //   <Row>
        //     <div>
        //       <Label>Quantity</Label>
        //       <Input type="number" onChange={(e) => setQuantity(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Price</Label>
        //       <Input type="number" onChange={(e) => setPrice(e.target.value)} />
        //     </div>
        //   </Row>

        //   <Row>
        //     <div>
        //       <Label>Location</Label>
        //       <Input onChange={(e) => setLocation(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Engine Power</Label>
        //       <Input onChange={(e) => setEnginepower(e.target.value)} />
        //     </div>
        //   </Row>

        //   <Row>
        //     <div>
        //       <Label>Wheels</Label>
        //       <Input onChange={(e) => setWheels(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Fuel Type</Label>
        //       <Input onChange={(e) => setFluelType(e.target.value)} />
        //     </div>
        //   </Row>

        //   <Row>
        //     <div>
        //       <Label>Transmission</Label>
        //       <Input onChange={(e) => setTransmission(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Hydraulic Flow</Label>
        //       <Input onChange={(e) => setHydraulicFlow(e.target.value)} />
        //     </div>
        //   </Row>

        //   <Row>
        //     <div>
        //       <Label>Weight</Label>
        //       <Input onChange={(e) => setWeight(e.target.value)} />
        //     </div>

        //     <div>
        //       <Label>Description</Label>
        //       <Input onChange={(e) => setDescription(e.target.value)} />
        //     </div>
        //   </Row>

        //   <Button onClick={handleSubmit}>
        //     Save Equipment Profile
        //   </Button>
        // </Form>
      
    
  );
}