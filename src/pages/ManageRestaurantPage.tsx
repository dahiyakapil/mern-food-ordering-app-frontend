import ManageRestaurantForm from "@/forms/manage-restuarant-form/ManageRestaurantForm";
import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant} from "@/api/MyRestaurantApi";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm 
    restaurant={restaurant}
    onSave={isEditing ? updateRestaurant :  createRestaurant} 
    isLoading={isCreateLoading || isUpdateLoading} />
  );
};

export default ManageRestaurantPage;


