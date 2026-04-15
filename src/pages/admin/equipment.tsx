/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from "react";
import Head from "next/head";
import {
  FiSearch,
  FiBell,
  FiSettings,
  FiPlus,
  FiTrendingUp,
  FiArrowRight,
  FiEdit,
  FiTrash2,
  FiUploadCloud,
  FiCheckCircle,
} from "react-icons/fi";
import AdminLayout from "../../components/AdminLayout";
import {
  headerSection,
  pageTitle,
  statsRow,
  statCard,
  inventoryTable,
  statusPill,
  paginationSection,
  insightsCard,
  saleBanner,
  modalOverlay,
  modalContainer,
  modalContainerSm,
  modalLeftPanel,
  modalRightPanel,
  statusToggleBtn,
  imageUploadBox,
} from "../../styles/AdminEquipmentStyles";

// ─── Types ────────────────────────────────────────────────────────────────────

type AvailabilityStatus = "Available" | "Rented" | "Maintenance";

interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  availability: AvailabilityStatus;
  rate: number;
  imageUrl: string;
}

interface FormState {
  name: string;
  description: string;
  category: string;
  rate: string;
  availability: AvailabilityStatus;
  imageUrl: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const EQUIPMENT_CATEGORIES = [
  "Heavy Duty Tractor",
  "Combine Harvester",
  "Precision Planter",
  "Telehandler",
  "Rotavator",
  "Irrigation System",
  "Sprayer",
  "Harvester",
  "Seeder",
  "Other",
];

const AVAILABILITY_OPTIONS: {
  label: string;
  value: AvailabilityStatus;
  color: string;
}[] = [
  { label: "Available",   value: "Available",   color: "#2e7d32" },
  { label: "Maintenance", value: "Maintenance", color: "#9e9e9e" },
  { label: "Rented",      value: "Rented",      color: "#e65100" },
];

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=200&auto=format&fit=crop";

// ─── Seed data ────────────────────────────────────────────────────────────────

const initialEquipment: EquipmentItem[] = [
  {
    id: "1",
    name: "John Deere 8R 410",
    description: "High-performance heavy-duty tractor for large-scale farming operations.",
    category: "Heavy Duty Tractor",
    availability: "Available",
    rate: 12500,
    imageUrl:
      "https://images.unsplash.com/photo-1594398044299-591b3b21817e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Case IH Axial-Flow",
    description: "Stage V engine combine harvester with precision grain separation.",
    category: "Combine Harvester",
    availability: "Rented",
    rate: 24000,
    imageUrl:
      "https://images.unsplash.com/photo-1592918806481-0685718df6d2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Horsch Maestro 12 CV",
    description: "12-row precision planter ideal for maize and soybean cultivation.",
    category: "Precision Planter",
    availability: "Maintenance",
    rate: 8200,
    imageUrl:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "JCB 542-70 Agri Pro",
    description: "4.2-ton capacity telehandler built for heavy agricultural lifting.",
    category: "Telehandler",
    availability: "Available",
    rate: 9800,
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.farmmachinerylocator.co.uk%2Fimg%2Fexternal%2Fjcb_542-70_agrip_t_0001.jpg&f=1&nofb=1",
  },
];

const emptyForm = (): FormState => ({
  name: "",
  description: "",
  category: EQUIPMENT_CATEGORIES[0],
  rate: "",
  availability: "Available",
  imageUrl: "",
});

// ─── Component ────────────────────────────────────────────────────────────────

const AdminEquipment = () => {
  const [equipment, setEquipment] = useState<EquipmentItem[]>(initialEquipment);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(null);
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm());
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Helpers ──────────────────────────────────────────────────────────────────

  const openAdd = () => {
    setForm(emptyForm());
    setSelectedItem(null);
    setModalType("add");
  };

  const openEdit = (item: EquipmentItem) => {
    setForm({
      name: item.name,
      description: item.description,
      category: item.category,
      rate: String(item.rate),
      availability: item.availability,
      imageUrl: item.imageUrl,
    });
    setSelectedItem(item);
    setModalType("edit");
  };

  const openDelete = (item: EquipmentItem) => {
    setSelectedItem(item);
    setModalType("delete");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedItem(null);
  };

