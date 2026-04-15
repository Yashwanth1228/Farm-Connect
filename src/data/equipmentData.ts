// import farmertractor from "../../assets/farmertractor.jpg";
import farmertractor from "@/assets/farmertractor.jpg"


export type Equipment = {
  id: number;
  name: string;
  type: string;
  price: number;
  img: string;
  available: boolean;
  description: string;
  enginepower:string;
}



export const equipments: Equipment[]=[{
      id: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArKernXUCpsW2jcShlelE-sGSdvL3dIBnTpdc1QSd2NXo-hItzbX_eivGV6HsNaLLZWDT8sGwjCcdejk6abJOO-9p8959hwkIxAvvJt3fduSGtCAAxbabWc6L0HStxeBFKmtZd0VKI4_g_GDb3gDr8UF4C4IAzfhg4X5NWbfgHMJc4x__mqvXjarMxdglnXnDlgYegKD4RxaDugoJ-h_8CIXWFPy8ki27F9oJ5kdG15euSbFgWqADulB7vhZaIPhLhAsnnJstseVM",
      name: "Tractor",
      type: "Tractors",
      price: 3500,
      available: true,
      description: "A tractor is a powerful vehicle designed for agricultural work. It is used to pull or push agricultural machinery, such as plows, harrows, and trailers. Tractors are essential for tasks like tilling, planting, and harvesting crops. They come in various sizes and configurations to suit different farming needs.",
      enginepower: "350 HP"
    },
    {
      id: 2,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB57hfn4Ahq_W_1LqXo-yOLp7d6oLiiMK-7CFsMcmVb0S7SXUwVCKe1xanxe3aEWKr1psDV4ATLB2NQtyPloF8YEYhx8weIgnwuRsj58eg9oLrY5QhpTAdmfKHa4LK-RSdIEupWqHdXgMQ-mFKGil0bC1b5EwSbj1smxA03VSZDk4s3LZjqWdLxPHAyvlmxbuqM6CUfetMzs9hvb7MCdr6glsV73txnBCpoisunY7dhmTmY-5sgYmtI-T0k9gNFYiBku3M-dcaIqcw",
      name: "Harvester",
      type: "Harvesters",
      price: 5000,
      available: false,
      description: "A harvester, also known as a combine harvester, is a machine used in agriculture to efficiently harvest crops. It combines three separate operations—reaping, threshing, and winnowing—into a single process. Harvesters are commonly used for crops like wheat, corn, soybeans, and rice. They significantly reduce the time and labor required for harvesting, making them essential for large-scale farming operations.",
      enginepower: "400 HP"
    },
    {
      id: 3,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0FYMcajAWeMGKUhuKQXXJ0k-J_rCsRKVd52bv1_QSqDRs7BQFx3NJxTZSFM-Ncm1Z3rryHQ-ZRjKOcwTTjp3z92eW77IHIWUw7ASqBnPhzflvvsBAVaWITbof7Ptg82uiPpDrRXiRpx1vZsXbrh4QCBI1U2JjNksof89ZPw2VC4t8gNdDLnjAwawnDkgE3zPdHw2bwxG7zwKZtpv5bAHFMKgxPXPvBBf-TjwBal5bnm7EhOWY-nT4cQhAF_90t71yoiW5-DB2jvI",
      name: "Plough",
      type: "Ploughs",
      price: 1500,
      available: true,
      description: "A plough, also spelled plow, is a farming implement used for tilling the soil. It is designed to break up and turn over the soil, preparing it for planting crops. Ploughs typically consist of a blade or set of blades that cut into the ground, creating furrows. They can be pulled by animals or tractors and are essential for improving soil aeration, controlling weeds, and enhancing water retention in agricultural fields.",
      enginepower: "N/A"
    },
    {
      id: 4,
      img: farmertractor.src,
      name: "Cultivator",
      type: "Cultivators",
      price: 2000,
      available: true,
      description: "A cultivator is a farming tool used for soil cultivation and weed control. It is designed to break up the soil, remove weeds, and prepare the seedbed for planting. Cultivators typically have multiple tines or blades that penetrate the soil, loosening it and uprooting weeds. They can be used for both primary and secondary tillage, making them essential for maintaining healthy soil conditions and promoting crop growth.",
      enginepower: "N/A"
    },]