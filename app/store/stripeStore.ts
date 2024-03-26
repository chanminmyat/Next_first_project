import { create } from "zustand";
const baseUrl = "http://18.143.244.78:8001";

type Store = {
  count: number;
  spinner: string;
  name: string;
  businessName: string;
  email: string;
  password: string;
  setCount:(count:any) =>void;
  dec: () => void;
  setEmail: (x: any) => void;
  setBusinessName: (z: any) => void;
  setPassword:(psw:any) => void;
  setName: (y: any) => void;
};

export const useStore = create<Store>()((set) => ({
  count: 1,
  spinner: "none",
  stripeLoading: false,
  name: "",
  businessName: "",
  email: "",
  password:"",
  setEmail: (x) => set(() => ({ email: x })),
  setPassword: (psw) => set(() => ({ password: psw })),
  setName: (y) => set(() => ({ name: y })),
  setBusinessName: (z) => set(() => ({ businessName: z })),
  setCount: (count) => set(()=>({count:count})),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
