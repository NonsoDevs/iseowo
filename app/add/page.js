import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const rules = yup.object().shape({
  business_name: yup.string().required().min(6),
  category: yup.string().notOneOf(["none"]),
  sub_category: yup.string().notOneOf(["none"]),
  state: yup.string().notOneOf(["none"]),
  lga: yup.string().notOneOf(["none"]),
  business_description: yup.string().required().min(20),
  website: yup.string().max(60),
});

export default function Page() {
  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      business_name: "",
      category: "",
      sub_category: "",
      state: "",
      lga: "",
      business_description: "",
      website: "",
    },
    onSubmit: () => {},
    validationSchema: rules,
  });
  return (
    <main className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
      <div className="w-full md:w-[420px] rounded-md bg-white shadow-md md:p-4">
        <hi className="text-2xl font-thin">Add a business</hi>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <TextField type="text" id="business_name" />
          </div>
        </form>
      </div>
    </main>
  );
}
