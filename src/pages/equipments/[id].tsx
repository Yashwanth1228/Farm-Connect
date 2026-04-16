import { useRouter } from "next/router";
import { equipments, Equipment } from "@/data/equipmentData";
import PDP from "@/pages/equipments/pdp";

const EquipmentDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // ✅ WAIT until router is ready
  if (!id) {
    return <h2>Loading...</h2>;
  }

  const product = equipments.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return <PDP product={product} />;
};

export default EquipmentDetails;
