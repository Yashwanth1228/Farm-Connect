import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

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
type Props = {
  onClose: () => void;
  equipment?: any;
};

export default function AddEquipmentModal({ onClose, equipment }: Props) {

  const [files, setFiles] = useState<FileList | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    quantity: "",
    location: "",
    description: "",
    availability: "",
    enginepower: "",
    wheels: "",
    FuelType: "",
    transmission: "",
    hydraulicFlow: "",
    weight: "",
    images: [] as string[],
  });

  const isEdit = !!equipment;

  /* ✅ PREFILL DATA (EDIT MODE) */
  useEffect(() => {
    if (equipment) {
      console.log("equipment data in the edit equipment model " , equipment);
      setFormData({
        name: equipment.name || "",
        type: equipment.type || "",
        price: equipment.price || "",
        quantity: equipment.quantity || "",
        location: equipment.location || "",
        description: equipment.description || "",
        availability: equipment.available ? "true" : "false",
        enginepower: equipment.enginepower || "",
        wheels: equipment.wheels || "",
        FuelType: equipment.fuel_type || "",
        transmission: equipment.Transmission || "",
        hydraulicFlow: equipment.Hydraulic_Flow || "",
        weight: equipment.weight || "",
        images: equipment.images || [],
      });
    }
  }, [equipment]);

  /* ✅ SUBMIT HANDLER */
  const handleSubmit = async () => {
    try {
      let imageUrls = formData.images;

      /* ✅ Upload images if new */
      if (files) {
        const fd = new FormData();
        for (let i = 0; i < files.length; i++) {
          fd.append("images", files[i]);
        }

        const uploadRes = await axios.post("/api/admin/upload", fd);
        imageUrls = uploadRes.data.urls;
      }

      const payload = {
        ...formData,
        images: imageUrls,
      };
      
      if (isEdit) {
        await axios.put(`/api/equipment/${equipment._id}`, payload);
        alert("Updated successfully");
      } else {
        await axios.post(`/api/admin/add-equipment`, payload);
        alert("Added successfully");
      }

      onClose();

    } catch (err) {
      console.error(err);
      alert("Error saving equipment");
    }
  };

  return (
    <Overlay>
      <Modal>

        <CloseBtn onClick={onClose}>✕</CloseBtn>

        {/* LEFT PANEL */}
        <LeftPanel>
          <div>
            <PanelTitle>
              {isEdit ? "Edit Equipment" : "Add Equipment"}
            </PanelTitle>
            <PanelText>
              Manage your agricultural fleet efficiently.
            </PanelText>
          </div>
          <FooterText>Harvest Ledger © 2026</FooterText>
          <BlurCircle />
        </LeftPanel>

        {/* RIGHT PANEL */}
        <RightPanel>
          <Title>{isEdit ? "Update Equipment" : "Add Equipment"}</Title>

          <Form>

            <FullRow>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
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
                <Input
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                />
              </div>

              <div>
                <Label>Availability</Label>
                <Select
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </Select>
              </div>
            </Row>

            <Row>
              <div>
              <Label>Quantity</Label>
              <Input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />

              </div>

              <div>

              <Label>Price</Label>
              <Input
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />

              </div>

            </Row>

            <Row>
            <div>
              <Label>Location</Label>
             <Input  value={formData.location} onChange={(e) => setFormData({...formData , location:e.target.value})} /> 
             </div> 
             <div>
               <Label>Engine Power</Label>
                <Input type="text" value={formData.enginepower} onChange={(e) => setFormData({...formData , enginepower : e.target.value})} /> 
                </div> 
            </Row>

                <Row> 
                  <div> 
                    <Label>Wheels</Label> 
                    <Input type="text"  value={formData.wheels} onChange={(e) => setFormData({...formData , wheels : e.target.value})} /> 
                    </div> 
                    <div> 
                      <Label>Fuel Type</Label> 
                      <Input type="text"  value={formData.FuelType} onChange={(e) => setFormData({...formData , FuelType : e.target.value})} />
                       </div> 
                  </Row>

                  <Row> 
                    <div> 
                      <Label>Transmission</Label> 
                      <Input type="text"  value={formData.transmission} onChange={(e) => setFormData({...formData , transmission : e.target.value})} /> 
                      </div>
                       <div>
                         <Label>Hydraulic Flow</Label>
                          <Input type="text" value={formData.hydraulicFlow} onChange={(e) => setFormData({...formData , hydraulicFlow : e.target.value})} /> 
                          </div> 
                    </Row>

                    <Row> 
                      <div> 
                        <Label>Weight</Label> 
                        <Input type="text" value={formData.weight} onChange={(e) => setFormData({...formData , weight : e.target.value})} /> 
                        </div>

                    </Row>



            {/* <FullRow>
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </FullRow> */}

            <FullRow>
              <Input
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </FullRow>

            <Button onClick={handleSubmit}>
              {isEdit ? "Update Equipment" : "Save Equipment"}
            </Button>

          </Form>
        </RightPanel>

      </Modal>
    </Overlay>
  );
}