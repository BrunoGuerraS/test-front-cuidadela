"use client";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Resistencia from "../assets/resistencia.png";

type FormValues = {
  user: string;
  password: string;
};

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      user: "",
      password: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    // console.log(data);
    return []
  };
  return (
    <main
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          border: "2px solid #a0c528",
          borderRadius: "20px",
          backgroundColor: "#fffffff",
        }}
      >
        {/* <Image
          src={Title}
          width={480}
          height={140}
          alt="title"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        /> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{
            width: "60%",
            paddingBottom: "60px",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <TextField
              label="AKA"
              placeholder="Aka"
              sx={{ color: "white" }}
              {...register("user", { required: true })}
            />
            <TextField
              label="Passwod"
              placeholder="Pass"
              type="password"
              sx={{ color: "white" }}
              {...register("password", { required: true })}
            /> */}

            <Image
              src={Resistencia}
              alt="resistencia"
              width={500}
              height={300}
              style={{ marginTop: "40px" }}
            />
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              LA RESISTENCIA
            </h2>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: "white",
                marginBottom: "20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
              onClick={() => router.push("/dashboard")}
            >
              START
            </Button>
          </Stack>
        </form>
      </Box>
    </main>
  );
}
