import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Chart from "react-apexcharts";

import {
  Graph,
  ContainerTwoGraph,
  DataEstadistic,
  TotalDatesGraph,
  GraphDays,
  GraphUsuDate,
  GraphEspecies,
  GraphEdad,
  GraphMarcasPop,
  GraphVacunacion,
  GraphEnfermedades,
  SwitchButton,
  Listcategorias,
  Listaenfermadesporedad,
  Listavacunasporespecie,
  Listaenfermedadesporespecie,
  Listadeproductospormarca,
} from "./componetsdates";
const DatesDash = () => {
  //Gráfica de citas por día en el mes
  const [Mode, setMode] = useState(true);

  //Grafica de citas totales y especie

  //Gráfica Cantidad de citas po usuario

  //Gráfica
  const [Graph1, setGraph1] = useState(false);
  const [Graph3, setGraph3] = useState(false);
  const [Graph4, setGraph4] = useState(false);
  const [Graph5, setGraph5] = useState(false);
  const [Graph6, setGraph6] = useState(false);
  const [Graph7, setGraph7] = useState(false);
  const [Graph8, setGraph8] = useState(false);
  return (
    <>
      {Mode ? (
        <div className="w-screen h-screen flex">
          <div className="flex items-center w-full h-full">
            <div className="w-full h-6/7">
              <div className="h-1/7 flex items-center justify-center text-green text-3xl font-semibold">
                DashBoard
              </div>
              <div className="overflow-y-scroll w-[100%] h-[85%] pl-[1vw] bg-[#fff] first-letter:|">
                <ContainerTwoGraph
                  Grahp1={
                    Graph1 ? (
                      <DataEstadistic
                        Type={"Citas"}
                        SubX={"Media de citas por dia"}
                        Media={129}
                        SubMd={"Mediana de citas por dia"}
                        Mediana={1234}
                        SubMo={"Moda de citas por dia"}
                        Moda={2344}
                        click={() => {
                          setGraph1(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Cantidad de citas por dia del mes"}
                        Graph={<GraphDays />}
                        click={() => {
                          setGraph1(true);
                        }}
                      />
                    )
                  }
                  Grhap2={
                    <Graph
                      Name={"Citas totales"}
                      Graph={<TotalDatesGraph />}
                      click={() => {
                        setGraph2(true);
                      }}
                    />
                  }
                />
                <ContainerTwoGraph
                  Grahp1={
                    Graph3 ? (
                      <DataEstadistic
                        Type={"Citas"}
                        SubX={"Media de citas por usuario"}
                        Media={129}
                        SubMd={"Mediana de citas por usuario"}
                        Mediana={1234}
                        SubMo={"Moda de citas por usuario"}
                        Moda={2344}
                        children={<Listcategorias />}
                        click={() => {
                          setGraph3(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Productos mas usados en citas"}
                        Graph={<GraphUsuDate />}
                        click={() => {
                          setGraph3(true);
                        }}
                      />
                    )
                  }
                  Grhap2={
                    Graph4 ? (
                      <DataEstadistic
                        Type={""}
                        SubX={"Media de animales registrados"}
                        Media={129}
                        SubMd={"Mediana de animales registrados"}
                        Mediana={1234}
                        SubMo={"Moda de animales registrados"}
                        Moda={2344}
                        click={() => {
                          setGraph4(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Cantidad de animales"}
                        Graph={<GraphEspecies />}
                        click={() => {
                          setGraph4(true);
                        }}
                      />
                    )
                  }
                />
                <ContainerTwoGraph
                  Grahp1={
                    Graph5 ? (
                      <DataEstadistic
                        Type={"Años"}
                        SubX={"Media de años"}
                        Media={129}
                        SubMd={"Mediana de años"}
                        Mediana={1234}
                        SubMo={"Moda de años"}
                        Moda={2344}
                        children={<Listaenfermadesporedad />}
                        click={() => {
                          setGraph5(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Edad de las mascotas por especie"}
                        Graph={<GraphEdad />}
                        click={() => {
                          setGraph5(true);
                        }}
                      />
                    )
                  }
                  Grhap2={
                    Graph6 ? (
                      <DataEstadistic
                        Type={"Vacunas"}
                        SubX={"Media de vacunas"}
                        Media={129}
                        SubMd={"Mediana de vacunas"}
                        Mediana={1234}
                        SubMo={"Moda de vacunas"}
                        Moda={2344}
                        children={<Listavacunasporespecie />}
                        click={() => {
                          setGraph6(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Vacunas aplicadas por especie"}
                        Graph={<GraphVacunacion />}
                        click={() => {
                          setGraph6(true);
                        }}
                      />
                    )
                  }
                />
                <ContainerTwoGraph
                  Grahp1={
                    Graph7 ? (
                      <DataEstadistic
                        Type={"Enfermedades"}
                        SubX={"Media de enfermedades"}
                        Media={129}
                        SubMd={"Mediana de enfermedades"}
                        Mediana={1234}
                        SubMo={"Moda de enfermedades"}
                        Moda={2344}
                        children={<Listaenfermedadesporespecie />}
                        click={() => {
                          setGraph7(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Enfermades mas comuenes por especie"}
                        Graph={<GraphEnfermedades />}
                        click={() => {
                          setGraph7(true);
                        }}
                      />
                    )
                  }
                  Grhap2={
                    Graph8 ? (
                      <DataEstadistic
                        Type={"Mascotas"}
                        SubX={"Media de mascotas"}
                        Media={129}
                        SubMd={"Mediana de mascotas"}
                        Mediana={1234}
                        SubMo={"Moda de mascotas"}
                        Moda={2344}
                        children={<Listadeproductospormarca />}
                        click={() => {
                          setGraph8(false);
                        }}
                      />
                    ) : (
                      <Graph
                        Name={"Marcas mas consumidas por especies"}
                        Graph={<GraphMarcasPop />}
                        click={() => {
                          setGraph8(true);
                        }}
                      />
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex">
          <Navbar />
          puto
        </div>
      )}
    </>
  );
};

export default DatesDash;