  const handleFormChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setForm((prev) => ({ ...prev, imageUrl: e.target!.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };

  // ── CRUD ─────────────────────────────────────────────────────────────────────

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const newItem: EquipmentItem = {
      id: Date.now().toString(),
      name: form.name.trim(),
      description: form.description.trim(),
      category: form.category,
      availability: form.availability,
      rate: parseInt(form.rate) || 0,
      imageUrl: form.imageUrl || DEFAULT_IMAGE,
    };
    setEquipment((prev) => [newItem, ...prev]);
    closeModal();
  };

  const handleEdit = () => {
    if (!selectedItem || !form.name.trim()) return;
    setEquipment((prev) =>
      prev.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              name: form.name.trim(),
              description: form.description.trim(),
              category: form.category,
              availability: form.availability,
              rate: parseInt(form.rate) || item.rate,
              imageUrl: form.imageUrl || item.imageUrl,
            }
          : item
      )
    );
    closeModal();
  };

  const handleDelete = () => {
    if (!selectedItem) return;
    setEquipment((prev) => prev.filter((item) => item.id !== selectedItem.id));
    closeModal();
  };

  // Inline rate edit directly from the table row
  const handleRateChange = (id: string, newRate: string) => {
    const rate = parseInt(newRate.replace(/[^0-9]/g, ""));
    if (!isNaN(rate)) {
      setEquipment((prev) =>
        prev.map((item) => (item.id === id ? { ...item, rate } : item))
      );
    }
  };

  // ── Derived state ─────────────────────────────────────────────────────────────

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rentedCount = equipment.filter((e) => e.availability === "Rented").length;
  const maintenanceCount = equipment.filter((e) => e.availability === "Maintenance").length;

  // ── Shared form (used by both Add and Edit modals) ────────────────────────────

  const renderEquipmentForm = (isEdit: boolean) => (
    <>
      <div className="modal-header">
        <h3>Equipment Details</h3>
        <p>
          {isEdit
            ? "Update the information for this fleet asset."
            : "Enter information to add a new fleet asset."}
        </p>
      </div>

      <button className="close-btn" onClick={closeModal} type="button" aria-label="Close">
        ×
      </button>

      {/* Name */}
      <div className="form-group">
        <label htmlFor="eq-name">Equipment Name</label>
        <input
          id="eq-name"
          type="text"
          placeholder="e.g. John Deere 8R 410"
          value={form.name}
          onChange={(e) => handleFormChange("name", e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="form-group">
        <label htmlFor="eq-desc">Equipment Description</label>
        <textarea
          id="eq-desc"
          placeholder="Brief description of the equipment and its use..."
          value={form.description}
          onChange={(e) => handleFormChange("description", e.target.value)}
        />
      </div>

      {/* Price + Type (side by side) */}
      <div className="form-row">
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="eq-rate">Price Per Day (₹)</label>
          <input
            id="eq-rate"
            type="number"
            placeholder="e.g. 5000"
            value={form.rate}
            min={0}
            onChange={(e) => handleFormChange("rate", e.target.value)}
          />
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="eq-type">Equipment Type</label>
          <select
            id="eq-type"
            value={form.category}
            onChange={(e) => handleFormChange("category", e.target.value)}
          >
            {EQUIPMENT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Availability toggle */}
      <div className="availability-group" style={{ marginTop: "20px" }}>
        <label>Availability Status</label>
        <div className="status-buttons">
          {AVAILABILITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              css={statusToggleBtn(form.availability === opt.value, opt.color)}
              onClick={() => handleFormChange("availability", opt.value)}
            >
              <span className="dot" />
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image upload */}
      <div className="form-group" style={{ marginTop: "20px" }}>
        <label>Equipment Image</label>
        <div
          css={imageUploadBox(!!form.imageUrl)}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file) handleImageFile(file);
          }}
        >
          {form.imageUrl ? (
            <>
              <img className="preview" src={form.imageUrl} alt="Preview" />
              <div className="change-overlay">Click to change photo</div>
            </>
          ) : (
            <>
              <div className="upload-icon">
                <FiUploadCloud size={28} />
              </div>
              <p className="upload-text">Click to upload equipment photo</p>
              <p className="upload-hint">PNG, JPG or WEBP — max 5 MB</p>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleImageFile(file);
            e.target.value = "";
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="modal-actions">
        <button className="cancel-btn" type="button" onClick={closeModal}>
          Discard Changes
        </button>
        <button
          className="confirm-btn"
          type="button"
          onClick={isEdit ? handleEdit : handleAdd}
        >
          <FiCheckCircle style={{ marginRight: 6, verticalAlign: "middle" }} />
          {isEdit ? "Save Equipment Profile" : "Add Equipment"}
        </button>
      </div>
    </>
  );

  // ── Render ────────────────────────────────────────────────────────────────────

  return (
    <AdminLayout>
      <Head>
        <title>Inventory Management | The Agrarian</title>
        <meta name="description" content="Manage farm equipment fleet — add, edit, and track availability." />
      </Head>

      {/* ── Top Header ── */}
      <div css={headerSection}>
        <div className="search-bar">
          <FiSearch />
          <input
            type="text"
            placeholder="Search equipment ledger..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="header-actions">
          <FiBell className="icon-btn" size={20} />
          <FiSettings className="icon-btn" size={20} />
          <button className="admin-panel-btn">Admin Panel</button>
        </div>
      </div>

      {/* ── Page Title ── */}
      <div css={pageTitle}>
        <div className="title-info">
          <p>Inventory Management</p>
          <h2>Equipment Fleet</h2>
        </div>
        <button className="add-btn" onClick={openAdd}>
          <FiPlus size={20} />
          <span>Add Equipment</span>
        </button>
      </div>

      {/* ── Stats ── */}
      <div css={statsRow}>
        <div css={statCard("#1b5e20")}>
          <span className="label">Total Units</span>
          <span className="value">{equipment.length}</span>
        </div>
        <div css={statCard("#f57c00")}>
          <span className="label">Active Rentals</span>
          <span className="value">{rentedCount}</span>
        </div>
        <div css={statCard("#757575")}>
          <span className="label">Maintenance</span>
          <span className="value">{maintenanceCount}</span>
        </div>
      </div>

      {/* ── Inventory Table ── */}
      <div css={inventoryTable}>
        <table>
          <thead>
            <tr>
              <th>Asset Details</th>
              <th>Availability</th>
              <th>Rate / Day</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEquipment.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="asset-cell">
                    <img src={item.imageUrl} alt={item.name} />
                    <div>
                      <span className="asset-name">{item.name}</span>
                      <span className="asset-meta">
                        {item.category}
                        {item.description
                          ? ` • ${item.description.slice(0, 45)}${item.description.length > 45 ? "…" : ""}`
                          : ""}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  {/* statusPill now accepts the AvailabilityStatus value directly */}
                  <div css={statusPill(item.availability)}>
                    {item.availability}
                  </div>
                </td>
                <td>
                  <div className="price-cell">
                    ₹{" "}
                    <input
                      type="text"
                      value={item.rate.toLocaleString()}
                      onChange={(e) => handleRateChange(item.id, e.target.value)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "inherit",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        width: "80px",
                        padding: "0 4px",
                        outline: "none",
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <FiEdit
                      size={16}
                      style={{ cursor: "pointer", color: "#9ca3af" }}
                      onClick={() => openEdit(item)}
                    />
                    <FiTrash2
                      size={16}
                      style={{ cursor: "pointer", color: "#ef4444" }}
                      onClick={() => openDelete(item)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div css={paginationSection}>
          <span className="count-info">
            Showing {filteredEquipment.length} of {equipment.length} units
          </span>
          <div className="nav-btns">
            <button>Prev</button>
            <button className="active">Next</button>
          </div>
        </div>
      </div>

      {/* ── Insights ── */}
      <div css={insightsCard}>
        <div className="insight-icon">
          <FiTrendingUp size={24} />
        </div>
        <div className="insight-content">
          <h4>Inventory Insights</h4>
          <p>
            Your most profitable asset this month is the{" "}
            <strong className="highlight">John Deere 8R</strong>, with a utilization rate of 94%.
            Consider expanding the heavy-duty tractor fleet.
          </p>
          <a href="#" className="view-link">
            View Full Report <FiArrowRight />
          </a>
        </div>
      </div>

      {/* ── Banner ── */}
      <div css={saleBanner}>
        <h3>Fleet Expansion Sale</h3>
        <p>
          New irrigation units are arriving next week. Update listing rates for
          the monsoon season.
        </p>
      </div>

      {/* ── Chat FAB ── */}
      <div
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          background: "#1b5e20",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/134/134914.png"
          alt="Chat"
          style={{ width: "24px", filter: "invert(1)" }}
        />
      </div>

      {/* ══ MODALS ══════════════════════════════════════════════════════════════ */}
      {modalType && (
        <div css={modalOverlay} onClick={closeModal}>

          {/* ── Add / Edit — two-panel layout ── */}
          {(modalType === "add" || modalType === "edit") && (
            <div css={modalContainer} onClick={(e) => e.stopPropagation()}>
              {/* Left decorative panel */}
              <div css={modalLeftPanel}>
                <div>
                  <div className="panel-icon">
                    <FiCheckCircle size={22} color="white" />
                  </div>
                  <h2>Curate Your Fleet</h2>
                  <p>
                    Define every technical specification needed to provide the
                    best rental experience to prospective farmers.
                  </p>
                </div>
                <p className="panel-footer">
                  All fields are reflected in the public equipment listing.
                </p>
              </div>

              {/* Right form panel */}
              <div css={modalRightPanel}>
                {renderEquipmentForm(modalType === "edit")}
              </div>
            </div>
          )}

          {/* ── Delete — single narrow panel ── */}
          {modalType === "delete" && selectedItem && (
            <div css={modalContainerSm} onClick={(e) => e.stopPropagation()}>
              <div css={modalRightPanel}>
                <div className="modal-header">
                  <h3 style={{ color: "#ef4444" }}>Decommission Asset?</h3>
                  <p>
                    Are you sure you want to remove{" "}
                    <strong>{selectedItem.name}</strong> from the active fleet?
                    This action is permanent and cannot be undone.
                  </p>
                </div>
                <button className="close-btn" onClick={closeModal} type="button" aria-label="Close">
                  ×
                </button>
                <div className="modal-actions">
                  <button className="cancel-btn" onClick={closeModal}>
                    Keep Asset
                  </button>
                  <button className="delete-btn" onClick={handleDelete}>
                    Confirm Deletion
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </AdminLayout>
  );
};

export default AdminEquipment;
