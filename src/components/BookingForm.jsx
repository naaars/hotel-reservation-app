import { useForm } from "react-hook-form";
import { Typography, Input, Button } from "@mui/material";
import toast from "react-hot-toast";
import useStore from "../store";

function BookingForm({ hotel }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const addReservation = useStore((state) => state.addReservation);

    const onSubmit = (data) => {
        addReservation(hotel, data);
        toast.success("Reservation added!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="date" {...register("startDate", { required: true })} />
            {errors.startDate && (
                <Typography style={{ color: "red" }}>
                    Start date is required
                </Typography>
            )}
            <br />
            <Input type="date" {...register("startDate", { required: true })} />
            {errors.startDate && (
                <Typography style={{ color: "red" }}>
                    Start date is required
                </Typography>
            )}
            <br />
            <br />
            <Button variant="contained" type="submit">
                Book now
            </Button>
        </form>
    );
}

export default BookingForm;
