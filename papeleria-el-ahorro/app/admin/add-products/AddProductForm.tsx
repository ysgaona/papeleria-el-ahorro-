"use client";

import Button from "@/app/components/button/Button";
import Heading from "@/app/components/home/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import SubCategoryInput from "@/app/components/inputs/SubCategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import { categories, subcategories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";


export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};
export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState<ImageType[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      characteristics: "",
      code: "",
      measures: "",
      color: "",
      brand: "",
      category: "",
      subcategory: "",
      inStock: false,
      images: [],
      price: "",
    },
  });
  const setCustomValue = useCallback(
    (id: string, value: any) => {
      setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  useEffect(() => {
    setCustomValue("images", images);
  }, [images, setCustomValue]);

  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated, reset, setImages]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product Data", data);
    //upload images to firebase
    //save product to mongodb
    setIsLoading(true);
    let uploadedImages: UploadedImageType[] = [];

    if (!data.category) {
      setIsLoading(false);
      return toast.error("Category is not selected!");
    }
    if (!data.subcategory) {
      setIsLoading(false);
      return toast.error("Subcategory is not selected!");
    }

    if (!data.images || data.images.length === 0) {
      setIsLoading(false);
      return toast.error("No selected image!");
    }

    const handleImageUploads = async () => {
      toast("Creando producto, espere un momento");
      try {
        for (const item of data.images) {
          if (item.image) {
            const fileName = new Date().getTime() + "-" + item.image.name;
            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `ecommerce/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.image);

            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  console.log("Error subiendo la imagen", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                      uploadedImages.push({
                        ...item,
                        image: downloadURL,
                      });
                      console.log("File available at", downloadURL);
                      resolve();
                    })
                    .catch((error) => {
                      console.log(
                        "Error al descargar la URL de la imagen",
                        error
                      );
                      reject(error);
                    });
                }
              );
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };
    await handleImageUploads();
    const productData = { ...data, images: uploadedImages };
    axios
      .post("/api/product", productData)
      .then(() => {
        toast.success("Product created");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch((error) => {
        toast.error(
          "Algo salió mal al guardar el producto en la base de datos."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const category = watch("category");
  const subcategory = watch("subcategory");

  const addImageToState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }
      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        );
        return filteredImages;
      }
      return prev;
    });
  }, []);

  return (
    <>
      <Heading title="Añadir Productos" center />
      <div className=" flex justify-center ">
        <div className="w-[720px]">
          <Input
            id="name"
            label="Nombre"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm">
              {errors.name.message as string}
            </p>
          )}
          <Input
            id="code"
            label="Código"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.code?.message && (
            <p className="text-red-500 text-sm">
              {errors.code.message as string}
            </p>
          )}
          <Input
            id="brand"
            label="Marca"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.brand?.message && (
            <p className="text-red-500 text-sm">
              {errors.brand.message as string}
            </p>
          )}
          <Input
            id="color"
            label="Color"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.color?.message && (
            <p className="text-red-500 text-sm">
              {errors.color.message as string}
            </p>
          )}
          <Input
            id="price"
            label="Precio"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="number"
            required
          />
          {errors.price?.message && (
            <p className="text-red-500 text-sm">
              {errors.price.message as string}
            </p>
          )}
          <Input
            id="measures"
            label="Dimensión"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.measures?.message && (
            <p className="text-red-500 text-sm">
              {errors.measures.message as string}
            </p>
          )}

          <TextArea
            id="characteristics"
            label="Características"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.characteristics?.message && (
            <p className="text-red-500 text-sm">
              {errors.characteristics.message as string}
            </p>
          )}
          <TextArea
            id="description"
            label="Descripción"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          {errors.description?.message && (
            <p className="text-red-500 text-sm">
              {errors.description.message as string}
            </p>
          )}
          <CustomCheckBox
            id="inStock"
            register={register}
            label="Este producto está en stock"
          />
        </div>
      </div>

      <div className="w-full font-medium mt-3 pr-8 pl-8">
        <div className="mb-2 font-semibold">Seleccione una categoria</div>
        <div className="grid grid-cols-5 md:grid-cols-5 gap-2 max-h[50vh] overflow-y-auto">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span text-xs">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full font-medium mt-3 pr-8 pl-8">
        <div className="mb-2 font-semibold">Seleccione una Subcategoria</div>
        <div className="grid grid-cols-5 md:grid-cols-5 gap-2 max-h[50vh] overflow-y-auto">
          {subcategories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span text-xs">
                <SubCategoryInput
                  onClick={(subcategory) =>
                    setCustomValue("subcategory", subcategory)
                  }
                  selected={subcategory === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col flex-wrap mt-3 gap-4 pr-8 pl-8">
        <div>
          <div className="font-bold">
            Seleccione el color del producto y suba la imagen
          </div>
          <div className="text-sm">
            Debe cargar una imagen para cada uno de los colores seleccionados,
            de lo contrario se ignorará la selección de color.
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {colors.map((item, index) => {
            return (
              <SelectColor
                key={index}
                item={item}
                addImageToState={addImageToState}
                removeImageFromState={removeImageFromState}
                isProductCreated={isProductCreated}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <Button
          label={isLoading ? "Cargando..." : "Añadir Producto"}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export default AddProductForm;
