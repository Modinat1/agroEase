import * as yup from "yup";

let shippingSchema = yup.object().shape({
	username: yup.string().required("Required"),
	phone: yup.number().required("Required"),
	country: yup.string().required("Required"),
	state: yup.string().required("Required"),
	city: yup.string().required("Required"),
	zip: yup.string().required("Required"),
	address: yup.string().required("Required"),
});

export default shippingSchema;
