import { createContext, useContext, useState, type ReactNode } from "react";

export interface BuildSelection {
  vehicleId?: string;
  year?: string;
  variant?: string;
  categoryId?: string;
  productId?: string;
  savedProducts: string[]; // RTT/product IDs the user has saved to their build
}

interface BuildContextValue {
  build: BuildSelection;
  setVehicle: (vehicleId: string) => void;
  setYear: (year: string) => void;
  setVariant: (variant: string) => void;
  setCategory: (categoryId: string) => void;
  toggleSavedProduct: (productId: string) => void;
  reset: () => void;
}

const BuildContext = createContext<BuildContextValue | null>(null);

const initial: BuildSelection = { savedProducts: [] };

export function BuildProvider({ children }: { children: ReactNode }) {
  const [build, setBuild] = useState<BuildSelection>(initial);

  const setVehicle = (vehicleId: string) =>
    setBuild((prev) => ({ ...prev, vehicleId, year: undefined, variant: undefined }));
  const setYear = (year: string) => setBuild((prev) => ({ ...prev, year }));
  const setVariant = (variant: string) => setBuild((prev) => ({ ...prev, variant }));
  const setCategory = (categoryId: string) => setBuild((prev) => ({ ...prev, categoryId }));
  const toggleSavedProduct = (productId: string) =>
    setBuild((prev) => ({
      ...prev,
      savedProducts: prev.savedProducts.includes(productId)
        ? prev.savedProducts.filter((id) => id !== productId)
        : [...prev.savedProducts, productId],
    }));
  const reset = () => setBuild(initial);

  return (
    <BuildContext.Provider
      value={{ build, setVehicle, setYear, setVariant, setCategory, toggleSavedProduct, reset }}
    >
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  const ctx = useContext(BuildContext);
  if (!ctx) throw new Error("useBuild must be used inside <BuildProvider>");
  return ctx;
}
