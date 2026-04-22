import { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import toast from "react-hot-toast";
import {
  Wrapper,
  Modal,
  LeftPanel,
  PanelTitle,
  PanelText,
  FooterText,
  BlurCircle,
  RightPanel,
  Title,
  Subtitle,
  Form,
  FullRow,
  Label,
  Input,
  UploadBox,
  Row,
  Select,
  Button,
} from "@/pages/admin/style/add_equipment";

export default function AdminPage() {
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
    const toastId = toast.loading("Uploading images...");

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    const uploadRes = await axios.post("/api/admin/upload", formData);
    const imageUrls = uploadRes.data.urls;

    console.log("the avalaibility", Availability);

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

    toast.success("Equipment added successfully!", { id: toastId });
  };

  return (
    <>
      <Wrapper>
        <Modal>
          {/* LEFT DECORATIVE PANEL */}
          <LeftPanel>
            <div>
              <PanelTitle>Curate Your Fleet</PanelTitle>
              <PanelText>
                Ensure every technical detail is captured to provide a premium
                experience.
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
                  <Select
                    onChange={(e) => {
                      setAvalability(e.target.value);
                    }}
                  >
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
                  <Input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Price</Label>
                  <Input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
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

              <Button onClick={handleSubmit}>Save Equipment Profile</Button>
            </Form>
          </RightPanel>
        </Modal>
      </Wrapper>

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
