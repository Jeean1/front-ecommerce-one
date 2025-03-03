import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Importar desde "swiper/modules"
import "swiper/css";

const AutoScrollCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]} // ✅ Pasar Autoplay como módulo aquí
      spaceBetween={10}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide onClick={() => alert("active")}>
        <img
          src="https://lol-stats.net/uploads/4oFJWfOt73gESxXmHb0aAyij5wSDnQU5shtOjf8p.jpeg"
          alt="Slide 1"
          style={{
            width: "100%", // La imagen se ajusta al ancho del contenedor
            height: "500px", // Altura fija para evitar que agrande la Grid
            objectFit: "cover", // Recorta la imagen para llenar el espacio sin deformarse
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/da0f1a6e-9c23-4289-bbd8-87e81985c4d7-profile_banner-480.jpeg"
          alt="Slide 2"
          style={{
            width: "100%", // La imagen se ajusta al ancho del contenedor
            height: "500px", // Altura fija para evitar que agrande la Grid
            objectFit: "cover", // Recorta la imagen para llenar el espacio sin deformarse
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images2.alphacoders.com/237/thumb-1920-237050.jpg"
          alt="Slide 3"
          style={{
            width: "100%", // La imagen se ajusta al ancho del contenedor
            height: "500px", // Altura fija para evitar que agrande la Grid
            objectFit: "cover", // Recorta la imagen para llenar el espacio sin deformarse
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AutoScrollCarousel;
