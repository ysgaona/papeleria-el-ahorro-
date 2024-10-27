

import { getCurrentUser } from "@/app/api/actions/getCurrentUser";
import Container from "@/app/components/container/Container";
import NullData from "@/app/components/status/NullData";
import AddProductForm from "./AddProductForm";

const AddProducts =async () => {

  const currentUser = await getCurrentUser(); 
  
  if (!currentUser||currentUser.role !=='ADMIN'){
    return <NullData title="Oops Access denied"/>;
  }
  return (
    <div className="p-2">
      <Container>
       
          <AddProductForm />
      
      </Container>
    </div>
  );
};

export default AddProducts;
