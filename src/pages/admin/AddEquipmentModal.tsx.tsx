  import { useEffect, useState } from "react";
  import axios from "axios";
  import styled from "@emotion/styled";
import { BlurCircle, Button, CloseBtn, Field, FooterText, Form, FullRow, Input, Label, LeftPanel, Modal, Overlay, PanelText, PanelTitle, RightPanel, Row, Select, Title, UploadBox } from "./style/add_equipment";

  /* ================= LAYOUT ================= */


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
                  placeholder="Name of the equipment"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </FullRow>

              <UploadBox>
                  Tap to upload images
                  <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  />
              </UploadBox>

              <Row>
                <div>
                  <Label>Type</Label>
                  <Input
                    value={formData.type}
                    placeholder="type "
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  />
                </div>

                <Field>
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
</Field>
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
              <Input value={formData.location} placeholder="Location" onChange={(e) => setFormData({...formData , location:e.target.value})} /> 
              </div> 
              <div>
                <Label>Engine Power</Label>
                  <Input type="text" value={formData.enginepower} placeholder="HP" onChange={(e) => setFormData({...formData , enginepower : e.target.value})} /> 
                  </div> 
              </Row>

                  <Row> 
                    <div> 
                      <Label>Wheels</Label> 
                      <Input type="text"  value={formData.wheels} placeholder="WD" onChange={(e) => setFormData({...formData , wheels : e.target.value})} /> 
                      </div> 
                      <div> 
                        <Label>Fuel Type</Label> 
                        <Input type="text"  value={formData.FuelType} placeholder="Fuel type" onChange={(e) => setFormData({...formData , FuelType : e.target.value})} />
                        </div> 
                    </Row>

                    <Row> 
                      <div> 
                        <Label>Transmission</Label> 
                        <Input type="text"  value={formData.transmission} placeholder="transmission" onChange={(e) => setFormData({...formData , transmission : e.target.value})} /> 
                        </div>
                        <div>
                          <Label>Hydraulic Flow</Label>
                            <Input type="text" value={formData.hydraulicFlow} placeholder="GPM/LPM" onChange={(e) => setFormData({...formData , hydraulicFlow : e.target.value})} /> 
                            </div> 
                      </Row>

                      <Row> 
                        <div> 
                          <Label>Weight</Label> 
                          <Input type="text" value={formData.weight} placeholder="LBS" onChange={(e) => setFormData({...formData , weight : e.target.value})} /> 
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