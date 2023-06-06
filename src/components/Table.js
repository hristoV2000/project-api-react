import React, { useEffect, useState } from 'react'

const Table = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('https://enet-test.s3.eu-west-1.amazonaws.com/data_structure.json')
      .then((response) => response.json())
      .then((data) => {
        setResult([data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className='bg-gray-100 py-8 min-h-screen flex justify-center'>
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <div>
                    <h2 className='py-3 pl-2 font-semibold text-base'>England Premier League</h2>
                  </div>
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {result?.map((item, index) => {
                        let Arrr = []
                        Object.keys(item.data).forEach((key) => {
                          Arrr.push(item.data[key])
                        })
                        return Arrr?.sort((a, b) => {
                          return new Date(a.start_date) - new Date(b.start_date);
                        }).map((val) => {
                          const date = new Date(val?.start_date);
                          const hours = date.getHours();
                          const minutes = date.getMinutes();
                          const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                          return (
                            <tr key={index}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 border-r border-b-gray-100 w-[100px]">
                                {formattedTime}
                              </td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">{val?.status}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex justify-start gap-4 items-center w-[500px] mx-auto">
                                <div className='min-w-[80px] text-right'>{val?.par[1]?.name}</div>

                                {(() => {
                                  switch (val?.par[1]?.name) {
                                    case 'West Ham':
                                      return <img src="https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_96x96.png" width="20px" />
                                    case 'Brighton':
                                      return  <img src="https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png" width="20px" />
                                    case 'Tottenham':
                                      return  <img src="https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_96x96.png" width="20px" />
                                    default:
                                      return null
                                  }
                                })()}
                                  <div className='bg-gray-100 flex gap-2 px-6 py-1 rounded-full border border-gray-50'>
                                  <div>{val?.par[1]?.res}
                                  </div>-
                                  <div>{val?.par[2]?.res}</div>
                                </div>
                                {(() => {
                                  switch (val?.par[2]?.name) {
                                    case 'Manchester United':
                                      return <img src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png" width="20px" />
                                    case 'Leicester':
                                      return  <img src="https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_96x96.png" width="20px" />
                                    case 'Chelsea':
                                      return  <img src="https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_96x96.png" width="20px" />
                                    default:
                                      return null
                                  }
                                })()}
                                <div className='min-w-[80px] text-left'>{val?.par[2]?.name}</div>
                              </td>
                            </tr>
                          )
                        })
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table