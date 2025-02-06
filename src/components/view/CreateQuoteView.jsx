// import React from "react";

import {
  Autocomplete,
  Button,
  Card,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CreateQuoteView = () => {
  const countries = ["COP - EUR", "COP - JPY", "COP - USD"];
  const items = [
    { id: 1, name: "", price: "$10", s:'s', p:'p', q:'q' },
    { id: 2, name: "", price: "$20" },
    { id: 3, name: "", price: "$30" },
  ];

  return (
    <Container maxWidth>
      <Grid container>
        <Grid item md={2} container padding={"1rem 2rem"}>
          <Grid
            md={12}
            container
            direction={"column"}
            justifyContent={"flex-start"}
            margin={"3rem 0"}
            paddingTop={"4rem"}
            style={{ background: "" }}
          >
            <Grid item>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Cotizaciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Clientes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Procedimientos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Costos Operación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Usuarios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Reportes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container alignItems={"center"} gap={"0.5rem"}>
                    <Grid
                      height={"20px"}
                      width={"20px"}
                      style={{ background: "gray" }}
                    />
                    <Typography>Crear Cotización</Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={10}>
          <Grid md={12} container margin={"3rem 0"} style={{ background: "" }}>
            <Grid item md={8}>
              <Typography variant="h5" color={"black"} fontWeight={"bold"}>
                Cotización REF1#123
              </Typography>
            </Grid>
            <Grid item container justifyContent={"flex-end"} md={4}>
              <Button
                style={{
                  background: "gray",
                  color: "white",
                  width: "200px",
                }}
              >
                Generar
              </Button>
            </Grid>
          </Grid>

          <Grid
            md={12}
            container
            style={{ background: "" }}
            gap={""}
            justifyContent={"space-between"}
          >
            <Grid item md={7} style={{ background: "" }} padding={"0"}>
              {/* #1 */}

              <Card
                elevation={6}
                style={{ height: "400px", borderRadius: "16px" }}
              >
                <Grid container direction={"column"} md={12}>
                  <Grid
                    item
                    md={12}
                    padding={"1rem"}
                    // borderBottom={"1px solid gray"}
                  >
                    <Typography color={"black"} fontWeight={"bold"}>
                      Detalles
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    item
                    md={12}
                    // padding={"1rem"}
                    borderTop={"2px solid gray"}
                    // gap={"1rem"}
                    style={{ background: "" }}
                    justifyContent={"space-between"}
                  >
                    <Grid
                      item
                      container
                      direction={"column"}
                      gap={"2rem"}
                      md={6}
                      borderRight={"2px solid gray"}
                      style={{ background: "" }}
                      padding={"1rem"}
                      height={"400px"}
                    >
                      <Typography
                        align="center"
                        color={"black"}
                        fontWeight={"bold"}
                      >
                        Descripción
                      </Typography>
                      <TextField
                        placeholder="Ingresa descripción"
                        rows={8}
                        multiline
                      />
                    </Grid>

                    <Grid
                      item
                      md={6}
                      padding={"1rem"}
                      style={{ background: "" }}
                    >
                      <Typography
                        align="center"
                        color={"black"}
                        fontWeight={"bold"}
                      >
                        Factura
                      </Typography>

                      <Grid
                        item
                        container
                        direction={"column"}
                        gap={"1rem"}
                        md={12}
                        style={{ background: "" }}
                        padding={"1rem"}
                        margin={"1rem 0"}
                      >
                        <Grid
                          item
                          container
                          alignItems={"center"}
                          style={{ background: "" }}
                        >
                          <Grid item md={6}>
                            <Typography color={"black"}>Divisa</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Autocomplete
                              options={countries}
                              size="small"
                              defaultValue={"COP - USD"}
                              renderInput={(params) => (
                                <TextField {...params} label="Divisa" />
                              )}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          container
                          alignItems={"center"}
                          style={{ background: "" }}
                        >
                          <Grid item md={6}>
                            <Typography color={"black"}>Descuento</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Typography color={"black"}>$50.000</Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          container
                          alignItems={"center"}
                          margin={"3rem 0"}
                          style={{ background: "" }}
                        >
                          <Grid item md={6}>
                            <Typography color={"black"}>Total pago</Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Typography color={"black"}>$100.000</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={4} style={{ background: "" }}>
              <Card
                elevation={6}
                style={{ height: "400px", borderRadius: "16px" }}
              >
                <Grid container direction={"column"} md={12}>
                  <Grid
                    item
                    container
                    md={12}
                    alignItems={"center"}
                    padding={"1rem 1.5rem"}
                  >
                    <Grid item md={8}>
                      <Typography color={"black"} fontWeight={"bold"}>
                        Datos del cliente
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <TextField placeholder="Buscar cliente" size="small" />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    md={12}
                    container
                    gap={"1rem"}
                    borderTop={"2px solid gray"}
                    padding={"1rem 2rem"}
                    style={{ background: "" }}
                  >
                    {/* <Grid item container></Grid> */}
                    <Grid item md={12} container>
                      <Grid item md={6} container direction={"column"}>
                        <Grid item>
                          <Typography color={"black"} fontWeight={"bold"}>
                            Primer nombre
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={"gray"}>Ahmed</Typography>
                        </Grid>
                      </Grid>
                      <Grid item md={6} container direction={"column"}>
                        <Grid item>
                          <Typography color={"black"} fontWeight={"bold"}>
                            Apellido
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={"gray"}>Istiaq Khan</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12} container>
                      <Grid item md={6} container direction={"column"}>
                        <Grid item>
                          <Typography color={"black"} fontWeight={"bold"}>
                            Identificación
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={"gray"}>121212121</Typography>
                        </Grid>
                      </Grid>
                      <Grid item md={6} container direction={"column"}>
                        <Grid item>
                          <Typography color={"black"} fontWeight={"bold"}>
                            Número de telefono
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={"gray"}>+03 902039</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={12} container>
                      <Grid item md={6} container direction={"column"}>
                        <Grid item>
                          <Typography color={"black"} fontWeight={"bold"}>
                            Dirección
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color={"gray"}>
                            38/9 Future Niharika
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent={"flex-end"}
                    padding={"0 1rem"}
                    style={{ background: "" }}
                  >
                    <Grid item marginTop={"2rem"}>
                      <Button
                        style={{
                          background: "gray",
                          color: "white",
                          width: "200px",
                        }}
                      >
                        Actualizar Datos
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Grid md={12} container margin={"3rem 0"} style={{ background: "" }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Servicio</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Descuento</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateQuoteView;
