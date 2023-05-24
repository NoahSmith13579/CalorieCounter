import React from "react";
import FoodGrid from "../FoodGrid/FoodGrid";
import SearchBox from "../SearchBox/SearchBox";
import CalorieCounterBox from "../CalorieCounterBox/CalorieCounterBox";
import useLocalStorage from "../../Handlers/LocalStorageHandler";
import NutritionFacts from "../../Entities/NutritionFacts";
import { checkStorageForDupes } from "../../Logic/LocalStorageLogic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { capitalizeFirstLetter } from "../../Util/Util";
import About from "../About/About";

/**
 * Container for all displayed components
 * @returns
 */
const Layout: React.FC = () => {
  const [localStorage, setLocalStorage] = useLocalStorage(
    "food",
    [] as NutritionFacts[]
  );

  /**
   * Adds the input food items to the localStorage
   * @param newFood The input food
   * @returns
   */
  const handleAddFood = (newFood: NutritionFacts[]) => {
    if (newFood.length === 0) {
      toast("Input food not recognized", { type: "error" });
      return;
    }
    let newStorage = checkStorageForDupes([...localStorage, ...newFood]);
    setLocalStorage(newStorage);
    toast("Food Added", { type: "success" });
  };

  /**
   * Removes the food item from the localStorage
   * @param removedItemName
   */
  const handleRemoveFood = (removedItemName: string) => {
    const newStorage = localStorage.filter(
      (item) => item.name !== removedItemName
    );
    setLocalStorage([...newStorage]);
    toast(`${capitalizeFirstLetter(removedItemName)} removed`, {
      type: "info",
    });
  };

  return (
    <div className="bg-gray-600">
      <About />
      <CalorieCounterBox meal={localStorage} />
      <SearchBox onClick={handleAddFood} />
      <FoodGrid meal={localStorage} onClick={handleRemoveFood} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Layout;
