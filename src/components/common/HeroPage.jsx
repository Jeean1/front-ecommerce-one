import { Button, Typography, Box } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundImage: "url('/public/pic-one-hero.webp')", // Usa la imagen generada
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "#333", // Tono gris oscuro para legibilidad
        px: 3,
        backdropFilter: "blur(3px)", // Sutil desenfoque para mejorar contraste
        borderRadius: "0.5rem",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          textShadow: "1px 1px 5px rgba(255,255,255,0.6)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          p: 1.5,
          borderRadius: "10px",
        }}
      >
        Pinturas del pacifico
      </Typography>

      <Typography
        variant="h5"
        mt={2}
        sx={{
          textShadow: "1px 1px 3px rgba(255,255,255,0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          p: 1,
          borderRadius: "8px",
        }}
      >
        Pinturas de calidad para un ambiente armonioso y moderno
      </Typography>

      <Box mt={3} display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6D6D6D",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            "&:hover": { backgroundColor: "#4D4D4D" },
          }}
        >
          Explorar Colores
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#6D6D6D",
            color: "#333",
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            "&:hover": { borderColor: "#4D4D4D", color: "#4D4D4D" },
          }}
        >
          Comprar Pinturas
        </Button>
      </Box>
    </Box>
  );
}
