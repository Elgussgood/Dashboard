import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Chart from 'react-apexcharts'
import Switch from '../../components/switch'
import '../../index.css'
const DatesDash = () => {
    const [Mode, setMode]= useState(true);
    //Gráfica de citas por día en el mes
    const [series, setSeries]= useState([{
        name: 'Dia',
        data: [31, 40, 28, 51, 42, 109, 100]
    }])

    const [options, setOptions] = useState({
        chart: {
            type: 'area',
            fontFamily: 'Inter',
            stacked: false,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom'
                }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            },
            title: {
                text: 'Citas por día en el mes',
                align: 'left'
            },
            fill: {
                type: 'gradient',
                gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
                },
            },
            yaxis: {
                labels: {
                        formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            title: {
                text: 'Citas'
            },
            },
            xaxis: {
                type: 'datetime',
                title: {
                    text: "Días del mes",
                },
            },
            tooltip: {
                shared: false,
                y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                }
                }
            }
    })

    //Grafica de citas totales y especie

    const [series2, setSeries2]= useState([{
            name: 'Perros',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Gatos',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Conejos',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Hurones',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Mini piggs',
            data: [25, 12, 19, 32, 25, 24, 10]
    }])

    const [options2, setOptions2] = useState({
        chart: {
            fontFamily: 'Inter',
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                    enabled: true,
                    offsetX: 0,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        stroke: {
            width: 1,
        },
        title: {
            text: 'Citas totales por especie en el mes'
        },
        xaxis: {
            categories: ['Veterinaria 1', 'Veterinaria 2', 'Veterinaria 3', 'Veterinaria 4', 'Veterinaria 5', 'Veterinaria 6', 'Veterinaria 7'],
            labels: {
                formatter: function (val) {
                return val + "K"
                }
            },
            title: {
                text: "Citas totales",
            },
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                return val + "K"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        },
    })

    //Gráfica Cantidad de mascotas por usuarios

    const [series3, setSeries3]= useState([{
        name: 'Número de usuarios',
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }])

    const [options3, setOptions3] = useState({
        chart: {
            fontFamily: 'Inter',
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [1,2,3,4,5,6,7,8],
            labels: {
                style: {
                    fontSize: '12px'
                }
            },
            title: {
                text: "Número de mascotas",
            },
        },
        yaxis: {
            title: {
                text: 'Usuarios'
            },
        },
        title: {
            text: 'Número de mascotas por usuario',
        },
    })

    //Gráfica de citas por veterinaria

    const series4=[421, 772, 523, 281, 652]

    const [options4, setOptions4] = useState({
        chart: {
            type: 'polarArea'
        },
        labels: ['Veterinaria 1', 'Veterinaria 2', 'Veterinaria 3', 'Veterinaria 4', 'Veterinaria 5'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
            }
        },
        theme: {
            monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
            }
        }
    })

    //Gráfica 

    return (
        
        <>
        {Mode ? (
            <div className='w-screen h-screen flex'>
            <Navbar/>
            <div className="flex items-center w-[85%] h-full">

                    <div className='w-full h-6/7'>

                        <div className="h-1/7 flex items-center justify-center text-green text-3xl font-semibold">
                            Citas
                        </div>
<<<<<<< HEAD
                        <Switch
                        Mode={'leftswitch'}
                        Click={Mode? setMode(false) : setMode(true)}
                        />
                        <div className="graphs bg-neutral-500 overflow-y-scroll flex w-[100%] h-[73%]">
=======

                        <div className="switch_conteiner h-[12%]">
                            <div className='AQUIVA_TU_PERRO_SWITCH w-full'>Switch</div>
                        </div>
                        
                        <div className="graphs overflow-y-scroll w-[100%] h-[73%]">
>>>>>>> 14244e893b5c7a3f7d68f1779869df732fc97fee

                            <div className=' flex w-[95%] h-[73%] justify-around mt-[5.5%] ml-[2.3%] '>

                                <div className="chart1 w-[46%] bg-[#D9D9D9] rounded-1/7">
                                    <div className='mt-[2%]'>
                                        <Chart 
                                            series={series} 
                                            options={options} 
                                            type='area'
                                        />
                                    </div>
                                </div>

                                <div className="chart2 w-[46%] bg-[#D9D9D9] rounded-1/7">
                                    <div className='mt-[2%]'>
                                        <Chart 
                                            series={series2}
                                            options={options2}
                                            type='bar'
                                        />
                                    </div>
                                </div>

                            </div>
<<<<<<< HEAD
                            <div className="chart2 chart1 w-[40%] ml-[10%] mt-[6.5%] h-[67%] bg-[#D9D9D9] rounded-1/7">
                                <div className='mt-[2%] h-[90%]'>
                                    <Chart 
                                        series={series2}
                                        options={options2}
                                        type='bar'
                                    />
=======

                            <div className=' w-full h-[122%] flex items-center justify-center'>

                                <div className='chart3 w-[55%] bg-[#D9D9D9] rounded-1/7'>
                                    <div className='mt-[2%]'>
                                        <Chart
                                            series={series3}
                                            options={options3}
                                            type='bar'
                                        />
                                    </div>
>>>>>>> 14244e893b5c7a3f7d68f1779869df732fc97fee
                                </div>

                            </div>

                            <div className='w-full h-full flex justify-around'>

                                <div className='chart4 w-[40%] h-[85%]  bg-[#D9D9D9] rounded-1/7'>
                                    <div className='mt-[2%]'>
                                        <Chart 
                                            series={series4}
                                            options={options4}
                                            type='polarArea'
                                        />
                                    </div>
                                </div>

                                <div className='chart5 w-[40%] h-[85%]  bg-[#D9D9D9] rounded-1/7'>
                                    <div className='mt-[2%]'>
                                        
                                    </div>
                                </div>

                            </div>
<<<<<<< HEAD
                        </div>
=======

                        </div>
                            

                            {/* <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati nisi maxime vel aut nobis, natus similique, provident itaque exercitationem expedita dignissimos harum aliquam iusto perspiciatis placeat laboriosam, numquam necessitatibus? 
                            </div> */}
                        

>>>>>>> 14244e893b5c7a3f7d68f1779869df732fc97fee
                        {/* <div className="conteiner4 flex flex-row justify-around bg-slate-900 w-10/12 h-2/5 ">
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales usuarios</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales de animales</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales en el día</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Promedio de citas en el mes</div>
                        </div> */}
                    </div>
                </div>
        </div>
        ):(
        <div className='w-screen h-screen flex'>    
            <Navbar/>
            <div className="flex items-center w-[85%] h-full">
                    <div className='w-full h-6/7'>
                        <div className="h-1/7 flex items-center justify-center text-green text-3xl font-semibold">
                            Citas datos
                        </div>
                        <div className="switch_conteiner h-[10%] w-full mb-[2%]">
                            <div className='w-[15%] h-[100%] ml-[5%] bg-[#6ED4A5] p-[.5%] rounded-[3vw] items-center content-center'>
                                <div className='h-full w-full bg-white rounded-[3vw] p-[5%] '> 
                                    <div className="h-[6vh] w-[3.5vw] bg-[#6ED4A5] rounded-[50%] float-left"></div>
                                </div>
                            </div>
                        </div>
                        <div className="graphs bg-neutral-500 overflow-y-scroll flex w-[100%] h-[73%]">
                            <div className="chart1 w-[40%] ml-[5%] mt-[6.5%] h-[67%] bg-[#D9D9D9] rounded-1/7">
                                <div className=' mt-[2%] h-[90%]'>
                                    <Chart 
                                        series={series} 
                                        options={options} 
                                        type='area'
                                    />
                                </div>
                            </div>
                            <div className="chart2 chart1 w-[40%] ml-[10%] mt-[6.5%] h-[67%] bg-[#D9D9D9] rounded-1/7">
                                <div className='mt-[2%] h-[90%]'>
                                    <Chart 
                                        series={series2}
                                        options={options2}
                                        type='bar'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="conteiner4 flex flex-row justify-around bg-slate-900 w-10/12 h-2/5 ">
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales usuarios</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales de animales</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales en el día</div>
                            <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Promedio de citas en el mes</div>
                        </div> */}
                    </div>
                </div>  
        </div>
        )}
        </>
        
    )
}

export default DatesDash
